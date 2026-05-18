"use client";

import { MapPin, ExternalLink } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";
import { siteConfig } from "@/lib/site-config";

const EMBED_URL =
  "https://maps.google.com/maps?q=Centre+de+formation+ALERTIS+CHASSIEU&hl=fr&z=17&ie=UTF8&output=embed";

/**
 * Google Maps embed that respects the user's cookie consent.
 * - If accepted: shows the iframe (sets Google cookies).
 * - If not: shows a static placeholder with a button to consent + a link to
 *   open Maps directly in a new tab.
 */
export function MapEmbed() {
  const { consent, acceptAll } = useCookieConsent();

  return (
    <div className="relative aspect-[4/3] rounded-sm overflow-hidden ring-1 ring-[color:var(--brand-gray-medium)]/15 bg-[color:var(--brand-cream)]">
      {consent.maps ? (
        <>
          <iframe
            src={EMBED_URL}
            title="Carte — Centre de formation Alertis, Chassieu"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />
          {/* Floating link to open full Google Maps in a new tab */}
          <a
            href={siteConfig.contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-widest text-[color:var(--brand-charcoal)] shadow-sm hover:bg-[color:var(--brand-red)] hover:text-white transition-colors"
          >
            <ExternalLink className="size-3" />
            Ouvrir dans Maps
          </a>
        </>
      ) : (
        <PlaceholderMap onAccept={acceptAll} />
      )}
    </div>
  );
}

function PlaceholderMap({ onAccept }: { onAccept: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center gap-4">
      {/* Decorative grid pattern to suggest a map */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, color-mix(in oklab, var(--brand-gray-medium) 15%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--brand-gray-medium) 15%, transparent) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand-red)] text-white">
        <MapPin className="size-5" />
      </div>

      <div className="relative z-10 max-w-xs">
        <p className="text-sm font-semibold text-[color:var(--brand-charcoal)]">
          {siteConfig.contact.address.street}
          <br />
          {siteConfig.contact.address.postalCode}{" "}
          {siteConfig.contact.address.city}
        </p>
        <p className="mt-3 text-[11px] text-[color:var(--brand-gray-medium)] leading-snug">
          L&apos;affichage de la carte dépose des cookies tiers Google.
        </p>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-2 w-full max-w-xs">
        <button
          type="button"
          onClick={onAccept}
          className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[color:var(--brand-red)] hover:bg-[color:var(--brand-red-dark)] rounded-sm transition-colors"
        >
          Afficher la carte
        </button>
        <a
          href={siteConfig.contact.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-red)] border border-[color:var(--brand-red)]/30 rounded-sm hover:bg-[color:var(--brand-red)]/5 transition-colors inline-flex items-center justify-center gap-1.5"
        >
          <ExternalLink className="size-3" />
          Ouvrir dans Maps
        </a>
      </div>
    </div>
  );
}
