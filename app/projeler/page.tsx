import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Üretimden sağlığa, lojistikten yapay zekaya farklı sektörlerde hayata geçirdiğimiz yazılım projeleri ve elde edilen sonuçlar.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-bright">
          Yapılan İşler
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Farklı sektörlerde hayata geçirdiğimiz projelerden örnekler. Her
          projede yalnızca yazılımı değil, ölçülebilir iş sonuçlarını da
          teslim ediyoruz.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projeler/${p.slug}/`}
            className="group flex flex-col rounded-lg border border-line bg-surface p-7 transition-colors hover:border-accent/60"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {p.sector}
              </span>
              <span className="text-xs">{p.duration}</span>
            </div>
            <h2 className="font-display mt-4 text-xl font-semibold leading-snug text-bright">
              {p.title}
            </h2>
            <p className="mt-3 flex-1 leading-relaxed">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-6 text-sm font-semibold text-accent transition-colors group-hover:text-accent-soft">
              Proje detayı →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
