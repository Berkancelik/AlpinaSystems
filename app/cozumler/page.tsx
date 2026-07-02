import type { Metadata } from "next";
import Link from "next/link";
import { serviceGroups, categoriesByGroup, totalServiceCount, categories } from "@/lib/services";

export const metadata: Metadata = {
  title: "Çözümler",
  description:
    "ERP, CRM, üretim, depo-lojistik, e-ticaret, yapay zeka ve daha fazlası: Alpina Systems'in tüm kurumsal yazılım çözüm kategorileri.",
};

export default function SolutionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-bright">
          Çözümlerimiz
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          {categories.length} kategori altında {totalServiceCount}+ yazılım
          çözümü geliştiriyoruz. Her çözüm, sektörünüzün ve iş yapış şeklinizin
          gereksinimlerine göre size özel uyarlanır.
        </p>
      </div>

      {serviceGroups.map((group) => (
        <section key={group} className="mt-16">
          <h2 className="font-display border-b border-line pb-4 text-2xl font-bold text-bright">
            {group}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categoriesByGroup(group).map((c) => (
              <Link
                key={c.slug}
                href={`/cozumler/${c.slug}/`}
                className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <div className="mb-4 h-1 w-10 rounded bg-accent transition-all group-hover:w-16" />
                <h3 className="font-display text-lg font-semibold text-bright">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{c.summary}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
                  {c.services.length} çözüm →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
