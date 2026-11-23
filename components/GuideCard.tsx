import Link from "next/link";
import Image from "next/image";
import { getDict } from "@/lib/dictionaries";
import { readingMinutes, type Guide } from "@/lib/guides";
import { href, type Lang } from "@/lib/i18n";

export default function GuideCard({ g, lang, headingLevel = 2 }: { g: Guide; lang: Lang; headingLevel?: 2 | 3 }) {
  const t = g[lang];
  const ui = getDict(lang).guides;
  const H = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="guide-card">
      <Link href={href(lang, `/panduan/${g.slug}`)} className="guide-card-link">
        <span className="guide-card-img">
          <Image src={g.cover} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px" style={{ objectPosition: g.coverPos }} />
        </span>
        <span className="guide-card-body">
          <span className="guide-meta">{ui.minRead(readingMinutes(t))}</span>
          <H className="guide-card-h">{t.title}</H>
          <span className="muted small guide-card-desc">{t.description}</span>
          <span className="link-arrow guide-card-more">{ui.read}</span>
        </span>
      </Link>
    </article>
  );
}
