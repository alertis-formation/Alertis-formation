import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { GoogleRatingBadge } from "@/components/site/google-rating-badge";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import { CookieBanner } from "@/components/site/cookie-banner";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Formation sécurité au travail — SST, incendie, électrique",
    template: "%s · Alertis Formation",
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "Education",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: siteConfig.fullName,
    url: siteConfig.url,
    title: "Formation sécurité au travail — SST, incendie, électrique",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation sécurité au travail — SST, incendie, électrique",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#bf000d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <CookieConsentProvider>
          <SiteHeader ratingSlot={<GoogleRatingBadge variant="compact" />} />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
