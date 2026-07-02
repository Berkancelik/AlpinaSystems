# Alpina Systems — Kurumsal Web Sitesi

Next.js (App Router) + Tailwind CSS ile geliştirilmiş, tamamen statik (`output: "export"`) kurumsal web sitesi.

## Komutlar

```bash
npm run dev     # Geliştirme sunucusu (http://localhost:3000)
npm run build   # Statik çıktı üretir → out/ klasörü
```

`npm run build` sonrası `out/` klasörü herhangi bir statik hosting'e (Vercel, Netlify, GitHub Pages, cPanel, Nginx) doğrudan yüklenebilir.

## İçerik Güncelleme

Tüm içerik `lib/` altındaki veri dosyalarından yönetilir; sayfa koduna dokunmadan güncellenebilir:

| Dosya | İçerik |
|---|---|
| `lib/services.ts` | Çözüm kategorileri ve her kategorideki hizmetler |
| `lib/projects.ts` | Yapılan işler / referans projeler |
| `lib/posts.ts` | Blog yazıları |

Yeni bir kategori, proje veya yazı eklemek için ilgili diziye yeni bir kayıt eklemek yeterlidir; sayfalar build sırasında otomatik oluşturulur.

## Sayfalar

- `/` — Ana sayfa
- `/cozumler/` — Tüm çözüm kategorileri, `/cozumler/[slug]/` — kategori detayı
- `/projeler/` — Yapılan işler, `/projeler/[slug]/` — proje detayı
- `/blog/` — Blog, `/blog/[slug]/` — yazı detayı
- `/hakkimizda/`, `/iletisim/`

## Notlar

- İletişim formu statik sitede `mailto:` ile çalışır. Gerçek form gönderimi için Formspree, Getform veya benzeri bir servise `action` adresini yönlendirmeniz yeterli.
- Logo `components/Logo.tsx` içinde SVG olarak yeniden çizilmiştir; orijinal logo görselini `public/` altına koyup dilediğiniz yerde kullanabilirsiniz.
