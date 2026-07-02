import type { Metadata } from "next";
import { categories } from "@/lib/services";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi konuşmak için Alpina Systems ile iletişime geçin. İlk görüşme ve ihtiyaç analizi ücretsizdir.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold text-bright">
          İletişim
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Projenizi dinlemek için buradayız. Formu doldurun ya da doğrudan
          e-posta gönderin; en geç bir iş günü içinde dönüş yapalım.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <form
          action="mailto:info@alpinasystems.com"
          method="post"
          encType="text/plain"
          className="space-y-5 rounded-lg border border-line bg-surface p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-bright">
                Ad Soyad
              </span>
              <input
                type="text"
                name="ad-soyad"
                required
                className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
                placeholder="Adınız Soyadınız"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-bright">
                Firma
              </span>
              <input
                type="text"
                name="firma"
                className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
                placeholder="Firma adı"
              />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-bright">
                E-posta
              </span>
              <input
                type="email"
                name="e-posta"
                required
                className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
                placeholder="ornek@firma.com"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-bright">
                Telefon
              </span>
              <input
                type="tel"
                name="telefon"
                className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
                placeholder="+90"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-bright">
              İlgilendiğiniz Alan
            </span>
            <select
              name="alan"
              className="w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Seçiniz
              </option>
              {categories.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title}
                </option>
              ))}
              <option value="Diğer">Diğer</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-bright">
              Mesajınız
            </span>
            <textarea
              name="mesaj"
              rows={5}
              required
              className="w-full resize-y rounded-md border border-line bg-ink px-4 py-3 text-sm text-bright outline-none transition-colors focus:border-accent"
              placeholder="Projenizden ve ihtiyacınızdan kısaca bahsedin..."
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink sm:w-auto"
          >
            Gönder
          </button>
        </form>

        <div className="space-y-5">
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              E-posta
            </h2>
            <a
              href="mailto:info@alpinasystems.com"
              className="mt-2 block font-semibold text-accent hover:text-accent-soft"
            >
              info@alpinasystems.com
            </a>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              Çalışma Saatleri
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              Hafta içi 09:00 – 18:00
              <br />
              Destek sözleşmeli müşterilerimiz için 7/24
            </p>
          </div>
          <div className="rounded-lg border border-line bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              İlk Görüşme
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              İhtiyaç analizi ve ön değerlendirme görüşmemiz ücretsizdir.
              Görüşme sonunda projeniz için kapsam ve yol haritası önerisi
              alırsınız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
