import type { Metadata } from "next";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { categories, totalServiceCount } from "@/lib/services";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Alpina Systems: kurumsal yazılım, sektörel çözümler ve size özel geliştirme alanında uçtan uca teknoloji ortağınız.",
};

const values = [
  {
    title: "Önce Analiz",
    text: "Kod yazmadan önce işinizi anlarız. Her proje, süreçlerinizin ve gerçek ihtiyacınızın analiziyle başlar; çözüm bu zeminin üzerine kurulur.",
  },
  {
    title: "Ölçülebilir Sonuç",
    text: "Başarıyı teslim edilen ekran sayısıyla değil, işinize kattığı ölçülebilir değerle tanımlarız: kısalan süreler, azalan hatalar, artan verim.",
  },
  {
    title: "Uzun Vadeli Ortaklık",
    text: "Projeyi teslim edip kaybolmayız. Bakım, geliştirme ve büyüme yolculuğunuzda yanınızda kalan bir teknoloji ortağı oluruz.",
  },
  {
    title: "Sade ve Sağlam Mühendislik",
    text: "Gösterişli değil, sürdürülebilir sistemler kurarız. Bakımı kolay, iyi test edilmiş ve ölçeklenebilir mimariler önceliğimizdir.",
  },
];

const steps = [
  {
    step: "01",
    title: "Keşif ve Analiz",
    text: "İş süreçlerinizi yerinde dinler, ihtiyaç ve öncelikleri birlikte netleştiririz. Çıktı: kapsam ve yol haritası.",
  },
  {
    step: "02",
    title: "Tasarım ve Mimari",
    text: "Ekran tasarımları ve sistem mimarisi onayınıza sunulur. Ne alacağınızı geliştirme başlamadan görürsünüz.",
  },
  {
    step: "03",
    title: "Geliştirme",
    text: "Kısa döngülerle geliştirir, her aşamada çalışan yazılımı gösteririz. Geri bildiriminiz süreci yönlendirir.",
  },
  {
    step: "04",
    title: "Devreye Alma",
    text: "Veri göçü, eğitim ve kademeli geçiş planıyla sistemi güvenle canlıya alırız.",
  },
  {
    step: "05",
    title: "Destek ve Geliştirme",
    text: "Canlı sonrası izleme, bakım ve yeni ihtiyaçlara göre sürekli geliştirme ile yanınızdayız.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
        <div>
          <h1 className="font-display text-4xl font-bold text-bright">
            Hakkımızda
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Alpina Systems, kurumsal iş yazılımlarından sektörel çözümlere,
            yapay zekadan bulut altyapılarına kadar geniş bir yelpazede yazılım
            geliştiren bir teknoloji şirketidir. Adımızı zirveden alıyoruz:
            her projede hedefimiz, işinizi bir üst seviyeye taşımak.
          </p>
          <p className="mt-4 leading-relaxed">
            Hazır paketlerin kalıplarına sığmayan işletmeler için çalışıyoruz.
            {" "}{categories.length} çözüm kategorisi ve {totalServiceCount}+
            yazılım çözümüyle; üretimden sağlığa, lojistikten kamuya farklı
            sektörlerin dijital dönüşümüne eşlik ediyoruz. Küçük bir modülden
            komple kurumsal sisteme, her ölçekte projeyi aynı mühendislik
            disipliniyle ele alıyoruz.
          </p>
        </div>
        <div className="hidden justify-center md:flex">
          <LogoMark className="h-52 w-52 opacity-90" />
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-bright">
          Değerlerimiz
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-lg border border-line bg-surface p-6">
              <div className="mb-4 h-1 w-10 rounded bg-accent" />
              <h3 className="font-display text-lg font-semibold text-bright">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-bold text-bright">
          Nasıl Çalışıyoruz?
        </h2>
        <div className="mt-8 space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex gap-6 rounded-lg border border-line bg-surface p-6"
            >
              <span className="font-display text-2xl font-bold text-accent">
                {s.step}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-bright">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-lg border border-line bg-surface p-8 text-center md:p-12">
        <h2 className="font-display text-2xl font-bold text-bright">
          Birlikte çalışalım
        </h2>
        <p className="mx-auto mt-4 max-w-xl">
          Projenizi dinlemekten memnuniyet duyarız. İlk görüşme ve ihtiyaç
          analizi her zaman ücretsiz.
        </p>
        <Link
          href="/iletisim/"
          className="mt-7 inline-block rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
        >
          İletişime Geçin
        </Link>
      </section>
    </div>
  );
}
