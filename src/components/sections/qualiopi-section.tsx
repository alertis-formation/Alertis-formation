import Image from "next/image";
import { Download, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const { qualiopi } = siteConfig;

/** "2029-08-06" → "06/08/2029" */
function formatFr(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

const facts = [
  { label: "Certificat n°", value: qualiopi.certificateNumber },
  { label: "Organisme certificateur", value: qualiopi.certifier },
  {
    label: "Validité",
    value: `${formatFr(qualiopi.validFrom)} — ${formatFr(qualiopi.validUntil)}`,
  },
];

type Props = {
  /** Fond de la bande. `cream` par défaut, `white` pour alterner avec la section précédente. */
  background?: "cream" | "white";
};

/**
 * Bande de certification Qualiopi : logo officiel, mention légale obligatoire
 * (catégorie d'action certifiée) et certificat téléchargeable.
 *
 * La mention « La certification qualité a été délivrée au titre de la catégorie
 * d'action suivante… » est imposée par l'article R.6316-6 du code du travail dès
 * lors que le logo Qualiopi est affiché.
 */
export function QualiopiSection({ background = "cream" }: Props) {
  return (
    <section
      className={
        background === "white"
          ? "py-20 bg-white"
          : "py-20 bg-[color:var(--brand-cream)]"
      }
      aria-labelledby="qualiopi-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="bg-white border border-[color:var(--brand-gray-medium)]/15 rounded-sm p-7 lg:p-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Logo officiel */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <Image
              src="/brand/qualiopi.png"
              alt="Qualiopi — processus certifié — République française"
              width={633}
              height={338}
              sizes="(min-width: 1024px) 260px, 220px"
              className="h-auto w-[220px] lg:w-[260px]"
            />
          </div>

          {/* Texte + certificat */}
          <div className="lg:col-span-8">
            <span className="eyebrow">Notre certification</span>
            <h2
              id="qualiopi-heading"
              className="mt-4 text-[color:var(--brand-charcoal)] text-2xl md:text-3xl"
            >
              Alertis Formation est un organisme de formation{" "}
              <span className="text-[color:var(--brand-red)]">
                certifié Qualiopi
              </span>
              .
            </h2>
            <p className="mt-4 text-[color:var(--brand-gray-medium)] leading-[1.65]">
              La certification qualité a été délivrée au titre de la catégorie
              d&apos;action suivante&nbsp;: <strong>actions de formation</strong>.
              Elle atteste du respect du Référentiel National Qualité (RNQ) et
              rend nos formations finançables par les OPCO et les fonds publics
              ou mutualisés de la formation professionnelle.
            </p>

            <dl className="mt-7 grid gap-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden sm:grid-cols-3">
              {facts.map(({ label, value }) => (
                <div key={label} className="bg-white px-5 py-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-gray-medium)]">
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-[color:var(--brand-charcoal)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={qualiopi.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--brand-red)] text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-[color:var(--brand-red-dark)] transition-colors"
              >
                <Download className="size-4" />
                Télécharger le certificat
              </a>
              <span className="inline-flex items-center gap-1.5 text-xs text-[color:var(--brand-gray-medium)]">
                <ShieldCheck className="size-4 text-[color:var(--brand-red)]" />
                PDF · {qualiopi.certificateFileSize}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
