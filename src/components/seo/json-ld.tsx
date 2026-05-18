import { siteConfig } from "@/lib/site-config";
import { getGoogleRating } from "@/lib/google-rating";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Organization + EducationalOrganization combined.
 * Place on the homepage layout.
 */
export async function OrganizationJsonLd() {
  const rating = await getGoogleRating();
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-alertis.png`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.latitude,
      longitude: siteConfig.contact.address.longitude,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.youtube,
      siteConfig.social.twitter,
    ],
    identifier: {
      "@type": "PropertyValue",
      propertyID: "SIRET",
      value: siteConfig.legal.siret,
    },
    vatID: siteConfig.legal.vat,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Sécurité incendie",
      "Sauveteur Secouriste du Travail",
      "SST",
      "AFGSU",
      "Habilitation électrique",
      "Ergonomie",
      "PRAP",
      "Prévention des risques professionnels",
      "Document unique d'évaluation des risques",
      "Code du travail",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
  return <JsonLd data={data} />;
}

/**
 * WebSite schema with potential search action (sitelinks searchbox eligibility).
 */
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.fullName,
    description: siteConfig.description,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteConfig.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/formations?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLd data={data} />;
}

/**
 * ItemList JSON-LD — for category pages listing formations or articles.
 */
export function ItemListJsonLd({
  items,
  name,
}: {
  name: string;
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.url}${item.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

/**
 * LocalBusiness with opening hours and contact info.
 */
export async function LocalBusinessJsonLd() {
  const rating = await getGoogleRating();
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.fullName,
    image: `${siteConfig.url}/brand/logo-alertis.png`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: "Auvergne-Rhône-Alpes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.latitude,
      longitude: siteConfig.contact.address.longitude,
    },
    hasMap: siteConfig.contact.address.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    areaServed: { "@type": "Country", name: "France" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.youtube,
      siteConfig.social.twitter,
    ],
  };
  return <JsonLd data={data} />;
}

/**
 * BreadcrumbList for any inner page.
 */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href.startsWith("http")
        ? item.href
        : `${siteConfig.url}${item.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

/**
 * FAQPage schema for the FAQ page (eligible for rich snippets in Google).
 */
export function FaqPageJsonLd({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}

/**
 * Course schema for a training program page.
 * Supports `offers` (price in EUR) and `hasCourseInstance` (upcoming sessions)
 * to be eligible for Google's rich results on training.
 */
export function CourseJsonLd({
  name,
  description,
  url,
  category,
  audienceType,
  priceEUR,
  duration,
  workload,
  image,
  sessions,
}: {
  name: string;
  description: string;
  url: string;
  category?: string;
  /** EducationalAudience.audienceType (e.g. "Professionnels de santé", "Salariés"). */
  audienceType?: string;
  /** Price in euros — set if API returns a tarif. */
  priceEUR?: number;
  /** ISO 8601 duration (PT3H30M, PT2D…) — optional, free text if not parsable. */
  duration?: string;
  /** ISO 8601 duration for courseWorkload, falls back to `duration`. */
  workload?: string;
  /** Image URL (absolute or root-relative). */
  image?: string;
  /** Upcoming inter-entreprise sessions for hasCourseInstance. */
  sessions?: {
    location: string;
    startDate: string;
    endDate: string;
    priceEUR: number;
  }[];
}) {
  const fullUrl = url.startsWith("http") ? url : `${siteConfig.url}${url}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: fullUrl,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}#organization`,
      name: siteConfig.fullName,
      url: siteConfig.url,
      sameAs: siteConfig.url,
    },
    inLanguage: "fr-FR",
    availableLanguage: "fr-FR",
    educationalLevel: "Formation professionnelle continue",
    teaches: name,
  };

  if (category) data.educationalCredentialAwarded = category;
  if (audienceType) {
    data.audience = {
      "@type": "EducationalAudience",
      audienceType,
    };
  }
  if (image) {
    data.image = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  }
  if (typeof priceEUR === "number" && priceEUR > 0) {
    data.offers = {
      "@type": "Offer",
      price: priceEUR,
      priceCurrency: "EUR",
      url: fullUrl,
      availability: "https://schema.org/InStock",
      validFrom: new Date().toISOString().slice(0, 10),
    };
  }
  const effectiveWorkload = workload ?? duration;
  if (sessions && sessions.length > 0) {
    data.hasCourseInstance = sessions.map((s) => ({
      "@type": "CourseInstance",
      courseMode: "in person",
      ...(effectiveWorkload ? { courseWorkload: effectiveWorkload } : {}),
      location: {
        "@type": "Place",
        name: s.location,
      },
      startDate: s.startDate,
      endDate: s.endDate,
      offers: {
        "@type": "Offer",
        price: s.priceEUR,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
    }));
  } else {
    data.hasCourseInstance = {
      "@type": "CourseInstance",
      courseMode: "in person",
      ...(effectiveWorkload ? { courseWorkload: effectiveWorkload } : {}),
      location: {
        "@type": "Place",
        name: "Intra-entreprise — partout en France",
      },
    };
  }
  if (duration) data.timeRequired = duration;
  return <JsonLd data={data} />;
}

/**
 * Article schema for blog posts.
 */
export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  author = "Alertis Formation",
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? `${siteConfig.url}${image}` : undefined,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@type": "Organization", name: author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/logo-alertis.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteConfig.url}${url}` },
  };
  return <JsonLd data={data} />;
}
