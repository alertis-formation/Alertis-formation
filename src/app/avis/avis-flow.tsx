"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Link as LinkIcon,
  MapPin,
  RefreshCw,
  Star,
} from "lucide-react";
import { formationCategories, type NavItem } from "@/lib/site-config";
import {
  getEligibleEstablishments,
  getEstablishmentByCode,
  type Establishment,
} from "@/lib/establishments";

const categories: NavItem[] = [
  ...formationCategories,
  {
    label: "SST",
    href: "/formations-sst",
    description: "Sauveteur Secouriste du Travail — initial et MAC",
  },
  {
    label: "AFGSU",
    href: "/nos-formations-afgsu",
    description: "Gestes et soins d'urgence pour professionnels de santé",
  },
];

// Slug canonique écrit dans l'URL (?categorie=...) pour chaque href.
const CATEGORY_HREF_TO_SLUG: Record<string, string> = {
  "/nos-formations-afgsu": "afgsu",
  "/formations-sst": "sst",
  "/formations-secourisme": "secourisme",
  "/formations-securite-incendie": "incendie",
  "/formations-habilitation-electrique": "habilitation",
  "/formations-ergonomie": "ergonomie",
  "/formations-prevention": "prevention",
  "/formations-safety-day": "safety-day",
};

// Alias acceptés en entrée (?categorie=...) ; inclut le slug canonique et
// quelques variantes longues pour rester tolérant.
const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  ...Object.fromEntries(
    Object.entries(CATEGORY_HREF_TO_SLUG).map(([href, slug]) => [slug, href]),
  ),
  "securite-incendie": "/formations-securite-incendie",
  "habilitation-electrique": "/formations-habilitation-electrique",
};

function resolveCategorySlug(slug: string | null): string {
  if (!slug) return "";
  return CATEGORY_SLUG_ALIASES[slug.toLowerCase()] ?? "";
}

// File d'attente par catégorie : on tire au hasard parmi les établissements
// non encore vus ; quand tous l'ont été, on remet à zéro et on recommence.
// État persisté en localStorage pour survivre aux rechargements.
const SEEN_KEY = (href: string) => `alertis:avis-seen:${href}`;

function readSeen(href: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(SEEN_KEY(href)) ?? "[]");
  } catch {
    return [];
  }
}

function writeSeen(href: string, ids: string[]) {
  try {
    localStorage.setItem(SEEN_KEY(href), JSON.stringify(ids));
  } catch {
    /* localStorage indisponible : on ignore */
  }
}

function pickFromQueue(href: string): Establishment | null {
  const pool = getEligibleEstablishments(href);
  if (pool.length === 0) return null;
  let seen = readSeen(href);
  let available = pool.filter((e) => !seen.includes(e.id));
  if (available.length === 0) {
    seen = [];
    available = pool;
  }
  const picked = available[Math.floor(Math.random() * available.length)];
  writeSeen(href, [...seen, picked.id]);
  return picked;
}

export function AvisFlow() {
  const params = useSearchParams();
  const pinned = params.get("etablissement")
    ? getEstablishmentByCode(params.get("etablissement")!)
    : undefined;
  const initialHref =
    pinned?.categories?.[0] ?? resolveCategorySlug(params.get("categorie"));

  const [selectedHref, setSelectedHref] = useState<string>(initialHref);
  const [establishment, setEstablishment] = useState<Establishment | null>(
    pinned ?? null,
  );
  // L'établissement reste « épinglé » tant que l'utilisateur ne change pas
  // la catégorie ou ne clique pas sur « Autre établissement ».
  const [isPinned, setIsPinned] = useState<boolean>(!!pinned);
  const [copied, setCopied] = useState<boolean>(false);

  const copyShareLink = async () => {
    if (!establishment?.code) return;
    const url = new URL(window.location.href);
    url.search = `?etablissement=${encodeURIComponent(establishment.code)}`;
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard refusé (permissions, contexte non sécurisé) : on ignore.
    }
  };

  useEffect(() => {
    if (isPinned) return;
    if (!selectedHref) {
      setEstablishment(null);
      return;
    }
    setEstablishment(pickFromQueue(selectedHref));
  }, [selectedHref, isPinned]);

  const reroll = () => {
    if (!selectedHref) return;
    setIsPinned(false);
    setEstablishment(pickFromQueue(selectedHref));
  };

  const onCategoryChange = (href: string) => {
    setIsPinned(false);
    setSelectedHref(href);
    // Reflète la sélection dans l'URL via ?categorie= ; supprime ?etablissement=
    // pour éviter qu'un rechargement réépingle l'ancien établissement.
    const url = new URL(window.location.href);
    url.searchParams.delete("etablissement");
    const slug = CATEGORY_HREF_TO_SLUG[href];
    if (slug) url.searchParams.set("categorie", slug);
    else url.searchParams.delete("categorie");
    window.history.replaceState(null, "", url.toString());
  };

  const selectedCategory = categories.find((c) => c.href === selectedHref);
  const eligibleCount = selectedHref
    ? getEligibleEstablishments(selectedHref).length
    : 0;

  return (
    <div className="space-y-8">
      <div>
        <label
          htmlFor="formation-select"
          className="block text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)] mb-3"
        >
          Quelle formation avez-vous suivie ?
        </label>
        <div className="relative">
          <select
            id="formation-select"
            value={selectedHref}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none bg-white border border-[color:var(--brand-gray-medium)]/20 rounded-sm px-5 py-4 pr-12 text-base text-[color:var(--brand-charcoal)] font-medium cursor-pointer hover:border-[color:var(--brand-red)] focus:border-[color:var(--brand-red)] focus:outline-none transition-colors"
          >
            <option value="">— Sélectionnez votre formation —</option>
            {categories.map((cat) => (
              <option key={cat.href} value={cat.href}>
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 size-5 text-[color:var(--brand-gray-medium)]" />
        </div>
      </div>

      {establishment && (
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-start bg-white border border-[color:var(--brand-gray-medium)]/15 rounded-sm p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="space-y-4 min-w-0">
            {selectedCategory && (
              <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)]">
                Formation {selectedCategory.label}
              </div>
            )}
            <h3 className="text-xl text-[color:var(--brand-charcoal)] font-semibold">
              {establishment.code ? (
                <button
                  type="button"
                  onClick={copyShareLink}
                  title="Copier le lien direct vers cet établissement"
                  className="group inline-flex items-baseline gap-2 text-left hover:text-[color:var(--brand-red)] transition-colors"
                >
                  <span>{establishment.name}</span>
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[color:var(--brand-red)]">
                      <Check className="size-3.5" />
                      Lien copié
                    </span>
                  ) : (
                    <LinkIcon className="size-3.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ) : (
                establishment.name
              )}
            </h3>
            {establishment.address && (
              <div className="flex items-start gap-2 text-sm text-[color:var(--brand-gray-medium)]">
                <MapPin className="size-4 mt-0.5 shrink-0 text-[color:var(--brand-red)]" />
                <span className="leading-relaxed">{establishment.address}</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={establishment.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
              >
                <Star className="size-4 fill-current" />
                Laisser un avis
                <ArrowUpRight className="size-4" />
              </a>
              {eligibleCount > 1 && (
                <button
                  type="button"
                  onClick={reroll}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border text-[color:var(--brand-gray)] px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-cream)] transition-colors"
                  title="Tirer un autre établissement au sort"
                >
                  <RefreshCw className="size-4" />
                  Autre établissement
                </button>
              )}
            </div>

            <p className="text-xs text-[color:var(--brand-gray-medium)] leading-relaxed pt-2">
              Scannez le QR code avec votre téléphone pour ouvrir la page
              directement.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 mx-auto">
            <div className="bg-white p-4 rounded-sm ring-1 ring-[color:var(--brand-gray-medium)]/20">
              <QRCodeSVG
                value={establishment.googleReviewUrl}
                size={200}
                level="M"
                marginSize={0}
                fgColor="#1a1a1a"
              />
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-gray-medium)]">
              Scanner pour noter
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
