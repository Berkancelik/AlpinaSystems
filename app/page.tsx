import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { categories, serviceGroups, categoriesByGroup, totalServiceCount } from "@/lib/services";
import { projects } from "@/lib/projects";
import { sortedPosts } from "@/lib/posts";

const featuredSlugs = [
  "kurumsal-is-yazilimlari",
  "uretim-sistemleri",
  "depo-ve-lojistik",
  "satis-ve-ticaret",
  "yapay-zeka",
  "size-ozel-yazilimlar",
];

export default function Home() {
  const featured = categories.filter((c) => featuredSlugs.includes(c.slug));
  const latestPosts = sortedPosts.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(43,143,230,0.18), transparent)",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 md:py-32">
          <LogoMark className="mx-auto mb-8 h-20 w-20" />
          <h1 className="font-display mx-auto max-w-3xl text-4xl font-bold leading-tight text-bright md:text-5xl">
            İşinizi Yukarı Taşıyan{" "}
            <span className="text-accent">Yazılım Çözümleri</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            ERP&apos;den yapay zekaya, üretimden e-ticarete {totalServiceCount}+
            farklı alanda kurumsal yazılım geliştiriyoruz. Hazır kalıplara
            sığmayan işiniz için, size özel sistemler kuruyoruz.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cozumler/"
              className="w-full rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink sm:w-auto"
            >
              Çözümlerimizi İnceleyin
            </Link>
            <Link
              href="/iletisim/"
              className="w-full rounded-md border border-line px-7 py-3.5 text-sm font-semibold text-bright transition-colors hover:border-accent sm:w-auto"
            >
              Projenizi Konuşalım
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:px-6 md:grid-cols-4">
          {[
            { value: `${categories.length}`, label: "Çözüm Kategorisi" },
            { value: `${totalServiceCount}+`, label: "Yazılım Çözümü" },
            { value: "17", label: "Hizmet Verilen Sektör" },
            { value: "%100", label: "Size Özel Geliştirme" },
          ].map((s) => (
            <div key={s.label} className="px-4 py-10 text-center">
              <div className="font-display text-3xl font-bold text-bright">
                {s.value}
              </div>
              <div className="mt-2 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured categories */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-bright">
              Çözüm Alanlarımız
            </h2>
            <p className="mt-3 max-w-xl">
              Kurumsal yazılımdan sektörel çözümlere, {categories.length}{" "}
              kategoride uzmanlaşmış geliştirme hizmeti.
            </p>
          </div>
          <Link
            href="/cozumler/"
            className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
          >
            Tümünü görüntüle →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => (
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

      {/* Groups overview */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-bright">
            Uçtan Uca Kapsam
          </h2>
          <p className="mt-3 max-w-2xl">
            İhtiyacınız ister tek bir modül ister komple dijital dönüşüm olsun,
            dört ana başlıkta tüm yazılım gereksinimlerinizi karşılıyoruz.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceGroups.map((g) => {
              const items = categoriesByGroup(g);
              return (
                <div key={g} className="rounded-lg border border-line bg-panel p-6">
                  <h3 className="font-display text-lg font-semibold text-bright">
                    {g}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/cozumler/${c.slug}/`}
                        className="rounded-full border border-line px-3 py-1.5 text-xs transition-colors hover:border-accent hover:text-bright"
                      >
                        {c.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold text-bright">
              Yapılan İşler
            </h2>
            <p className="mt-3 max-w-xl">
              Farklı sektörlerde hayata geçirdiğimiz projelerden örnekler.
            </p>
          </div>
          <Link
            href="/projeler/"
            className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
          >
            Tüm projeler →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projeler/${p.slug}/`}
              className="group flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {p.sector}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold leading-snug text-bright">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed">{p.summary}</p>
              <span className="mt-5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-soft">
                Detayları incele →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-bright">
                Blog
              </h2>
              <p className="mt-3 max-w-xl">
                Kurumsal yazılım, dijital dönüşüm ve teknoloji üzerine
                deneyimlerimizden notlar.
              </p>
            </div>
            <Link
              href="/blog/"
              className="shrink-0 text-sm font-semibold text-accent transition-colors hover:text-accent-soft"
            >
              Tüm yazılar →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col rounded-lg border border-line bg-panel p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-semibold text-accent">
                    {post.tag}
                  </span>
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold leading-snug text-bright">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-soft">
                  Yazıyı oku →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 110%, rgba(43,143,230,0.15), transparent)",
          }}
        />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-bright md:text-4xl">
            Projenizi Konuşalım
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg">
            İhtiyacınızı dinleyelim, size en uygun çözümü ve yol haritasını
            birlikte çıkaralım. İlk görüşme ve analiz her zaman ücretsiz.
          </p>
          <Link
            href="/iletisim/"
            className="mt-9 inline-block rounded-md bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
          >
            Ücretsiz Görüşme Planlayın
          </Link>
        </div>
      </section>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
