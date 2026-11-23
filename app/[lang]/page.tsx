import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categoryPhoto, heroPhoto } from "@/lib/images";
import BottleArt from "@/components/BottleArt";
import ClientLogos from "@/components/ClientLogos";
import GuideCard from "@/components/GuideCard";
import ProductCard from "@/components/ProductCard";
import Showroom from "@/components/Showroom";
import Shipping from "@/components/Shipping";
import Warehouse from "@/components/Warehouse";
import { getDict } from "@/lib/dictionaries";
import { guidesByDate } from "@/lib/guides";
import { alternates, href, isLang, type Lang } from "@/lib/i18n";
import { getCategories, getProducts, sizePages } from "@/lib/products";
import { site, waLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return { alternates: alternates(lang, "/") };
}

// Hidden until the client has real customer quotes. To bring the section back,
// replace these placeholders with real testimonials and set SHOW_TESTIMONIALS to true.
const SHOW_TESTIMONIALS = false;

const testimonials = [
  { q: "The square 50 ml bottles made our launch look premium at a price we could afford. Samples arrived in three days.", n: "Founder, local niche perfume brand" },
  { q: "Consistent quality across reorders, and the team answers WhatsApp quickly. Our refill shop relies on them.", n: "Owner, perfume refill shop" },
  { q: "They helped us match caps, pumps and boxes in one order, which saved us weeks.", n: "Brand manager, home-fragrance label" },
];

export default async function Home({ params }: Props) {
  const lang = (await params).lang as Lang;
  const t = getDict(lang);
  const h = t.home;
  const categories = getCategories(lang);
  const featured = getProducts(lang).filter((p) => p.featured).slice(0, 8);
  const hero = heroPhoto();
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{h.eyebrow}</p>
            <h1>{h.h1a}<em>{h.h1em}</em></h1>
            <p className="lead">{h.lead(site.name)}</p>
            <div className="cta-row">
              <Link href={href(lang, "/catalog")} className="btn">{h.browse}</Link>
              <a href={waLink(t.wa.quote)} className="btn btn-ghost" target="_blank" rel="noopener">
                {t.common.getQuoteWa}
              </a>
            </div>
            <dl className="stats">
              {h.stats.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
          {hero ? (
            <div className="hero-photo">
              <Image src={hero} alt={h.heroAlt(site.name)} fill priority sizes="(max-width: 860px) 100vw, 520px" />
            </div>
          ) : (
            <div className="hero-art" aria-hidden="true">
              <div className="hero-bottle b1"><BottleArt shape="tall" glass="#dde3e6" cap="#1f1b16" /></div>
              <div className="hero-bottle b2"><BottleArt shape="square" glass="#e9dfd0" cap="#b08a4a" /></div>
              <div className="hero-bottle b3"><BottleArt shape="round" glass="#f2d9d0" cap="#b08a4a" /></div>
            </div>
          )}
        </div>
      </section>

      <ClientLogos lang={lang} />

      <section className="section" aria-labelledby="cat-h">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">{h.catEyebrow}</p>
              <h2 id="cat-h">{h.catH}</h2>
            </div>
            <Link href={href(lang, "/catalog")} className="link-arrow">{h.viewCatalog}</Link>
          </div>
          <div className="cat-grid">
            {categories.map((c) => {
              const photo = categoryPhoto(c.slug);
              return (
              <Link key={c.slug} href={href(lang, `/catalog/${c.slug}`)} className="cat-tile">
                {photo ? (
                  <span className="cat-photo"><Image src={photo} alt={c.title} fill sizes="96px" /></span>
                ) : (
                  <BottleArt shape={c.shape} title={c.name} glass={c.shape === "box" ? "#2d2a26" : "#e9dfd0"} cap="#b08a4a" />
                )}
                <h3>{c.name}</h3>
                <p className="muted small">{c.blurb}</p>
              </Link>
              );
            })}
          </div>
          <nav aria-label={h.sizesAria} className="chips chips-sizes">
            <span className="chips-label">{h.sizesAria}:</span>
            {sizePages.map((s) => (
              <Link key={s.slug} href={href(lang, `/catalog/${s.slug}`)} className="chip">{h.sizeLink(s.n)}</Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section-tint" aria-labelledby="why-h">
        <div className="container">
          <p className="eyebrow">{h.whyEyebrow(site.shortName)}</p>
          <h2 id="why-h">{h.whyH}</h2>
          <ul className="usp-grid">
            {h.usps.map((u, i) => (
              <li key={u.t}>
                <span className="usp-num">0{i + 1}</span>
                <h3>{u.t}</h3>
                <p className="muted">{u.d}</p>
              </li>
            ))}
          </ul>
          <Warehouse variant="strip" lang={lang} />
        </div>
      </section>

      <section className="section" aria-labelledby="feat-h">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">{h.featEyebrow}</p>
              <h2 id="feat-h">{h.featH}</h2>
            </div>
            <Link href={href(lang, "/catalog")} className="link-arrow">{h.allProducts}</Link>
          </div>
          <div className="product-grid">
            {featured.map((p) => <ProductCard key={p.slug} p={p} lang={lang} />)}
          </div>
        </div>
      </section>

      <Showroom variant="home" lang={lang} />

      <section className="section section-dark" aria-labelledby="how-h">
        <div className="container">
          <p className="eyebrow">{h.howEyebrow}</p>
          <h2 id="how-h">{h.howH}</h2>
          <ol className="steps">
            {h.steps.map((s, i) => (
              <li key={s.t}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Shipping lang={lang} />

      <section className="section section-tint" aria-labelledby="guides-h">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">{t.guides.homeEyebrow}</p>
              <h2 id="guides-h">{t.guides.homeH}</h2>
            </div>
            <Link href={href(lang, "/panduan")} className="link-arrow">{t.guides.allGuides}</Link>
          </div>
          <div className="guide-grid">
            {guidesByDate().slice(0, 3).map((g) => <GuideCard key={g.slug} g={g} lang={lang} headingLevel={3} />)}
          </div>
        </div>
      </section>

      {SHOW_TESTIMONIALS && (
      <section className="section" aria-labelledby="test-h">
        <div className="container">
          <p className="eyebrow">{h.testEyebrow}</p>
          <h2 id="test-h">{h.testH}</h2>
          <div className="quote-grid">
            {testimonials.map((t) => (
              <figure key={t.n} className="quote">
                <blockquote>“{t.q}”</blockquote>
                <figcaption className="muted small">— {t.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      )}

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <h2>{h.ctaH}</h2>
            <p>{h.ctaP}</p>
          </div>
          <div className="cta-row">
            <a href={waLink(t.wa.default)} className="btn btn-light" target="_blank" rel="noopener">{h.ctaWa}</a>
            <Link href={href(lang, "/contact")} className="btn btn-outline-light">{h.ctaForm}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
