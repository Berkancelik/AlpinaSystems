import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, sortedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = sortedPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
      <nav className="mb-8 text-sm">
        <Link href="/blog/" className="text-accent hover:text-accent-soft">
          Blog
        </Link>
        <span className="mx-2 text-line">/</span>
        <span>{post.title}</span>
      </nav>

      <div className="flex flex-wrap items-center gap-3 text-xs">
        <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-semibold text-accent">
          {post.tag}
        </span>
        <span>{formatDate(post.date)}</span>
        <span>·</span>
        <span>{post.readingTime} okuma</span>
      </div>

      <h1 className="font-display mt-5 text-3xl font-bold leading-tight text-bright md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-10 space-y-6">
        {post.blocks.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2
                key={i}
                className="font-display pt-4 text-2xl font-bold text-bright"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "list") {
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-sm bg-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="leading-relaxed">
              {block.text}
            </p>
          );
        })}
      </div>

      <div className="mt-14 rounded-lg border border-line bg-surface p-8 text-center">
        <h2 className="font-display text-xl font-bold text-bright">
          Bu konuda desteğe mi ihtiyacınız var?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm">
          Deneyimimizi projenize taşıyalım. İhtiyacınızı konuşmak için bize
          ulaşın.
        </p>
        <Link
          href="/iletisim/"
          className="mt-6 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
        >
          İletişime Geçin
        </Link>
      </div>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider">
          Diğer Yazılar
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <span className="text-xs font-semibold text-accent">{p.tag}</span>
              <h3 className="font-display mt-2 text-lg font-semibold leading-snug text-bright">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
