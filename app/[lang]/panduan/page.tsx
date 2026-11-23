import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import GuideCard from "@/components/GuideCard";
import JsonLd from "@/components/JsonLd";
import { getDict } from "@/lib/dictionaries";
import { guidesByDate } from "@/lib/guides";
import { alternates, href, isLang, type Lang } from "@/lib/i18n";
import { site, waLink } from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDict(lang).guides;
  return {
    title: t.indexTitle,
    description: t.indexDesc,
    alternates: alternates(lang, "/panduan"),
    openGraph: { url: href(lang, "/panduan"), title: t.indexTitle, description: t.indexDesc },
  };
}

export default async function GuidesPage({ params }: Props) {
  const lang = (await params).lang as Lang;
  const d = getDict(lang);
  const t = d.guides;
  const list = guidesByDate();
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs lang={lang} items={[{ href: href(lang, "/panduan"), label: d.common.guides }]} />
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="guide-grid">
            {list.map((g) => <GuideCard key={g.slug} g={g} lang={lang} />)}
          </div>
          <aside className="note-box">
            <h2>{t.askH}</h2>
            <p>{t.askP}</p>
            <a className="btn btn-sm" href={waLink(t.wa)} target="_blank" rel="noopener">{t.askBtn}</a>
          </aside>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: t.h1,
          description: t.indexDesc,
          url: `${site.url}${href(lang, "/panduan")}`,
          inLanguage: lang,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: list.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}${href(lang, `/panduan/${g.slug}`)}`,
              name: g[lang].title,
            })),
          },
        }}
      />
    </>
  );
}
