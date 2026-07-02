export type Project = {
  slug: string;
  title: string;
  sector: string;
  categorySlug: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  duration: string;
};

export const projects: Project[] = [
  {
    slug: "otomotiv-yan-sanayi-mes",
    title: "Otomotiv Yan Sanayi için MES ve OEE Sistemi",
    sector: "Üretim / Otomotiv",
    categorySlug: "uretim-sistemleri",
    summary:
      "3 fabrika ve 120+ makineden gerçek zamanlı veri toplayan üretim yürütme sistemi ile OEE'de %14 artış.",
    challenge:
      "Müşterimiz üretim verilerini vardiya sonlarında kâğıt formlarla topluyor, duruş nedenlerini ve gerçek makine verimliliğini göremiyordu. Ay sonu raporları hazırlanana kadar veriler güncelliğini yitiriyor, kayıpların kök nedenine inilemiyordu.",
    solution:
      "PLC ve sensör entegrasyonlarıyla 120'den fazla makineden anlık veri toplayan bir MES katmanı geliştirdik. Operatör panelleriyle duruş nedenleri anında sınıflandırılıyor, iş emirleri istasyonlara dijital dağıtılıyor ve OEE her makine için gerçek zamanlı hesaplanıyor. Sistem, mevcut ERP ile çift yönlü entegre çalışıyor.",
    results: [
      "OEE oranında ilk 6 ayda %14 artış",
      "Vardiya raporu hazırlama süresi 4 saatten sıfıra indi",
      "Plansız duruşlarda %22 azalma",
      "Üretim verisi ERP'ye otomatik akıyor, manuel giriş kalktı",
    ],
    stack: ["React", ".NET", "PostgreSQL", "MQTT", "Docker"],
    duration: "8 ay",
  },
  {
    slug: "cok-depolu-wms-barkod",
    title: "Çok Depolu Dağıtım Firması için WMS",
    sector: "Depo ve Lojistik",
    categorySlug: "depo-ve-lojistik",
    summary:
      "5 depo, 40 el terminaliyle çalışan adresli depo yönetim sistemi; sevkiyat hatalarında %90 azalma.",
    challenge:
      "Hızlı büyüyen dağıtım firması, depolarını Excel ve deneyimli personel hafızasıyla yönetiyordu. Yanlış ürün sevkiyatı, kayıp stok ve uzun toplama süreleri müşteri şikayetlerini artırıyordu.",
    solution:
      "Adresli depo yapısına geçişi planlayıp barkodlu bir WMS geliştirdik. El terminalleriyle mal kabul, yerleştirme, toplama ve sayım süreçleri yönlendirmeli hale geldi. Toplama rotaları otomatik optimize ediliyor, kritik stoklar için otomatik ikmal önerileri üretiliyor.",
    results: [
      "Sevkiyat hatalarında %90 azalma",
      "Sipariş toplama süresinde %35 kısalma",
      "Stok doğruluğu %99,7 seviyesine çıktı",
      "Yıllık sayım 3 günden 6 saate indi",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Android (Kotlin)"],
    duration: "6 ay",
  },
  {
    slug: "zincir-restoran-otomasyonu",
    title: "Zincir Restoran için Merkezi Otomasyon",
    sector: "Restoran & Kafe",
    categorySlug: "restoran-kafe",
    summary:
      "12 şubeli restoran zinciri için QR menü, mutfak ekranı ve merkezi raporlama içeren bütünleşik sistem.",
    challenge:
      "Her şubesi farklı yazılım kullanan zincir, merkezi ciro ve stok görünürlüğünden yoksundu. Menü güncellemeleri şube şube elle yapılıyor, kampanyalar tutarlı uygulanamıyordu.",
    solution:
      "Tüm şubeleri tek merkezden yöneten bulut tabanlı bir otomasyon geliştirdik. QR menü ve fiyatlar merkezi güncelleniyor, siparişler mutfak ekranlarına düşüyor, günlük ciro ve stok tüketimi anlık izleniyor. Paket servis platformlarıyla entegrasyon sipariş havuzunu tekilleştirdi.",
    results: [
      "Menü güncelleme süresi günlerden dakikalara indi",
      "Sipariş hazırlama süresinde ortalama %20 iyileşme",
      "Merkezi raporlamayla şube bazlı kârlılık görünür hale geldi",
      "Yemek platformu siparişleri tek ekranda toplandı",
    ],
    stack: ["React", "Node.js", "MongoDB", "Socket.IO"],
    duration: "5 ay",
  },
  {
    slug: "insaat-hakedis-santiye",
    title: "İnşaat Grubu için Şantiye ve Hakediş Yönetimi",
    sector: "İnşaat",
    categorySlug: "insaat",
    summary:
      "7 aktif şantiyenin puantaj, malzeme ve hakediş süreçlerini tek platformda toplayan yönetim sistemi.",
    challenge:
      "Şantiyelerden merkeze veri akışı telefon ve Excel'le sağlanıyor, taşeron hakedişleri haftalar süren mutabakatlarla hazırlanıyordu. Proje maliyetleri ancak iş bittiğinde netleşiyordu.",
    solution:
      "Saha ekiplerinin mobil uygulamayla günlük rapor, puantaj ve malzeme kaydı girdiği; merkezin tüm şantiyeleri anlık izlediği bir platform kurduk. Metraj bazlı hakediş modülü, taşeron hakedişlerini kesinti ve teminat hesaplarıyla otomatik hazırlıyor.",
    results: [
      "Hakediş hazırlama süresi 2 haftadan 2 güne indi",
      "Şantiye bazlı maliyet takibi gerçek zamanlı hale geldi",
      "Malzeme israfında ölçülebilir %12 azalma",
      "Puantaj anlaşmazlıkları imzalı dijital kayıtlarla sona erdi",
    ],
    stack: ["Next.js", ".NET", "SQL Server", "Flutter"],
    duration: "7 ay",
  },
  {
    slug: "b2b-bayi-platformu",
    title: "Üretici Firma için B2B Bayi Platformu",
    sector: "Satış ve Ticaret",
    categorySlug: "satis-ve-ticaret",
    summary:
      "600+ bayinin sipariş verdiği, ERP entegre B2B platformu; telefonla sipariş trafiği %80 azaldı.",
    challenge:
      "Bayiler siparişlerini telefon ve WhatsApp'la iletiyor, satış ekibi gününün büyük kısmını sipariş kaydına harcıyordu. Bayiye özel fiyat ve risk limiti kontrolleri elle yapıldığından hatalar yaşanıyordu.",
    solution:
      "Bayilerin kendi fiyat listeleri, kampanyaları ve cari durumlarıyla sipariş verdiği bir B2B platformu geliştirdik. ERP ile gerçek zamanlı stok ve cari entegrasyonu kuruldu; risk limitini aşan siparişler otomatik onaya düşüyor.",
    results: [
      "Telefonla sipariş trafiğinde %80 azalma",
      "Sipariş hatalarında %95 azalma",
      "Bayi başına ortalama sipariş sıklığı %18 arttı",
      "Satış ekibi rutin kayıttan stratejik satışa yönlendi",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    duration: "5 ay",
  },
  {
    slug: "ozel-klinik-yonetim",
    title: "Özel Klinik Zinciri için Yönetim Sistemi",
    sector: "Sağlık",
    categorySlug: "saglik",
    summary:
      "4 şubeli klinik zinciri için randevu, hasta takip ve faturalama süreçlerini birleştiren sistem.",
    challenge:
      "Şubeler arası hasta kayıtları paylaşılamıyor, randevu çakışmaları ve hatırlatma eksikliği nedeniyle randevuya gelmeme oranı yüksek seyrediyordu.",
    solution:
      "Merkezi hasta kaydı, online randevu ve otomatik SMS hatırlatma içeren bir klinik yönetim sistemi geliştirdik. Hekim takvimleri şubeler arası senkron çalışıyor; tedavi planları ve ödemeler hasta kartında bütünleşik izleniyor.",
    results: [
      "Randevuya gelmeme oranında %40 azalma",
      "Şubeler arası hasta geçmişi anında erişilebilir oldu",
      "Online randevu kanalı toplam randevuların %35'ine ulaştı",
      "Gün sonu kasa mutabakatı otomatikleşti",
    ],
    stack: ["React", ".NET", "PostgreSQL"],
    duration: "6 ay",
  },
  {
    slug: "kurumsal-ai-asistan",
    title: "Holding için Kurumsal AI Doküman Asistanı",
    sector: "Yapay Zeka",
    categorySlug: "yapay-zeka",
    summary:
      "10.000+ kurumsal dokümanla çalışan, çalışan sorularını kaynak göstererek yanıtlayan güvenli AI asistanı.",
    challenge:
      "Holding bünyesindeki prosedür, yönetmelik ve teknik dokümanlar farklı sistemlere dağılmıştı. Çalışanlar doğru bilgiye ulaşmak için uzun aramalar yapıyor veya yanlış sürümleri kullanıyordu.",
    solution:
      "Kurum dokümanlarını indeksleyen ve çalışan sorularını ilgili belgeye atıf vererek yanıtlayan bir AI asistanı geliştirdik. Sistem şirket içi altyapıda, yetki bazlı erişimle çalışıyor; her yanıt kaynak doküman bağlantısıyla doğrulanabiliyor.",
    results: [
      "Bilgiye erişim süresi ortalama 15 dakikadan saniyelere indi",
      "İK ve kalite birimlerine gelen rutin sorular %60 azaldı",
      "Güncel olmayan doküman kullanımı sona erdi",
      "Yanıtların tamamı kaynak gösterilerek denetlenebilir",
    ],
    stack: ["Python", "Claude API", "PostgreSQL", "React"],
    duration: "4 ay",
  },
  {
    slug: "site-yonetim-aidat",
    title: "Site Yönetim Şirketi için Aidat ve Tahsilat Platformu",
    sector: "Gayrimenkul",
    categorySlug: "gayrimenkul",
    summary:
      "45 site, 12.000+ bağımsız bölümü yöneten platform; online tahsilat oranı %70'e çıktı.",
    challenge:
      "Yönetim şirketi aidat takibini site bazlı ayrı Excel dosyalarıyla yürütüyor, tahsilatlar elden veya havaleyle toplanıp elle işleniyordu. Sakinler borç durumlarını göremiyor, itirazlar yönetim yükünü artırıyordu.",
    solution:
      "Tüm sitelerin tek panelden yönetildiği, sakinlerin mobil uygulamayla borç görüp online ödediği bir platform geliştirdik. Gider dağıtımı otomatik hesaplanıyor, banka hareketleri otomatik eşleşiyor, gecikme faizleri sistemden işliyor.",
    results: [
      "Online tahsilat oranı %70'e ulaştı",
      "Tahsilat süresi ortalama 12 gün kısaldı",
      "Aidat itirazları şeffaf dökümlerle %75 azaldı",
      "Muhasebe personelinin veri girişi yükü büyük ölçüde kalktı",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Flutter"],
    duration: "6 ay",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
