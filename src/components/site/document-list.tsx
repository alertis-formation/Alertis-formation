import Link from "next/link";
import { Download, Lock, FileText, ArrowUpRight } from "lucide-react";

export type DocumentItem = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  fileSize?: string;
  fileType?: "PDF" | "ZIP" | "Vidéo" | "Audio" | "Document";
  external?: boolean;
  restricted?: boolean;
};

type Props = {
  items: DocumentItem[];
  /** Optional eyebrow above the group */
  eyebrow?: string;
  /** Optional title above the group */
  title?: string;
  /** Optional intro paragraph */
  description?: string;
};

export function DocumentList({ items, eyebrow, title, description }: Props) {
  return (
    <div className="space-y-6">
      {(eyebrow || title || description) && (
        <header className="space-y-3">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && (
            <h3 className="text-[color:var(--brand-charcoal)] !text-xl md:!text-2xl">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-[color:var(--brand-gray-medium)] leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </header>
      )}
      <ul className="space-y-px bg-[color:var(--brand-gray-medium)]/15 border border-[color:var(--brand-gray-medium)]/15 rounded-sm overflow-hidden">
        {items.map((item, i) => (
          <DocumentRow key={`${item.title}-${i}`} item={item} />
        ))}
      </ul>
    </div>
  );
}

function DocumentRow({ item }: { item: DocumentItem }) {
  const Icon = item.icon ?? FileText;
  const isPublic = !item.restricted && item.href;
  const fileType = item.fileType ?? "PDF";

  if (isPublic) {
    return (
      <li className="group/row bg-white hover:bg-[color:var(--brand-cream)] transition-colors">
        <a
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          download={!item.external}
          className="flex items-start gap-4 p-5 md:p-6"
        >
          <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--brand-cream)] text-[color:var(--brand-red)] group-hover/row:bg-[color:var(--brand-red)] group-hover/row:text-white transition-colors">
            <Icon className="size-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4 className="text-[color:var(--brand-charcoal)] !text-base md:!text-lg !font-semibold leading-tight">
                {item.title}
              </h4>
              <span className="inline-flex items-center text-[10px] uppercase tracking-[0.18em] font-mono text-[color:var(--brand-red)] bg-[color:var(--brand-red-soft)] px-1.5 py-0.5 rounded-sm">
                {fileType}
                {item.fileSize ? ` · ${item.fileSize}` : ""}
              </span>
            </div>
            <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
              {item.description}
            </p>
          </div>
          <div className="shrink-0 hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-red)] group-hover/row:text-[color:var(--brand-red-dark)] mt-2.5">
            {item.external ? (
              <>
                <span>Ouvrir</span>
                <ArrowUpRight className="size-4" />
              </>
            ) : (
              <>
                <span>Télécharger</span>
                <Download className="size-4" />
              </>
            )}
          </div>
        </a>
      </li>
    );
  }

  return (
    <li className="group/row bg-white hover:bg-[color:var(--brand-cream)] transition-colors">
      <Link
        href="/contact"
        className="flex items-start gap-4 p-5 md:p-6"
        aria-label={`Demander l'accès — ${item.title}`}
      >
        <div className="shrink-0 inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--brand-gray-medium)]/10 text-[color:var(--brand-gray-medium)] group-hover/row:bg-[color:var(--brand-charcoal)] group-hover/row:text-[color:var(--brand-mint)] transition-colors">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="text-[color:var(--brand-charcoal)] !text-base md:!text-lg !font-semibold leading-tight">
              {item.title}
            </h4>
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] font-mono text-[color:var(--brand-gray-medium)] bg-[color:var(--brand-gray-medium)]/10 px-1.5 py-0.5 rounded-sm">
              <Lock className="size-3" />
              Accès formateur
            </span>
          </div>
          <p className="text-sm text-[color:var(--brand-gray-medium)] leading-[1.55]">
            {item.description}
          </p>
        </div>
        <div className="shrink-0 hidden sm:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-gray-medium)] group-hover/row:text-[color:var(--brand-red)] mt-2.5">
          <span>Sur demande</span>
          <ArrowUpRight className="size-4" />
        </div>
      </Link>
    </li>
  );
}
