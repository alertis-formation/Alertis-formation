"use client";

import { useEffect, useState } from "react";
import { devisFormUrl } from "@/lib/site-config";

type DevisFormProps = {
  /** URL params forwarded to the embed (formation slug, source, etc.) */
  params?: Record<string, string>;
  /** Initial height in px while the iframe loads. Default 2000. */
  initialHeight?: number;
  className?: string;
};

export function DevisForm({
  params,
  initialHeight = 2000,
  className,
}: DevisFormProps) {
  const [loaded, setLoaded] = useState(false);

  // Fallback: hide skeleton after 8s even if onLoad never fires
  // (Render free-tier instances can be slow to wake up the first time).
  useEffect(() => {
    if (loaded) return;
    const t = setTimeout(() => setLoaded(true), 8000);
    return () => clearTimeout(t);
  }, [loaded]);

  const url = new URL(devisFormUrl);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url.searchParams.set(k, v);
    }
  }

  return (
    <div
      className={className}
      style={{ position: "relative", minHeight: initialHeight }}
    >
      {/* Skeleton overlay */}
      <div
        aria-hidden
        className={`absolute inset-0 rounded-md bg-[color:var(--brand-cream)] flex items-center justify-center text-sm text-[color:var(--brand-gray-medium)] transition-opacity duration-300 pointer-events-none ${
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      >
        Chargement du formulaire…
      </div>

      {/* Iframe — always in DOM so the load can actually happen */}
      <iframe
        src={url.toString()}
        title="Formulaire de demande de devis Alertis"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: initialHeight,
          border: 0,
          borderRadius: 12,
          display: "block",
        }}
      />
    </div>
  );
}
