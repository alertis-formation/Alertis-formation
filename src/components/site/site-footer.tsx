import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { AlertisLogo } from "./alertis-logo";
import { footerNav, siteConfig } from "@/lib/site-config";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./social-icons";
import { CookiePreferencesLink } from "./cookie-preferences-link";

const socials = [
  { label: "Instagram", icon: InstagramIcon, url: siteConfig.social.instagram },
  { label: "TikTok", icon: TikTokIcon, url: siteConfig.social.tiktok },
  { label: "YouTube", icon: YouTubeIcon, url: siteConfig.social.youtube },
];

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--brand-charcoal)] text-white mt-24">
      {/* Main grid — single compact block */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-10 grid gap-10 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4 space-y-5">
          <AlertisLogo theme="light" size="lg" />
          <p className="text-sm text-white/65 leading-relaxed max-w-sm">
            {siteConfig.description}
          </p>
        </div>

        {/* Nav: Découvrir + Formations */}
        <nav
          className="lg:col-span-5 grid gap-10 sm:grid-cols-2"
          aria-label="Pied de page"
        >
          {footerNav.map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-mint)] mb-4">
                {section.title}
              </h3>
              <ul
                className={`space-y-2.5 ${
                  section.items.length > 5
                    ? "sm:columns-2 sm:gap-x-6"
                    : ""
                }`}
              >
                {section.items.map((item) => (
                  <li key={item.href} className="break-inside-avoid">
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Nous joindre (Contact info + CTA) */}
        <div className="lg:col-span-3 space-y-4">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-mint)]">
            Nous joindre
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${siteConfig.contact.phoneE164}`}
                className="group inline-flex items-center gap-2 text-white hover:text-[color:var(--brand-mint)] transition-colors"
              >
                <Phone className="size-3.5 text-[color:var(--brand-red)]" />
                <span className="font-semibold">
                  {siteConfig.contact.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="group inline-flex items-center gap-2 text-white/80 hover:text-[color:var(--brand-mint)] transition-colors"
              >
                <Mail className="size-3.5 text-[color:var(--brand-red)]" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/70">
              <MapPin className="size-3.5 text-[color:var(--brand-red)] mt-0.5 shrink-0" />
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-[color:var(--brand-mint)] transition-colors leading-snug not-italic"
              >
                <address className="not-italic">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </address>
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/70">
              <Clock className="size-3.5 text-[color:var(--brand-red)] mt-0.5 shrink-0" />
              <div className="space-y-0.5">
                {siteConfig.contact.hours.map((h) => (
                  <div key={h.days}>
                    <span className="text-white/85">{h.days}</span>
                    <span className="mx-1 text-white/40">·</span>
                    {h.value}
                  </div>
                ))}
              </div>
            </li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-[color:var(--brand-red)] hover:bg-[color:var(--brand-red-dark)] px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-white rounded-sm transition-colors"
          >
            Demander un devis
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Bottom bar — social + legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 order-2 md:order-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                aria-label={s.label}
                target="_blank"
                rel="noopener"
                className="inline-flex size-8 items-center justify-center rounded-sm bg-white/5 hover:bg-[color:var(--brand-red)] transition-colors"
              >
                <s.icon className="size-3.5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/45 order-1 md:order-2 text-center md:text-right">
            © {new Date().getFullYear()} {siteConfig.fullName}
            <span className="mx-1.5 text-white/20">·</span>
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <span className="mx-1.5 text-white/20">·</span>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-white"
            >
              Confidentialité
            </Link>
            <CookiePreferencesLink className="hover:text-white cursor-pointer" />
          </p>
        </div>
      </div>
    </footer>
  );
}
