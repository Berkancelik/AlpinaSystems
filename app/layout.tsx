import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Alpina Systems — Kurumsal Yazılım Çözümleri",
    template: "%s | Alpina Systems",
  },
  description:
    "ERP, CRM, üretim, depo-lojistik, e-ticaret ve yapay zeka dahil 25+ alanda kurumsal yazılım geliştirme. Size özel yazılım çözümleri için Alpina Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
