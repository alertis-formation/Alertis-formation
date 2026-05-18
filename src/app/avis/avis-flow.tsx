"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowUpRight,
  ChevronDown,
  MapPin,
  RefreshCw,
  Star,
} from "lucide-react";
import { formationCategories, type NavItem } from "@/lib/site-config";
import {
  pickRandomEstablishment,
  getEligibleEstablishments,
  type Establishment,
} from "@/lib/establishments";

const categories: NavItem[] = [
  ...formationCategories,
  {
    label: "AFGSU",
    href: "/nos-formations-afgsu",
    description: "Gestes et soins d'urgence pour professionnels de santé",
  },
];

export function AvisFlow() {
  const [selectedHref, setSelectedHref] = useState<string>("");
  const [establishment, setEstablishment] = useState<Establishment | null>(
    null,
  );

  useEffect(() => {
    if (!selectedHref) {
      setEstablishment(null);
      return;
    }
    setEstablishment(pickRandomEstablishment(selectedHref));
  }, [selectedHref]);

  const reroll = () => {
    if (!selectedHref) return;
    setEstablishment(pickRandomEstablishment(selectedHref));
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
            onChange={(e) => setSelectedHref(e.target.value)}
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

      {establishment && selectedCategory && (
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] items-start bg-white border border-[color:var(--brand-gray-medium)]/15 rounded-sm p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="space-y-4 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[color:var(--brand-red)]">
              Formation {selectedCategory.label}
            </div>
            <h3 className="text-xl text-[color:var(--brand-charcoal)] font-semibold">
              {establishment.name}
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
