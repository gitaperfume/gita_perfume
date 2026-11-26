import { getDict } from "./dictionaries";
import { href, type Lang } from "./i18n";

// Central business info. Everything marked PLACEHOLDER must be confirmed by the client.
const shopeeUrl = "https://shopee.co.id/gifanbotolgrosir";

export const site = {
  name: "Gita Perfume Bottle",
  shortName: "Gita",
  tagline: "Perfume bottles & packaging, made to order",
  description:
    "Gita Perfume Bottle supplies glass perfume bottles, spray atomizers, roll-on bottles, caps and custom packaging for perfume brands, refill shops and resellers. No minimum order on ready stock, custom logo printing, nationwide shipping.",
  // Real domain goes in NEXT_PUBLIC_SITE_URL at launch. Until then, use the Vercel URL
  // so canonical links, sitemap and social previews point at a page that exists.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://gitaperfume.vercel.app"),
  // Search engines may index the PRODUCTION deployment only. Vercel preview builds (one per PR)
  // and local dev stay noindex so duplicates never reach Google.
  // Set NEXT_PUBLIC_ALLOW_INDEXING=0 in Vercel to hide production too.
  allowIndexing: process.env.VERCEL_ENV === "production" && process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "0",
  phone: "+62 813-6666-5402",
  whatsapp: "6281366665402", // digits only, for wa.me links
  email: "gitaperfume@gmail.com",
  address: {
    street: "Jl. KH. Hasyim Ashari No. 137",
    city: "Jakarta Pusat",
    region: "DKI Jakarta",
    postalCode: "10140",
    country: "ID",
  },
  hours: "Mon–Sat, 08:00–17:00 WIB", // PLACEHOLDER
  founded: "2015", // PLACEHOLDER
  shopee: {
    url: shopeeUrl,
    handle: "gifanbotolgrosir",
  },
  // Official profiles, used for JSON-LD sameAs. Add Instagram / TikTok here once the client shares them.
  socials: {
    shopee: shopeeUrl,
  } as Record<string, string>,
};

/** Main navigation for one language: localized href + label. */
export function navFor(lang: Lang) {
  const c = getDict(lang).common;
  return [
    { href: href(lang, "/"), label: c.home },
    { href: href(lang, "/catalog"), label: c.catalog },
    { href: href(lang, "/panduan"), label: c.guides },
    { href: href(lang, "/about"), label: c.about },
    { href: href(lang, "/contact"), label: c.contact },
  ];
}

/** Google Maps search link for the showroom address (no API key needed). */
export const mapsQuery = `${site.address.street}, ${site.address.city} ${site.address.postalCode}, Indonesia`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;

/** WhatsApp chat link with a pre-filled message (defaults to a general enquiry in Indonesian). */
export function waLink(text?: string) {
  const msg = text ?? getDict("id").wa.default;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/** Stable id of the business in structured data, so every page's JSON-LD points at one entity. */
export const businessId = `${site.url}/#business`;

/**
 * The shop as a schema.org Store (a LocalBusiness), for Google's local results:
 * name, Jakarta Pusat address, phone, map link and opening hours.
 */
export function businessLd(lang: Lang, description: string, media: { image?: string; logo?: string } = {}) {
  const abs = (p?: string) => (p ? `${site.url}${p}` : undefined);
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": businessId,
    name: site.name,
    url: `${site.url}/${lang}`,
    description,
    ...(media.image ? { image: abs(media.image) } : {}),
    ...(media.logo ? { logo: abs(media.logo) } : {}),
    email: site.email,
    telephone: site.phone,
    foundingDate: site.founded,
    openingHours: "Mo-Sa 08:00-17:00", // PLACEHOLDER, same as site.hours
    hasMap: mapsLink,
    areaServed: { "@type": "Country", name: "Indonesia" },
    knowsAbout: ["botol parfum", "botol spray parfum", "botol parfum kaca", "tutup botol parfum", "perfume bottles"],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: Object.values(site.socials),
  };
}
