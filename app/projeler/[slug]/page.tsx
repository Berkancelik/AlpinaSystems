import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { getCategory } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const category = getCategory(project.categorySlug);
  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
      <nav className="mb-8 text-sm">
        <Link href="/projeler/" className="text-accent hover:text-accent-soft">
          Projeler
        </Link>
        <span className="mx-2 text-line">/</span>
        <span>{project.title}</span>
      </nav>

      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
        {project.sector}
      </span>
      <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-bright md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-5 text-lg leading-relaxed">{project.summary}</p>

      <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-lg border border-line bg-surface px-6 py-4 text-sm">
        <div>
          <span className="text-xs uppercase tracking-wider">Süre</span>
          <div className="mt-1 font-semibold text-bright">{project.duration}</div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider">Teknolojiler</span>
          <div className="mt-1 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-0.5 text-xs text-bright"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-2xl font-bold text-bright">Zorluk</h2>
        <p className="mt-4 leading-relaxed">{project.challenge}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-bright">Çözüm</h2>
        <p className="mt-4 leading-relaxed">{project.solution}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-bright">Sonuçlar</h2>
        <ul className="mt-5 space-y-3">
          {project.results.map((r) => (
            <li key={r} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-accent" />
              <span className="leading-relaxed">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {category && (
        <div className="mt-12 rounded-lg border border-line bg-surface p-6">
          <p className="text-sm">
            Bu proje{" "}
            <Link
              href={`/cozumler/${category.slug}/`}
              className="font-semibold text-accent hover:text-accent-soft"
            >
              {category.title}
            </Link>{" "}
            çözüm alanımız kapsamında geliştirilmiştir.
          </p>
        </div>
      )}

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="text-sm font-semibold uppercase tracking-wider">
          Diğer Projeler
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {others.map((p) => (
            <Link
              key={p.slug}
              href={`/projeler/${p.slug}/`}
              className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {p.sector}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold leading-snug text-bright">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
