"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/**
 * Minimal CNIL-compliant cookie consent.
 *
 * Only one optional category for now: `maps` (Google Maps embed).
 * Strictly-necessary cookies (form session/CSRF of the back-office iframe)
 * are exempt from consent under article 5(3) of the ePrivacy directive.
 */

type Consent = {
  maps: boolean;
};

const DEFAULT_CONSENT: Consent = { maps: false };
const STORAGE_KEY = "alertis-consent-v1";

type ContextValue = {
  /** Current consent values. */
  consent: Consent;
  /** Whether the user has made a choice (banner should be hidden if true). */
  decided: boolean;
  /** Accept all categories. */
  acceptAll: () => void;
  /** Refuse all optional categories. */
  refuseAll: () => void;
  /** Re-open the banner (used by the "manage preferences" link). */
  reopen: () => void;
  /** Close the banner without changing the consent. */
  dismiss: () => void;
  /** Whether the banner should currently render. */
  bannerOpen: boolean;
};

const CookieConsentContext = createContext<ContextValue | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<Consent>(DEFAULT_CONSENT);
  const [decided, setDecided] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  // Read stored consent on mount.
  // We DO NOT auto-open the banner: consent is collected contextually
  // (on the Google Maps button on /contact). The banner only opens when
  // the user clicks "Préférences cookies" in the footer to change their mind.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Consent;
        setConsent({ ...DEFAULT_CONSENT, ...parsed });
        setDecided(true);
      }
    } catch {
      /* no-op */
    }
  }, []);

  const persist = useCallback((next: Consent) => {
    setConsent(next);
    setDecided(true);
    setBannerOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* localStorage disabled — silent fallback */
    }
  }, []);

  const acceptAll = useCallback(() => persist({ maps: true }), [persist]);
  const refuseAll = useCallback(() => persist({ maps: false }), [persist]);
  const reopen = useCallback(() => setBannerOpen(true), []);
  const dismiss = useCallback(() => setBannerOpen(false), []);

  return (
    <CookieConsentContext.Provider
      value={{ consent, decided, acceptAll, refuseAll, reopen, dismiss, bannerOpen }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  }
  return ctx;
}
