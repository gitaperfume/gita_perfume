import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { href, type Lang } from "@/lib/i18n";

// Renders the small markup used in guide text (lib/guides.ts): **bold** and [text](/path).
// Site paths get the page language added ("/catalog/30ml" -> "/id/catalog/30ml").
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

export default function RichText({ text, lang }: { text: string; lang: Lang }) {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={m.index}>{m[1]}</strong>);
    else {
      const to = m[3];
      out.push(
        to.startsWith("/") ? (
          <Link key={m.index} href={href(lang, to)}>{m[2]}</Link>
        ) : (
          <a key={m.index} href={to} target="_blank" rel="noopener">{m[2]}</a>
        )
      );
    }
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out.map((n, i) => <Fragment key={i}>{n}</Fragment>)}</>;
}
