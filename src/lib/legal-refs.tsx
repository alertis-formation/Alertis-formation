// Auto-linkifies legal references (Code du travail articles, arrêtés, décrets)
// found in text content. Each match becomes an <a> linking to Legifrance.

import { Fragment, type ReactNode } from "react";

const LEGIFRANCE_SEARCH =
  "https://www.legifrance.gouv.fr/search/all?searchField=ALL&query=";

const CODE_HINTS: Record<string, string> = {
  R: "code du travail",
  L: "code du travail",
  D: "code du travail",
  A: "code du travail",
};

// Direct URLs for specific norms / regulations not hosted on Legifrance
const FIXED_URLS: Record<string, string> = {
  "NF C18-510": "https://www.upf.pf/sites/default/files/inrs_electricitenorme_2.pdf",
  "DT-DICT": "https://entreprendre.service-public.gouv.fr/vosdroits/F23491",
};

const PATTERNS: Array<{
  regex: RegExp;
  toHref: (match: string) => string;
}> = [
  // Article du code (R4224-15, R.4227, L.1153, etc.) — period and sub-number both optional
  {
    regex: /\b([RLDA])\.?(\d{4,6})(?:-(\d{1,3}))?\b/g,
    toHref: (match) => {
      const prefix = match.charAt(0) as keyof typeof CODE_HINTS;
      const hint = CODE_HINTS[prefix] ?? "";
      return (
        LEGIFRANCE_SEARCH +
        encodeURIComponent(`article ${match} ${hint}`.trim())
      );
    },
  },
  // Arrêté du JJ mois AAAA
  {
    regex: /\barr[êe]t[ée] du \d+(?:er|ᵉʳ)?\s+\p{L}+\s+\d{4}\b/giu,
    toHref: (m) => LEGIFRANCE_SEARCH + encodeURIComponent(m),
  },
  // Décret n°AAAA-NNNN (avec ou sans n°)
  {
    regex: /\bd[ée]cret(?:\s+n[°o])?\s*\d{4}-\d{1,4}\b/gi,
    toHref: (m) => LEGIFRANCE_SEARCH + encodeURIComponent(m),
  },
  // Norme NF C18-510 → INRS PDF
  {
    regex: /\bNF\s+C18-510\b/g,
    toHref: () => FIXED_URLS["NF C18-510"],
  },
  // DT-DICT → service-public.fr
  {
    regex: /\bDT[-\s]DICT\b/g,
    toHref: () => FIXED_URLS["DT-DICT"],
  },
];

type Match = { start: number; end: number; href: string; text: string };

function findMatches(text: string): Match[] {
  const matches: Match[] = [];
  for (const { regex, toHref } of PATTERNS) {
    regex.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const start = m.index;
      const end = start + m[0].length;
      // Skip overlapping matches
      const overlaps = matches.some(
        (x) =>
          (start >= x.start && start < x.end) ||
          (end > x.start && end <= x.end),
      );
      if (overlaps) continue;
      matches.push({ start, end, href: toHref(m[0]), text: m[0] });
    }
  }
  return matches.sort((a, b) => a.start - b.start);
}

/**
 * Returns the text as a React node, with legal references replaced by anchor links
 * to Legifrance. If no matches, returns the original string.
 */
export function linkifyLegalRefs(text: string): ReactNode {
  const matches = findMatches(text);
  if (matches.length === 0) return text;

  const parts: ReactNode[] = [];
  let cursor = 0;
  for (let i = 0; i < matches.length; i++) {
    const { start, end, href, text: matchText } = matches[i];
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(
      <a
        key={`legal-${i}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        title="Consulter sur Legifrance"
        className="text-[color:var(--brand-red)] font-medium border-b border-[color:var(--brand-red)]/30 hover:border-[color:var(--brand-red)] transition-colors"
      >
        {matchText}
      </a>,
    );
    cursor = end;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));

  return parts.map((p, i) => <Fragment key={i}>{p}</Fragment>);
}
