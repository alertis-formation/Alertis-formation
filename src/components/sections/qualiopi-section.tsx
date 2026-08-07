import Image from "next/image";
import { FileText } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const { qualiopi } = siteConfig;

/** "2029-08-06" → "06/08/2029" */
function formatFr(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

const certificateMeta = [
  `PDF · ${qualiopi.certificateFileSize}`,
  `N° ${qualiopi.certificateNumber}`,
  `Valable jusqu'au ${formatFr(qualiopi.validUntil)}`,
].join(" · ");

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
          ? "py-10 bg-white"
          : "py-10 bg-[color:var(--brand-cream)]"
      }
      aria-labelledby="qualiopi-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="bg-white border border-[color:var(--brand-gray-medium)]/15 rounded-sm">
          <div className="flex items-center gap-8 px-8 py-6 max-md:flex-col max-md:gap-6 max-md:text-center">
            {/* Logo officiel */}
            <Image
              src="/brand/qualiopi.png"
              alt="Qualiopi — processus certifié — République française"
              width={633}
              height={338}
              sizes="195px"
              className="h-[104px] w-auto shrink-0"
            />

            {/* Mention légale */}
            <div className="min-w-0 flex-1">
              <h2
                id="qualiopi-heading"
                className="!text-[19px] !font-extrabold !leading-tight tracking-[-0.01em] text-[color:var(--brand-charcoal)]"
              >
                Organisme de formation certifié Qualiopi
              </h2>
              <p className="mt-1.5 text-sm text-[color:var(--brand-gray-medium)] leading-[1.5]">
                La certification qualité a été délivrée au titre de la catégorie
                d&apos;action suivante&nbsp;: ACTIONS DE FORMATION. Certification
                délivrée par {qualiopi.certifier}.
              </p>

              {/* Certificat téléchargeable */}
              <a
                href={qualiopi.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/doc mt-3.5 inline-flex items-center gap-3 rounded-sm border border-[color:var(--brand-gray-medium)]/20 bg-white py-2 pl-2 pr-4 text-left hover:border-[color:var(--brand-red)]/45 hover:shadow-sm transition-colors"
              >
                <span className="inline-grid size-9 shrink-0 place-items-center rounded-sm bg-[color:var(--brand-red-soft)] text-[color:var(--brand-red)] group-hover/doc:bg-[color:var(--brand-red)] group-hover/doc:text-white transition-colors">
                  <FileText className="size-4" />
                </span>
                <span>
                  <b className="block text-[13.5px] font-bold leading-tight text-[color:var(--brand-charcoal)] group-hover/doc:text-[color:var(--brand-red)] transition-colors">
                    Certificat Qualiopi
                  </b>
                  <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.09em] text-[color:var(--brand-gray-medium)]">
                    {certificateMeta}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
