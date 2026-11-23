import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideCard from "@/components/GuideCard";
import JsonLd from "@/components/JsonLd";
import RichText from "@/components/RichText";
import { getDict } from "@/lib/dictionaries";
import { anchor, formatDate, getGuide, guides, plain, readingMinutes } from "@/lib/guides";
import { alternates, href, isLang, locales, type Lang } from "@/lib/i18n";
import { logoFile } from "@/lib/images";
import { getCategory, getSizePage } from "@/lib/products";
import { businessId, site, waLink } from "@/lib/site";

type Params = { params: Promise<{ lang: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => guides.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const g = getGuide(slug);
  if (!g) return {};
  const t = g[lang];
  return {
    title: t.seoTitle,
    description: t.description,
    alternates: alternates(lang, `/panduan/${g.slug}`),
    openGraph: {
      type: "article",
      url: href(lang, `/panduan/${g.slug}`),
      title: t.seoTitle,
      description: t.description,
      images: [{ url: g.cover, alt: t.coverAlt }],
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  };
}

/** Label for a catalog link: category name, or "30 ml perfume bottles" for size pages. */
function catalogLabel(path: string, lang: Lang) {
  const slug = path.replace(/^\/catalog\/?/, "");
  const size = getSizePage(slug);
  if (size) return getDict(lang).home.sizeLink(size.n);
  return getCategory(slug, lang)?.name ?? getDict(lang).common.catalog;
}

export default async function GuidePage({ params }: Params) {
  const { lang, slug } = (await params) as { lang: Lang; slug: string };
  const g = getGuide(slug);
  if (!g) notFound();
  const d = getDict(lang);
  const ui = d.guides;
  const t = g[lang];
  const url = `${site.url}${href(lang, `/panduan/${g.slug}`)}`;
  const more = guides.filter((x) => x.slug !== g.slug).slice(0, 3);
  const logo = logoFile();
  return (
    <>
      <article>
        <header className="page-hero">
          <div className="container narrow">
            <Breadcrumbs lang={lang} items={[{ href: href(lang, "/panduan"), label: d.common.guides }, { href: href(lang, `/panduan/${g.slug}`), label: t.title }]} />
            <p className="eyebrow">{ui.eyebrow}</p>
            <h1 className="guide-h1">{t.title}</h1>
            <p className="guide-meta">
              {ui.updated} <time dateTime={g.updated}>{formatDate(g.updated, lang)}</time> · {ui.minRead(readingMinutes(t))}
            </p>
            <p className="lead">{t.intro}</p>
          </div>
        </header>

        <div className="container narrow guide-body">
          <figure className="guide-cover">
            <span className="guide-cover-img">
              <Image src={g.cover} alt={t.coverAlt} fill priority sizes="(max-width: 860px) 100vw, 760px" style={{ objectPosition: g.coverPos }} />
            </span>
            {t.coverCaption && <figcaption className="muted small">{t.coverCaption}</figcaption>}
          </figure>

          <nav className="guide-toc" aria-labelledby="toc-h">
            <p id="toc-h" className="guide-toc-h">{ui.toc}</p>
            <ol>
              {t.sections.map((s) => <li key={s.h}><a href={`#${anchor(s.h)}`}>{s.h}</a></li>)}
              {t.faq.length > 0 && <li><a href="#faq">{ui.faqH}</a></li>}
            </ol>
          </nav>

          {t.sections.map((s) => {
            const List = s.ordered ? "ol" : "ul";
            return (
              <section key={s.h} className="guide-section" aria-labelledby={anchor(s.h)}>
                <h2 id={anchor(s.h)}>{s.h}</h2>
                {s.p?.map((x) => <p key={x}><RichText text={x} lang={lang} /></p>)}
                {s.list && (
                  <List className="guide-list">
                    {s.list.map((x) => <li key={x}><RichText text={x} lang={lang} /></li>)}
                  </List>
                )}
                {s.table && (
                  <div className="guide-table-wrap">
                    <table className="guide-table">
                      <thead>
                        <tr>{s.table[0].map((c, i) => <th key={i} scope="col">{c}</th>)}</tr>
                      </thead>
                      <tbody>
                        {s.table.slice(1).map((row) => (
                          <tr key={row[0]}>
                            {row.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.after?.map((x) => <p key={x}><RichText text={x} lang={lang} /></p>)}
              </section>
            );
          })}

          {g.catalog.length > 0 && (
            <nav className="guide-products" aria-labelledby="gp-h">
              <h2 id="gp-h" className="guide-products-h">{ui.products}</h2>
              <div className="chips chips-wrap">
                {g.catalog.map((p) => <Link key={p} href={href(lang, p)} className="chip">{catalogLabel(p, lang)}</Link>)}
              </div>
            </nav>
          )}

          {t.faq.length > 0 && (
            <section className="guide-faq" aria-labelledby="faq">
              <h2 id="faq">{ui.faqH}</h2>
              <div className="faq">
                {t.faq.map((f) => (
                  <details key={f.q}><summary>{f.q}</summary><p><RichText text={f.a} lang={lang} /></p></details>
                ))}
              </div>
            </section>
          )}

          <aside className="note-box">
            <h2>{ui.askH}</h2>
            <p>{ui.askP}</p>
            <a className="btn btn-sm" href={waLink(ui.wa)} target="_blank" rel="noopener">{ui.askBtn}</a>
          </aside>
        </div>
      </article>

      {more.length > 0 && (
        <section className="section section-tint" aria-labelledby="more-h">
          <div className="container">
            <div className="section-head">
              <h2 id="more-h">{ui.moreH}</h2>
              <Link href={href(lang, "/panduan")} className="link-arrow">{ui.allGuides}</Link>
            </div>
            <div className="guide-grid">{more.map((x) => <GuideCard key={x.slug} g={x} lang={lang} headingLevel={3} />)}</div>
          </div>
        </section>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: t.title,
          description: t.description,
          image: [`${site.url}${g.cover}`],
          datePublished: g.published,
          dateModified: g.updated,
          inLanguage: lang,
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          url,
          author: { "@type": "Organization", "@id": businessId, name: site.name, url: `${site.url}/${lang}` },
          publisher: {
            "@type": "Organization",
            "@id": businessId,
            name: site.name,
            ...(logo ? { logo: { "@type": "ImageObject", url: `${site.url}${logo}` } } : {}),
          },
        }}
      />
      {t.faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: lang,
            mainEntity: t.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
            })),
          }}
        />
      )}
    </>
  );
}
