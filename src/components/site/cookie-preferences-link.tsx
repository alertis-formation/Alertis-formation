"use client";

import { useCookieConsent } from "@/lib/cookie-consent";

export function CookiePreferencesLink({
  className = "",
}: {
  className?: string;
}) {
  const { reopen } = useCookieConsent();

  return (
    <>
      <span className="mx-1.5 text-white/20">·</span>
      <button type="button" onClick={reopen} className={className}>
        Préférences cookies
      </button>
    </>
  );
}
