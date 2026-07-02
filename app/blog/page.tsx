import type { Metadata } from "next";
import Link from "next/link";
import { sortedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kurumsal yazılım, dijital dönüşüm, ERP, yapay zeka ve yazılım mimarisi üzerine Alpina Systems ekibinden yazılar.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-bright">Blog</h1>
        <p className="mt-5 text-lg leading-relaxed">
          Kurumsal yazılım, dijital dönüşüm ve teknoloji üzerine sahadaki
          deneyimlerimizden süzülen yazılar.
        </p>
      </div>

      <div className="mt-14 space-y-5">
        {sortedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}/`}
            className="group block rounded-lg border border-line bg-surface p-7 transition-colors hover:border-accent/60"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-semibold text-accent">
                {post.tag}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime} okuma</span>
            </div>
            <h2 className="font-display mt-4 text-2xl font-semibold leading-snug text-bright">
              {post.title}
            </h2>
            <p className="mt-3 leading-relaxed">{post.excerpt}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-accent transition-colors group-hover:text-accent-soft">
              Yazıyı oku →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
