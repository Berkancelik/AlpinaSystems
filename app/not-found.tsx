import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-32 text-center">
      <LogoMark className="h-16 w-16 opacity-80" />
      <h1 className="font-display mt-8 text-4xl font-bold text-bright">
        Sayfa Bulunamadı
      </h1>
      <p className="mt-4">
        Aradığınız sayfa taşınmış veya kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-soft hover:text-ink"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
