// Cleans WordPress Gutenberg HTML from scripts/extracted-formations/*.json
// and produces src/lib/formations-content.ts (slug -> structured content).
//
// Run: node scripts/extract-formations-content.mjs

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE_DIR = path.join(__dirname, "extracted-formations");
const OUT_FILE = path.join(__dirname, "..", "src", "lib", "formations-content.ts");

function readJson(file) {
  let raw = fs.readFileSync(file, "utf8");
  if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
  return JSON.parse(raw);
}

// h2 patterns that mark the END of the formation-specific content
// (everything after them is testimonials / FAQ / news / related sections)
const STOP_HEADINGS = [
  /^t[ée]moignages?/i,
  /^actualit[ée]s?/i,
  /^questions?\s+fr[ée]quentes?/i,
  /^dossier\s+formation/i,
  /^pr[ée]sentation\s+compl[èe]te/i,
  /^chargement/i,
  /^nos\s+diff[ée]rents/i,
  /^vous\s+recherchez/i,
  /^cette\s+formation\s+vous/i,
  /^pourquoi\s+nous\s+choisir/i,
  /^pourquoi\s+choisir/i,
  /^contact/i,
  /^demander/i,
  /^voir\s+les?/i,
];

// Map raw h2 text → canonical section label
function normalizeHeading(text) {
  let t = text.trim().replace(/[:：]+$/g, "").trim();
  const lower = t.toLowerCase();

  if (/^pr[ée]sentation\s+(de|d['’]?)/i.test(lower)) return "Présentation";
  if (/^pr[ée]sentation$/i.test(lower)) return "Présentation";
  if (/^description/i.test(lower)) return "Description";
  if (/^objectifs?(\s+p[ée]dagogiques?)?$/i.test(lower)) return "Objectifs";
  if (/^programme/i.test(lower)) return "Programme";
  if (/^contenu/i.test(lower)) return "Programme";
  if (/^d[ée]roul[ée]/i.test(lower)) return "Programme";
  if (/^public(\s+(concern[ée]|vis[ée]))?$/i.test(lower)) return "Public concerné";
  if (/^(à|a)\s+qui/i.test(lower)) return "Public concerné";
  if (/^pr[ée]\s*-?\s*requis/i.test(lower)) return "Pré-requis";
  if (/^m[ée]thodes?(\s+p[ée]dagogiques?)?/i.test(lower)) return "Méthodes pédagogiques";
  if (/^modalit[ée]s?/i.test(lower)) return "Modalités";
  if (/^validation/i.test(lower)) return "Validation";
  if (/^[ée]valuation/i.test(lower)) return "Évaluation";
  if (/^dur[ée]e/i.test(lower)) return "Durée";
  if (/^tarif/i.test(lower)) return "Tarif";
  if (/^certification/i.test(lower)) return "Certification";
  if (/^pourquoi/i.test(lower)) return "Pourquoi cette formation";

  return t;
}

function isStopHeading(text) {
  return STOP_HEADINGS.some((r) => r.test(text.trim()));
}

function decodeEntities(s) {
  return s
    .replace(/ /g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#8230;/g, "…")
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "").trim();
}

/**
 * Parses WP HTML into structured sections.
 * Returns an array of { heading, body } where body is clean HTML.
 */
function parseSections(rawHtml) {
  if (!rawHtml) return [];
  let s = rawHtml;

  // 1. Drop scripts/styles/comments/images/forms/iframes/svg
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style\b[\s\S]*?<\/style>/gi, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  s = s.replace(/<figure[\s\S]*?<\/figure>/gi, "");
  s = s.replace(/<img\b[^>]*>/gi, "");
  s = s.replace(/<form[\s\S]*?<\/form>/gi, "");
  s = s.replace(/<iframe[\s\S]*?<\/iframe>/gi, "");
  s = s.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // 2. Unwrap layout containers
  s = s.replace(/<\/?(?:div|span|section|article|aside|header|footer|main|nav)\b[^>]*>/gi, "");

  // 3. Strip attributes from kept tags
  s = s.replace(
    /<(h[1-6]|p|ul|ol|li|strong|em|b|i|a|blockquote|br|hr)\b[^>]*>/gi,
    (_m, tag) => `<${tag.toLowerCase()}>`,
  );

  // 4. Decode entities
  s = decodeEntities(s);

  // 5. Drop placeholders + downgrade h3 inside the "ABOUT" widget areas, but split on h2
  const PLACEHOLDERS = [
    /<strong>\s*Chargement[^<]*<\/strong>/gi,
    /<p>\s*Chargement[^<]*<\/p>/gi,
    /<p>\s*Effectif\s*:?\s*<\/p>/gi,
    /<p>\s*Tarif[^<]*<\/p>/gi,
    /<p>\s*Public concern[ée]\s*:?\s*<\/p>/gi,
    /<p>\s*Lieu\s*:?\s*<\/p>/gi,
    /<p>\s*Dur[ée]e\s*:?\s*<\/p>/gi,
    /<p>\s*\*Ce tarif[^<]*<\/p>/gi,
    /<p>\s*\*Tarif[^<]*<\/p>/gi,
    /<a>\s*T[ée]l[ée]charger[^<]*<\/a>/gi,
    /<a>\s*DEMANDER UN DEVIS\s*<\/a>/gi,
    /<a>\s*Voir le programme[^<]*<\/a>/gi,
    /Chargement[^<.]{0,40}\.{3,}/g,
    /Chargement\s*…/g,
    /Chargement\s+du\s+\w+\s*…?/gi,
    /Chargement\s+de\s+la\s+\w+\s*…?/gi,
  ];
  for (const re of PLACEHOLDERS) s = s.replace(re, "");

  // 6. Drop empty anchors (lost their href)
  s = s.replace(/<a>([^<]*)<\/a>/gi, "$1");

  // 7. Split into sections by h2
  // Strategy: find h2 boundaries, slice into parts
  const sections = [];
  const h2Regex = /<h2>([\s\S]*?)<\/h2>/gi;
  const matches = [];
  let m;
  while ((m = h2Regex.exec(s)) !== null) {
    matches.push({ index: m.index, length: m[0].length, raw: stripTags(m[1]) });
  }

  if (matches.length === 0) {
    // Single block with no h2 — treat whole thing as one section
    const body = cleanBody(s);
    if (body) sections.push({ heading: "Présentation", body });
    return sections;
  }

  // Pre-h2 content → treat as intro
  if (matches[0].index > 0) {
    const intro = s.slice(0, matches[0].index);
    const body = cleanBody(intro);
    if (body) sections.push({ heading: "Présentation", body });
  }

  for (let i = 0; i < matches.length; i++) {
    const cur = matches[i];
    const headingText = cur.raw;

    if (isStopHeading(headingText)) break; // cut everything from here on

    const next = matches[i + 1];
    const bodyStart = cur.index + cur.length;
    const bodyEnd = next ? next.index : s.length;
    const bodyRaw = s.slice(bodyStart, bodyEnd);
    const body = cleanBody(bodyRaw);

    const heading = normalizeHeading(headingText);
    if (!body && !heading) continue;
    if (heading.length > 80) continue; // ignore oddly long headings (probably leaked into h2)

    sections.push({ heading, body });
  }

  // Deduplicate consecutive sections with same heading (merge bodies)
  const merged = [];
  for (const sec of sections) {
    const last = merged[merged.length - 1];
    if (last && last.heading === sec.heading) {
      last.body = `${last.body}${sec.body}`;
    } else {
      merged.push(sec);
    }
  }

  // Strip out sections whose body is empty after cleanup
  return merged.filter((sec) => sec.body && sec.body.length >= 30);
}

function cleanBody(html) {
  let s = html;
  // Drop residual h2 tags inside body (shouldn't happen but safety)
  s = s.replace(/<\/?h2>/gi, "");
  // Downgrade h1 to h3 (no top-level inside body)
  s = s.replace(/<h1>/gi, "<h3>").replace(/<\/h1>/gi, "</h3>");
  // Remove empty tags repeatedly
  let prev;
  do {
    prev = s;
    s = s.replace(/<(p|strong|em|b|i|h[1-6]|li|ul|ol|blockquote)>\s*<\/\1>/gi, "");
  } while (s !== prev);
  // Drop short useless paragraphs
  s = s.replace(/<p>[\s:.,;…\-–—]*<\/p>/gi, "");
  s = s.replace(/[ \t]+/g, " ");
  s = s.replace(/\n{2,}/g, "\n");
  s = s.replace(/>\s+</g, "><");
  return s.trim();
}

function main() {
  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"));

  const entries = [];
  for (const file of files) {
    const data = readJson(path.join(SOURCE_DIR, file));
    const slug = data.slug;
    if (!slug) continue;
    const sections = parseSections(data.content_html || "");
    entries.push({ slug, sections });
  }

  entries.sort((a, b) => a.slug.localeCompare(b.slug));

  // Stats
  const total = entries.length;
  const sectionCounts = entries.map((e) => e.sections.length);
  const avgSections = (sectionCounts.reduce((a, b) => a + b, 0) / total).toFixed(1);
  const empty = entries.filter((e) => e.sections.length === 0).length;
  const totalChars = entries.reduce(
    (sum, e) => sum + e.sections.reduce((a, b) => a + b.body.length, 0),
    0,
  );
  console.log(
    `Parsed ${total} formations | avg ${avgSections} sections/formation | ${empty} empty | ${Math.round(totalChars / 1024)}kb total`,
  );

  // Sample of headings used
  const headings = new Map();
  for (const e of entries) {
    for (const s of e.sections) {
      headings.set(s.heading, (headings.get(s.heading) || 0) + 1);
    }
  }
  console.log("Heading frequencies:");
  [...headings.entries()]
    .sort((a, b) => b[1] - a[1])
    .forEach(([h, n]) => console.log(`  ${n.toString().padStart(3, " ")} × ${h}`));

  // Output TS
  const ts = [
    "// Auto-generated by scripts/extract-formations-content.mjs",
    "// Do not edit by hand — regenerate from scripts/extracted-formations/*.json",
    "",
    "export type FormationSection = { heading: string; body: string };",
    "",
    "export const formationsContent: Record<string, FormationSection[]> = {",
    ...entries.map(
      (e) =>
        `  ${JSON.stringify(e.slug)}: ${JSON.stringify(e.sections)},`,
    ),
    "};",
    "",
    "export function getFormationContent(slug: string): FormationSection[] | undefined {",
    "  return formationsContent[slug];",
    "}",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_FILE, ts, "utf8");
  console.log(`Wrote ${OUT_FILE}`);
}

main();
