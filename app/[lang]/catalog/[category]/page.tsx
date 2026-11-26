import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogView from "@/components/CatalogView";
import { getDict } from "@/lib/dictionaries";
import { alternates, href, isLang, locales, type Lang } from "@/lib/i18n";
import { categories, getCategory, getSizePage, productsIn, productsWithSize, sizePages } from "@/lib/products";

type Params = { params: Promise<{ lang: string; category: string }> };

export const dynamicParams = false;

// /catalog/<category> for the 7 closure categories, and /catalog/30ml, /50ml, /100ml for the size pages.
export function generateStaticParams() {
  const slugs = [...categories.map((c) => c.slug), ...sizePages.map((s) => s.slug)];
  return locales.flatMap((lang) => slugs.map((category) => ({ lang, category })));
}

/** Heading, intro and search description for a category or size page. */
function pageFor(slug: string, lang: Lang) {
  const m = getDict(lang).meta;
  const size = getSizePage(slug);
  if (size) {
    const items = productsWithSize(size.size, lang);
    return { title: m.sizeTitle(size.n), intro: m.sizeIntro(size.n, items.length), description: m.sizeDesc(size.n, items.length), items };
  }
  const c = getCategory(slug, lang);
  if (!c) return null;
  return { title: c.title, intro: c.blurb, description: m.categoryDesc(c.blurb, c.slug === "pre-order-bottles"), items: productsIn(c.slug, lang) };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang, category } = await params;
  if (!isLang(lang)) return {};
  const page = pageFor(category, lang);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: alternates(lang, `/catalog/${category}`),
    openGraph: { url: href(lang, `/catalog/${category}`), title: page.title, description: page.description },
  };
}

export default async function CategoryPage({ params }: Params) {
  const { lang, category } = (await params) as { lang: Lang; category: string };
  const page = pageFor(category, lang);
  if (!page) notFound();
  return <CatalogView lang={lang} title={page.title} intro={page.intro} items={page.items} active={category} />;
}
