import Link from "next/link";
import { LogoFull } from "./Logo";
import { categories } from "@/lib/services";

const footerCategories = [
  "kurumsal-is-yazilimlari",
  "uretim-sistemleri",
  "depo-ve-lojistik",
  "satis-ve-ticaret",
  "yapay-zeka",
  "size-ozel-yazilimlar",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const links = categories.filter((c) => footerCategories.includes(c.slug));

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <LogoFull />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Kurumsal iş yazılımları, sektörel çözümler ve size özel yazılım
            geliştirme. Fikirden canlıya, uçtan uca teknoloji ortağınız.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-bright">Çözümler</h3>
          <ul className="space-y-2.5 text-sm">
            {links.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/cozumler/${c.slug}/`}
                  className="transition-colors hover:text-accent-soft"
                >
                  {c.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/cozumler/"
                className="text-accent transition-colors hover:text-accent-soft"
              >
                Tüm çözümler →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-bright">Şirket</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/hakkimizda/" className="transition-colors hover:text-accent-soft">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/projeler/" className="transition-colors hover:text-accent-soft">
                Projeler
              </Link>
            </li>
            <li>
              <Link href="/blog/" className="transition-colors hover:text-accent-soft">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/iletisim/" className="transition-colors hover:text-accent-soft">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-bright">İletişim</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:info@alpinasystems.com"
                className="transition-colors hover:text-accent-soft"
              >
                info@alpinasystems.com
              </a>
            </li>
            <li>Türkiye</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {year} Alpina Systems. Tüm hakları saklıdır.</span>
          <span>Kurumsal yazılım çözümleri</span>
        </div>
      </div>
    </footer>
  );
}
