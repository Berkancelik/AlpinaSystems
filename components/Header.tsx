"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoFull } from "./Logo";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/cozumler/", label: "Çözümler" },
  { href: "/projeler/", label: "Projeler" },
  { href: "/blog/", label: "Blog" },
  { href: "/hakkimizda/", label: "Hakkımızda" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="Alpina Systems ana sayfa">
          <LogoFull compact />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-bright ${
                isActive(item.href) ? "text-bright" : "text-body"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim/"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
          >
            İletişim
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-6 bg-bright transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span className={`h-0.5 w-6 bg-bright ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-bright transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink px-4 pb-6 pt-2 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block border-b border-line/60 py-3 text-sm ${
                isActive(item.href) ? "text-bright" : "text-body"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/iletisim/"
            className="mt-4 block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
          >
            İletişim
          </Link>
        </nav>
      )}
    </header>
  );
}
