import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory, categoriesByGroup } from "@/lib/services";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.summary,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const related = categoriesByGroup(category.group).filter(
    (c) => c.slug !== category.slug
  );
  const relatedProjects = projects.filter((p) => p.categorySlug === slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <nav className="mb-8 text-sm">
        <Link href="/cozumler/" className="text-accent hover:text-accent-soft">
          Çözümler
        </Link>
        <span className="mx-2 text-line">/</span>
        <span>{category.title}</span>
      </nav>

      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {category.group}
        </span>
        <h1 className="font-display mt-3 text-4xl font-bold text-bright">
          {category.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed">{category.intro}</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {category.services.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <h2 className="font-display text-lg font-semibold text-bright">
              {s.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      {relatedProjects.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-2xl font-bold text-bright">
            Bu Alandaki Projelerimiz
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projeler/${p.slug}/`}
                className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.sector}
                </span>
                <h3 className="font-display mt-3 text-lg font-semibold text-bright">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{p.summary}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 rounded-lg border border-line bg-surface p-8 text-center md:p-12">
        <h2 className="font-display text-2xl font-bold text-bright">
          {category.title} çözümüne mi ihtiyacınız var?
        </h2>
        <p className="mx-auto mt-4 max-w-xl">
          İhtiyacınızı dinleyip size özel bir çözüm önerisi ve yol haritası
          hazırlayalım. İlk görüşme ücretsizdir.
        </p>
        <Link
          href="/iletisim/"
          className="mt-7 inline-block rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
        >
          Bize Ulaşın
        </Link>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            İlgili Kategoriler
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((c) => (
              <Link
                key={c.slug}
                href={`/cozumler/${c.slug}/`}
                className="rounded-full border border-line px-3 py-1.5 text-xs transition-colors hover:border-accent hover:text-bright"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
