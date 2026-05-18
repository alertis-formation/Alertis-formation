"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useCookieConsent } from "@/lib/cookie-consent";

export function CookieBanner() {
  const { bannerOpen, acceptAll, refuseAll, dismiss } = useCookieConsent();

  if (!bannerOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Préférences cookies"
      aria-modal="false"
      className="fixed bottom-3 left-3 right-3 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-white rounded-sm shadow-2xl ring-1 ring-black/10 p-5 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Fermer"
        className="absolute top-2 right-2 inline-flex size-7 items-center justify-center rounded-sm text-[color:var(--brand-gray-medium)] hover:text-[color:var(--brand-charcoal)] hover:bg-[color:var(--brand-cream)] transition-colors"
      >
        <X className="size-4" />
      </button>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-red)] mb-2">
          Préférences cookies
        </div>
        <p className="text-sm text-[color:var(--brand-gray)] leading-relaxed">
          Ce site n&apos;utilise <strong>aucun cookie de mesure d&apos;audience
          ni de publicité</strong>. Seul l&apos;affichage de la carte Google
          Maps sur la page contact dépose des cookies tiers (Google).
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={refuseAll}
          className="flex-1 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-charcoal)] border border-[color:var(--brand-gray-medium)]/40 hover:border-[color:var(--brand-charcoal)] rounded-sm transition-colors"
        >
          Refuser
        </button>
        <button
          type="button"
          onClick={acceptAll}
          className="flex-1 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white bg-[color:var(--brand-red)] hover:bg-[color:var(--brand-red-dark)] rounded-sm transition-colors"
        >
          Tout accepter
        </button>
      </div>

      <p className="text-[10px] text-[color:var(--brand-gray-medium)]">
        Détails dans notre{" "}
        <Link
          href="/politique-de-confidentialite"
          className="underline hover:text-[color:var(--brand-red)]"
        >
          politique de confidentialité
        </Link>
        .
      </p>
    </div>
  );
}
