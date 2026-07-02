export type Service = {
  name: string;
  description: string;
};

export type ServiceGroup =
  | "Kurumsal Çözümler"
  | "Sektörel Çözümler"
  | "Teknoloji ve Platform"
  | "Altyapı ve Entegrasyon";

export type ServiceCategory = {
  slug: string;
  title: string;
  group: ServiceGroup;
  summary: string;
  intro: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  "Kurumsal Çözümler",
  "Sektörel Çözümler",
  "Teknoloji ve Platform",
  "Altyapı ve Entegrasyon",
];

export const categories: ServiceCategory[] = [
  {
    slug: "kurumsal-is-yazilimlari",
    title: "Kurumsal İş Yazılımları",
    group: "Kurumsal Çözümler",
    summary:
      "ERP, CRM ve insan kaynakları başta olmak üzere şirketinizin tüm iş süreçlerini tek çatı altında yöneten çözümler.",
    intro:
      "Şirketinizin satıştan finansa, insan kaynaklarından operasyona kadar tüm süreçlerini uçtan uca dijitalleştiriyoruz. Hazır paketlerin sınırlarına takılmadan, iş akışınıza birebir uyan kurumsal yazılımlar geliştiriyor; mevcut sistemlerinizle tam entegre çalışan, ölçeklenebilir mimariler kuruyoruz.",
    services: [
      {
        name: "ERP (Kurumsal Kaynak Planlama)",
        description:
          "Satın alma, stok, üretim, satış ve finans süreçlerinizi tek platformda birleştiren, kurumunuza özel tasarlanan ERP çözümleri.",
      },
      {
        name: "CRM (Müşteri İlişkileri Yönetimi)",
        description:
          "Müşteri adaylarından satış fırsatlarına, teklif süreçlerinden satış sonrası desteğe kadar tüm müşteri yolculuğunu yöneten CRM sistemleri.",
      },
      {
        name: "İnsan Kaynakları (HRM)",
        description:
          "İşe alımdan özlük yönetimine, organizasyon şemasından yetkinlik takibine kadar İK süreçlerinizin tamamını kapsayan yönetim platformu.",
      },
      {
        name: "Personel Takip Sistemi",
        description:
          "Giriş-çıkış, konum ve görev bazlı personel takibi; turnike, kart okuyucu ve mobil imza entegrasyonlarıyla gerçek zamanlı izleme.",
      },
      {
        name: "Bordro Sistemi",
        description:
          "Yasal mevzuata tam uyumlu, SGK ve muhasebe entegrasyonlu, çok şirketli yapıları destekleyen bordro hesaplama ve raporlama sistemi.",
      },
      {
        name: "Maaş Yönetimi",
        description:
          "Maaş, prim, avans ve kesinti süreçlerini tek ekrandan yöneten; banka ödeme dosyalarını otomatik üreten maaş yönetim çözümü.",
      },
      {
        name: "İzin Yönetimi",
        description:
          "Yıllık izin, mazeret ve rapor süreçlerini onay akışlarıyla dijitalleştiren, bakiyeleri otomatik hesaplayan izin yönetim modülü.",
      },
      {
        name: "Mesai Takibi",
        description:
          "Fazla mesai, eksik çalışma ve esnek çalışma modellerini otomatik hesaplayan, bordroya doğrudan aktaran mesai takip sistemi.",
      },
      {
        name: "Vardiya Yönetimi",
        description:
          "Çok lokasyonlu ve dönüşümlü vardiya planlarını sürükle-bırak kolaylığında oluşturan, çakışmaları otomatik tespit eden planlama aracı.",
      },
      {
        name: "Performans Değerlendirme",
        description:
          "Hedef (OKR/KPI) bazlı, 360 derece geri bildirim destekli performans değerlendirme ve gelişim takip sistemi.",
      },
      {
        name: "Eğitim Yönetimi",
        description:
          "Kurum içi eğitim planlama, katılım takibi, sertifika ve yetkinlik yönetimini tek platformda toplayan eğitim yönetim sistemi.",
      },
    ],
  },
  {
    slug: "uretim-sistemleri",
    title: "Üretim Sistemleri",
    group: "Kurumsal Çözümler",
    summary:
      "MRP'den MES'e, kalite kontrolden OEE takibine kadar fabrikanızı uçtan uca dijitalleştiren üretim yazılımları.",
    intro:
      "Üretim sahasındaki her veriyi anlık olarak toplayan, planlayan ve raporlayan sistemler geliştiriyoruz. Makine entegrasyonlarından saha terminallerine, kalite süreçlerinden bakım planlamaya kadar fabrikanızın dijital ikizini kuruyor; verimliliği ölçülebilir hale getiriyoruz.",
    services: [
      {
        name: "MRP (Malzeme İhtiyaç Planlama)",
        description:
          "Sipariş ve üretim planına göre malzeme ihtiyaçlarını otomatik hesaplayan, satın alma önerileri üreten planlama sistemi.",
      },
      {
        name: "MES (Üretim Yürütme Sistemi)",
        description:
          "Üretim sahasını gerçek zamanlı izleyen, iş emirlerini istasyonlara dağıtan ve saha verisini ERP'ye taşıyan üretim yürütme katmanı.",
      },
      {
        name: "Üretim Takip Sistemi",
        description:
          "Hangi üründen ne kadar, hangi hatta, ne sürede üretildiğini anlık takip eden; duruş ve fire analizleri sunan takip çözümü.",
      },
      {
        name: "İş Emri Yönetimi",
        description:
          "İş emirlerinin oluşturulması, önceliklendirilmesi, sahaya dağıtımı ve tamamlanma takibini dijitalleştiren yönetim modülü.",
      },
      {
        name: "Kalite Kontrol Sistemi",
        description:
          "Girdi, proses ve final kalite kontrol süreçlerini form ve ölçüm entegrasyonlarıyla yöneten, uygunsuzlukları izleyen kalite sistemi.",
      },
      {
        name: "Bakım Yönetimi (CMMS)",
        description:
          "Planlı ve arızi bakım süreçlerini, yedek parça stoklarını ve bakım maliyetlerini yöneten bilgisayar destekli bakım yönetim sistemi.",
      },
      {
        name: "Makine Takip Sistemi",
        description:
          "PLC ve sensör entegrasyonlarıyla makinelerden anlık veri toplayan, duruş nedenlerini otomatik sınıflandıran izleme çözümü.",
      },
      {
        name: "OEE Takip Sistemi",
        description:
          "Kullanılabilirlik, performans ve kalite bileşenleriyle ekipman etkinliğini (OEE) gerçek zamanlı hesaplayan ve görselleştiren sistem.",
      },
      {
        name: "Reçete Yönetimi",
        description:
          "Ürün ağaçları (BOM) ve üretim reçetelerini versiyonlarıyla yöneten, maliyet hesaplamalarına temel oluşturan reçete altyapısı.",
      },
      {
        name: "Üretim Planlama",
        description:
          "Kapasite, termin ve malzeme kısıtlarını birlikte değerlendiren; çizelgeleme ve senaryo analizleri sunan planlama yazılımı.",
      },
    ],
  },
  {
    slug: "depo-ve-lojistik",
    title: "Depo ve Lojistik",
    group: "Kurumsal Çözümler",
    summary:
      "WMS, barkod/RFID, stok ve filo yönetimiyle tedarik zincirinizin her halkasını izlenebilir kılan çözümler.",
    intro:
      "Mal kabulden sevkiyata kadar deponuzdaki her hareketi kayıt altına alan, sahada el terminalleriyle çalışan ve araç filonuzu gerçek zamanlı izleyen sistemler geliştiriyoruz. Stok doğruluğunu artırıyor, operasyon maliyetlerinizi düşürüyoruz.",
    services: [
      {
        name: "WMS (Depo Yönetim Sistemi)",
        description:
          "Adresli depo yönetimi, toplama-yerleştirme optimizasyonu ve el terminali entegrasyonuyla depo operasyonlarını uçtan uca yöneten sistem.",
      },
      {
        name: "Barkod Sistemi",
        description:
          "Ürün, palet ve lokasyon bazlı barkod altyapısı; etiket tasarımı, yazıcı entegrasyonu ve mobil okuma uygulamalarıyla birlikte.",
      },
      {
        name: "RFID Sistemi",
        description:
          "Temassız ve toplu okuma yapabilen RFID altyapısıyla hızlı sayım, otomatik geçiş takibi ve gerçek zamanlı envanter görünürlüğü.",
      },
      {
        name: "Stok Takip Sistemi",
        description:
          "Çok depolu ve çok birimli stok hareketlerini anlık izleyen, kritik seviye uyarıları üreten stok takip çözümü.",
      },
      {
        name: "Envanter Yönetimi",
        description:
          "Dönemsel ve anlık sayım süreçleri, lot/seri ve son kullanma tarihi takibiyle tam envanter kontrolü sağlayan yönetim sistemi.",
      },
      {
        name: "Sevkiyat Yönetimi",
        description:
          "Sipariş konsolidasyonu, araç yükleme planı ve irsaliye süreçlerini dijitalleştiren sevkiyat yönetim modülü.",
      },
      {
        name: "Kargo Entegrasyonu",
        description:
          "Yurtiçi kargo firmalarıyla API entegrasyonu; otomatik gönderi oluşturma, barkod basımı ve kargo durum takibi.",
      },
      {
        name: "Araç Takip Sistemi",
        description:
          "GPS tabanlı gerçek zamanlı araç izleme, güzergâh geçmişi, hız ve durak analizleri sunan takip platformu.",
      },
      {
        name: "Filo Yönetimi",
        description:
          "Araç bakım, muayene, sigorta ve yakıt giderlerini tek ekrandan yöneten; sürücü ve görev atamalarını izleyen filo çözümü.",
      },
      {
        name: "Rota Planlama",
        description:
          "Teslimat noktalarını, araç kapasitelerini ve zaman pencerelerini dikkate alarak en verimli rotayı hesaplayan optimizasyon yazılımı.",
      },
    ],
  },
  {
    slug: "satis-ve-ticaret",
    title: "Satış ve Ticaret",
    group: "Kurumsal Çözümler",
    summary:
      "Tekliften siparişe, bayiden e-ticarete kadar tüm satış kanallarınızı tek merkezden yöneten platformlar.",
    intro:
      "Satış ekiplerinizin sahada ve ofiste kullandığı sistemlerden, müşterilerinizin sipariş verdiği B2B/B2C platformlarına kadar tüm ticaret altyapınızı kuruyoruz. Pazaryeri entegrasyonları ve POS çözümleriyle satış kanallarınızı tek merkezde birleştiriyoruz.",
    services: [
      {
        name: "Satış Yönetim Sistemi",
        description:
          "Satış ekibi aktiviteleri, hedef takibi, fiyat listeleri ve kampanya yönetimini tek platformda toplayan satış yönetim çözümü.",
      },
      {
        name: "Teklif Yönetimi",
        description:
          "Şablon tabanlı teklif hazırlama, onay akışları, revizyon takibi ve tekliften siparişe otomatik dönüşüm sağlayan sistem.",
      },
      {
        name: "Sipariş Yönetimi",
        description:
          "Tüm kanallardan gelen siparişleri tek havuzda toplayan; stok, üretim ve sevkiyatla entegre çalışan sipariş yönetim altyapısı.",
      },
      {
        name: "Bayi Yönetim Sistemi",
        description:
          "Bayilerinizin sipariş verdiği, cari durumunu ve kampanyaları takip ettiği; risk limiti kontrollü bayi portalı.",
      },
      {
        name: "POS Sistemi",
        description:
          "Hızlı satış ekranı, barkod okuma, yazarkasa ve ödeme cihazı entegrasyonlarıyla perakende noktaları için satış çözümü.",
      },
      {
        name: "E-Ticaret Yazılımı",
        description:
          "Ürün yönetimi, ödeme ve kargo entegrasyonları, kampanya altyapısıyla markanıza özel geliştirilen e-ticaret platformu.",
      },
      {
        name: "B2B Platformu",
        description:
          "Müşteriye özel fiyat ve iskonto yapıları, cari entegrasyonu ve toplu sipariş özellikleriyle kurumsal satış portalı.",
      },
      {
        name: "B2C Platformu",
        description:
          "Son kullanıcıya yönelik, hızlı ve mobil uyumlu alışveriş deneyimi sunan; üyelik ve sadakat sistemli satış platformu.",
      },
      {
        name: "Marketplace Entegrasyonları",
        description:
          "Trendyol, Hepsiburada, Amazon ve N11 gibi pazaryerleriyle ürün, stok, fiyat ve sipariş senkronizasyonu.",
      },
      {
        name: "Abonelik Yönetimi",
        description:
          "Tekrarlayan ödeme, paket ve dönem yönetimi, otomatik faturalama ve iptal/yenileme akışlarıyla abonelik altyapısı.",
      },
    ],
  },
  {
    slug: "finans",
    title: "Finans",
    group: "Kurumsal Çözümler",
    summary:
      "Ön muhasebeden e-dönüşüme, cari takipten bütçe planlamaya kadar finansal süreçlerinizi dijitalleştiren çözümler.",
    intro:
      "Finans ekiplerinin günlük operasyonlarını hızlandıran, hata payını azaltan ve yönetime gerçek zamanlı finansal görünürlük sağlayan sistemler geliştiriyoruz. GİB mevzuatına tam uyumlu e-dönüşüm çözümleri ve muhasebe entegrasyonlarıyla süreçlerinizi uçtan uca bağlıyoruz.",
    services: [
      {
        name: "Ön Muhasebe",
        description:
          "Cari, stok, kasa, banka ve çek-senet takibini kolay bir arayüzde toplayan; KOBİ'lere özel ön muhasebe çözümü.",
      },
      {
        name: "Muhasebe Entegrasyonları",
        description:
          "Logo, Netsis, Mikro, Luca gibi muhasebe yazılımlarıyla çift yönlü veri aktarımı sağlayan entegrasyon katmanları.",
      },
      {
        name: "Cari Hesap Takibi",
        description:
          "Müşteri ve tedarikçi bakiyeleri, vade analizi, mutabakat ve ekstre süreçlerini dijitalleştiren cari yönetim modülü.",
      },
      {
        name: "Fatura Yönetimi",
        description:
          "Alış ve satış faturalarının oluşturulması, onaylanması ve arşivlenmesini tek akışta yöneten fatura altyapısı.",
      },
      {
        name: "E-Fatura",
        description:
          "GİB onaylı özel entegratörlerle tam uyumlu; otomatik gönderim, gelen fatura işleme ve senaryo yönetimli e-fatura çözümü.",
      },
      {
        name: "E-Arşiv",
        description:
          "E-arşiv fatura oluşturma, mail ile iletim ve yasal saklama gereksinimlerini karşılayan arşiv altyapısı.",
      },
      {
        name: "E-İrsaliye",
        description:
          "Sevkiyat süreçleriyle entegre çalışan, yanıt ve kabul akışlarını yöneten e-irsaliye çözümü.",
      },
      {
        name: "Tahsilat Takibi",
        description:
          "Vadesi gelen ve geciken alacakları izleyen, otomatik hatırlatma gönderen ve tahsilat performansını raporlayan sistem.",
      },
      {
        name: "Ödeme Yönetimi",
        description:
          "Tedarikçi ödemeleri, ödeme planları ve banka talimat dosyalarını yöneten; onay akışlı ödeme yönetim modülü.",
      },
      {
        name: "Bütçe Planlama",
        description:
          "Departman ve masraf merkezi bazlı bütçe oluşturma, gerçekleşme takibi ve sapma analizleri sunan planlama aracı.",
      },
    ],
  },
  {
    slug: "servis-ve-teknik-destek",
    title: "Servis ve Teknik Destek",
    group: "Kurumsal Çözümler",
    summary:
      "Servis, arıza ve ticket süreçlerinizi SLA takibi ve garanti yönetimiyle birlikte yöneten destek platformları.",
    intro:
      "Satış sonrası hizmet kalitenizi ölçülebilir hale getiren sistemler geliştiriyoruz. Müşteri taleplerinin kaydından saha servis operasyonlarına, SLA takibinden garanti süreçlerine kadar tüm destek zincirini tek platformda yönetin.",
    services: [
      {
        name: "Servis Takip Sistemi",
        description:
          "Saha servis ekiplerinin görev atama, rota ve iş tamamlama süreçlerini mobil uygulama destekli yöneten servis platformu.",
      },
      {
        name: "Arıza Takip Sistemi",
        description:
          "Arıza bildirimlerinin kaydı, önceliklendirilmesi, teknisyen ataması ve çözüm sürelerinin takibini sağlayan sistem.",
      },
      {
        name: "Ticket Sistemi",
        description:
          "E-posta, web formu ve telefon kanallarından gelen talepleri tek havuzda toplayan; kategori ve öncelik bazlı ticket yönetimi.",
      },
      {
        name: "SLA Yönetimi",
        description:
          "Müşteri sözleşmelerine göre yanıt ve çözüm sürelerini otomatik izleyen, ihlal riskinde uyarı üreten SLA takip modülü.",
      },
      {
        name: "Garanti Takibi",
        description:
          "Seri numarası bazlı garanti kaydı, kapsam sorgulama ve garanti dahili/harici işlem ayrımı yapan takip sistemi.",
      },
    ],
  },
  {
    slug: "dokuman-yonetimi",
    title: "Doküman Yönetimi",
    group: "Kurumsal Çözümler",
    summary:
      "DMS, dijital arşiv, sözleşme yönetimi ve e-imza entegrasyonlarıyla evrak süreçlerinizi kâğıtsız hale getiren çözümler.",
    intro:
      "Kurumunuzdaki tüm belgelerin güvenli, aranabilir ve versiyonlu şekilde yönetilmesini sağlıyoruz. Yetki bazlı erişim, onay akışları ve e-imza entegrasyonlarıyla evrak trafiğinizi tamamen dijitale taşıyoruz.",
    services: [
      {
        name: "Doküman Yönetim Sistemi (DMS)",
        description:
          "Versiyon kontrolü, tam metin arama, yetkilendirme ve onay akışlarıyla kurumsal belgelerinizi yöneten merkezi platform.",
      },
      {
        name: "Dijital Arşiv",
        description:
          "Fiziksel arşivinizin taranması ve indekslenmesi; yasal saklama sürelerine uygun, hızlı erişilebilir dijital arşiv altyapısı.",
      },
      {
        name: "Sözleşme Yönetimi",
        description:
          "Sözleşme hazırlama, onay, imza ve yenileme süreçlerini takip eden; kritik tarihlerde otomatik uyarı üreten yönetim sistemi.",
      },
      {
        name: "E-İmza Entegrasyonları",
        description:
          "Elektronik ve mobil imza altyapılarıyla entegrasyon; belgelerin yasal geçerlilikle dijital ortamda imzalanması.",
      },
    ],
  },
  {
    slug: "is-surecleri",
    title: "İş Süreçleri",
    group: "Kurumsal Çözümler",
    summary:
      "BPM, workflow, form ve onay süreçleriyle kurumunuzdaki tüm iş akışlarını dijitalleştiren süreç yönetimi çözümleri.",
    intro:
      "Kurumunuzda e-posta ve kâğıtla yürüyen tüm süreçleri tanımlı, izlenebilir ve ölçülebilir dijital akışlara dönüştürüyoruz. Sürükle-bırak form ve akış tasarımcılarıyla, süreçlerinizi yazılım ekibine ihtiyaç duymadan güncelleyebileceğiniz esnek platformlar kuruyoruz.",
    services: [
      {
        name: "BPM (Business Process Management)",
        description:
          "İş süreçlerinin modellenmesi, otomasyonu ve sürekli iyileştirilmesi için uçtan uca süreç yönetimi platformu.",
      },
      {
        name: "Workflow Yönetimi",
        description:
          "Koşullu dallanma, paralel onay ve otomatik görev atama destekli, esnek iş akışı motoru.",
      },
      {
        name: "Form Yönetim Sistemi",
        description:
          "Sürükle-bırak form tasarımcısıyla dijital formlar oluşturma; veri doğrulama ve raporlama altyapısıyla birlikte.",
      },
      {
        name: "Onay Süreçleri",
        description:
          "Satın alma, izin, masraf ve sözleşme gibi tüm onay akışlarını hiyerarşi ve vekâlet destekli yöneten sistem.",
      },
    ],
  },
  {
    slug: "saglik",
    title: "Sağlık",
    group: "Sektörel Çözümler",
    summary:
      "Hastane, klinik, laboratuvar ve eczaneler için hasta odaklı, mevzuata uyumlu sağlık bilişim sistemleri.",
    intro:
      "Sağlık kuruluşlarının hasta kabulden faturalamaya kadar tüm operasyonlarını dijitalleştiren sistemler geliştiriyoruz. MHRS, e-Nabız ve Medula entegrasyonlarıyla mevzuata tam uyumlu; hasta güvenliğini ve veri mahremiyetini merkeze alan çözümler sunuyoruz.",
    services: [
      {
        name: "Hastane Bilgi Yönetim Sistemi",
        description:
          "Poliklinik, yatan hasta, ameliyathane, faturalama ve tıbbi kayıt süreçlerini bütünleşik yöneten HBYS çözümü.",
      },
      {
        name: "Klinik Yönetim Sistemi",
        description:
          "Muayenehane ve kliniklere özel hasta kaydı, protokol takibi, tedavi planlama ve ödeme yönetimi sistemi.",
      },
      {
        name: "Hasta Takip Sistemi",
        description:
          "Tedavi süreçleri, kontroller ve hasta geçmişini kronolojik izleyen; hatırlatma ve bilgilendirme destekli takip çözümü.",
      },
      {
        name: "Randevu Sistemi",
        description:
          "Online randevu alma, takvim yönetimi, SMS hatırlatma ve doluluk optimizasyonu sunan randevu platformu.",
      },
      {
        name: "Laboratuvar Yönetimi",
        description:
          "Numune kabul, cihaz entegrasyonu, sonuç onayı ve raporlama süreçlerini yöneten LIS çözümü.",
      },
      {
        name: "Eczane Yönetimi",
        description:
          "İlaç stok takibi, reçete işleme, miat kontrolü ve Medula entegrasyonuyla eczane operasyon sistemi.",
      },
    ],
  },
  {
    slug: "egitim",
    title: "Eğitim",
    group: "Sektörel Çözümler",
    summary:
      "Okullar, kurslar ve online eğitim platformları için öğrenci odaklı yönetim ve öğrenme sistemleri.",
    intro:
      "Eğitim kurumlarının akademik ve idari tüm süreçlerini dijitalleştiriyoruz. Kayıttan mezuniyete öğrenci yaşam döngüsünü yöneten sistemlerden, binlerce kullanıcıya eşzamanlı hizmet veren online eğitim platformlarına kadar eğitim teknolojilerinin her alanında çözüm üretiyoruz.",
    services: [
      {
        name: "Öğrenci Bilgi Sistemi",
        description:
          "Kayıt, not, devamsızlık, ders programı ve mezuniyet süreçlerini yöneten merkezi öğrenci bilgi platformu.",
      },
      {
        name: "Okul Yönetim Sistemi",
        description:
          "Veli iletişimi, ödeme takibi, servis ve yemekhane yönetimi dahil okulun tüm idari işleyişini kapsayan sistem.",
      },
      {
        name: "Online Eğitim Platformu",
        description:
          "Canlı ders, video içerik, ödev ve ilerleme takibi sunan; ölçeklenebilir uzaktan eğitim (LMS) platformu.",
      },
      {
        name: "Sınav Sistemi",
        description:
          "Soru bankası, güvenli online sınav, otomatik değerlendirme ve detaylı başarı analizleri sunan sınav altyapısı.",
      },
      {
        name: "Kurs Yönetimi",
        description:
          "Kurs ve dönem planlama, kayıt-ödeme takibi, eğitmen ve derslik yönetimini tek ekranda toplayan çözüm.",
      },
    ],
  },
  {
    slug: "insaat",
    title: "İnşaat",
    group: "Sektörel Çözümler",
    summary:
      "Şantiye, hakediş, malzeme ve personel takibiyle inşaat projelerinizi kontrol altında tutan yönetim sistemleri.",
    intro:
      "İnşaat firmalarının en kritik ihtiyacı olan maliyet ve ilerleme kontrolünü dijitalleştiriyoruz. Şantiyedeki günlük veriyi merkeze taşıyan, hakediş süreçlerini şeffaflaştıran ve proje kârlılığını anlık gösteren sistemler geliştiriyoruz.",
    services: [
      {
        name: "Şantiye Yönetim Sistemi",
        description:
          "Günlük saha raporları, puantaj, makine-ekipman ve taşeron takibini tek platformda toplayan şantiye çözümü.",
      },
      {
        name: "Proje Takip Sistemi",
        description:
          "İş programı, ilerleme yüzdeleri, maliyet gerçekleşmeleri ve gecikme analizleriyle proje kontrol sistemi.",
      },
      {
        name: "Hakediş Yönetimi",
        description:
          "Metraj bazlı hakediş hazırlama, onay akışları ve taşeron hakedişlerini yöneten; kesinti ve teminat takipli sistem.",
      },
      {
        name: "Malzeme Takibi",
        description:
          "Şantiye bazlı malzeme talep, satın alma, depo giriş-çıkış ve sarfiyat takibini sağlayan yönetim modülü.",
      },
      {
        name: "Personel Takibi",
        description:
          "Şantiye personeli ve taşeron işçilerinin giriş-çıkış, puantaj ve İSG evrak takibini yapan saha çözümü.",
      },
    ],
  },
  {
    slug: "restoran-kafe",
    title: "Restoran & Kafe",
    group: "Sektörel Çözümler",
    summary:
      "QR menüden mutfak ekranına, sipariş yönetiminden masa takibine kadar restoranınızı hızlandıran otomasyon çözümleri.",
    intro:
      "Restoran ve kafelerin servis hızını artıran, hata payını azaltan ve ciroyu görünür kılan sistemler geliştiriyoruz. Salondan mutfağa, kasadan online siparişe kadar tüm operasyonu tek platformda birleştiriyoruz.",
    services: [
      {
        name: "Restoran Otomasyonu",
        description:
          "Sipariş, kasa, stok ve raporlamayı tek sistemde birleştiren; adisyon ve ödeme entegrasyonlu restoran yönetimi.",
      },
      {
        name: "QR Menü",
        description:
          "Masadan telefonla erişilen, anlık güncellenebilen, çok dilli ve sipariş verilebilir dijital menü çözümü.",
      },
      {
        name: "Sipariş Sistemi",
        description:
          "Salon, paket ve online kanallardan gelen siparişleri tek havuzda toplayan; kurye takibi destekli sipariş yönetimi.",
      },
      {
        name: "Masa Yönetimi",
        description:
          "Masa durumu, rezervasyon, adisyon birleştirme-ayırma ve garson performansını izleyen salon yönetim modülü.",
      },
      {
        name: "Mutfak Ekran Sistemi",
        description:
          "Siparişleri istasyon bazlı mutfak ekranlarına düşüren, hazırlama sürelerini ölçen dijital mutfak (KDS) çözümü.",
      },
    ],
  },
  {
    slug: "otel",
    title: "Otel",
    group: "Sektörel Çözümler",
    summary:
      "Rezervasyondan check-out'a, kanal yönetiminden misafir deneyimine kadar otelinizi tek merkezden yöneten sistemler.",
    intro:
      "Konaklama tesislerinin doluluk ve gelir yönetimini optimize eden yazılımlar geliştiriyoruz. Online satış kanallarınızı senkronize eden, ön büro operasyonlarını hızlandıran ve misafir deneyimini kişiselleştiren bütünleşik otel teknolojileri sunuyoruz.",
    services: [
      {
        name: "Otel Yönetim Sistemi",
        description:
          "Ön büro, kat hizmetleri, faturalama ve raporlamayı kapsayan; KBS entegrasyonlu otel yönetim (PMS) çözümü.",
      },
      {
        name: "Rezervasyon Sistemi",
        description:
          "Web sitenizden komisyonsuz online rezervasyon alan; oda, fiyat ve müsaitlik yönetimli booking motoru.",
      },
      {
        name: "Kanal Yönetimi",
        description:
          "Booking.com, Expedia ve diğer OTA kanallarıyla fiyat ve müsaitlik senkronizasyonu yapan channel manager entegrasyonu.",
      },
      {
        name: "Misafir Yönetimi",
        description:
          "Misafir profilleri, konaklama geçmişi, tercih takibi ve sadakat programlarıyla kişiselleştirilmiş deneyim yönetimi.",
      },
    ],
  },
  {
    slug: "belediye-ve-kamu",
    title: "Belediye ve Kamu",
    group: "Sektörel Çözümler",
    summary:
      "Evrak, başvuru ve tahsilat süreçlerini dijitalleştiren, vatandaş odaklı kamu bilişim çözümleri.",
    intro:
      "Kamu kurumları ve belediyeler için vatandaş memnuniyetini artıran, şeffaf ve izlenebilir dijital hizmet altyapıları kuruyoruz. E-Devlet entegrasyonlarına uygun, KVKK gereksinimlerini karşılayan güvenli sistemler geliştiriyoruz.",
    services: [
      {
        name: "Evrak Yönetim Sistemi",
        description:
          "Gelen-giden evrak kaydı, havale, zimmet ve e-imzalı onay akışlarıyla EBYS standartlarında evrak yönetimi.",
      },
      {
        name: "Başvuru Yönetim Sistemi",
        description:
          "Vatandaş başvurularının online alınması, birimlere yönlendirilmesi ve sonuç bildirimini yöneten takip sistemi.",
      },
      {
        name: "Vatandaş Portalı",
        description:
          "Borç sorgulama, online ödeme, başvuru ve talep takibi gibi hizmetleri tek noktadan sunan vatandaş platformu.",
      },
      {
        name: "Tahsilat Sistemi",
        description:
          "Vergi, harç ve ücretlerin online ve gişe tahsilatını yöneten; banka ve sanal POS entegrasyonlu tahsilat altyapısı.",
      },
    ],
  },
  {
    slug: "is-sagligi-ve-guvenligi",
    title: "İş Sağlığı ve Güvenliği",
    group: "Sektörel Çözümler",
    summary:
      "Risk analizi, kaza takibi ve denetim yönetimiyle İSG süreçlerinizi mevzuata uyumlu şekilde dijitalleştiren çözümler.",
    intro:
      "6331 sayılı İSG mevzuatının gerektirdiği tüm kayıt ve takip süreçlerini dijitalleştiriyoruz. Sahadan mobil cihazlarla veri toplayan, riskleri önceden görünür kılan ve denetimlere her an hazır olmanızı sağlayan sistemler geliştiriyoruz.",
    services: [
      {
        name: "İş Güvenliği Yazılımı",
        description:
          "İSG eğitimleri, sağlık muayeneleri, KKD zimmetleri ve yasal süre takiplerini tek platformda yöneten sistem.",
      },
      {
        name: "Risk Analiz Sistemi",
        description:
          "Tehlike tanımlama, risk puanlama ve aksiyon takibini metodoloji destekli (Fine-Kinney, 5x5) yöneten analiz aracı.",
      },
      {
        name: "Kaza Takip Sistemi",
        description:
          "İş kazası ve ramak kala olaylarının kaydı, kök neden analizi ve düzeltici faaliyet takibini yapan sistem.",
      },
      {
        name: "Denetim Yönetimi",
        description:
          "Saha denetimleri için mobil kontrol listeleri, bulgu-aksiyon takibi ve denetim performans raporları sunan çözüm.",
      },
    ],
  },
  {
    slug: "gayrimenkul",
    title: "Gayrimenkul",
    group: "Sektörel Çözümler",
    summary:
      "Emlak portföyünden site aidatına, kiracı yönetiminden tahsilata kadar gayrimenkul süreçlerini yöneten sistemler.",
    intro:
      "Emlak ofislerinden site yönetim şirketlerine, gayrimenkul yatırım firmalarından mülk sahiplerine kadar sektörün her oyuncusu için portföy, tahsilat ve kiracı süreçlerini dijitalleştiren çözümler geliştiriyoruz.",
    services: [
      {
        name: "Emlak Yönetim Sistemi",
        description:
          "Portföy yönetimi, müşteri eşleştirme, ilan entegrasyonları ve danışman performans takibi sunan emlak platformu.",
      },
      {
        name: "Site Yönetim Sistemi",
        description:
          "Blok-daire yapısı, sakin kayıtları, gider dağıtımı ve genel kurul süreçlerini yöneten site otomasyonu.",
      },
      {
        name: "Aidat Takip Sistemi",
        description:
          "Aidat tahakkuku, online ödeme, borç sorgulama ve gecikme faizi hesaplamalı tahsilat takip çözümü.",
      },
      {
        name: "Kiracı Yönetimi",
        description:
          "Kira sözleşmeleri, artış dönemleri, ödeme takibi ve tahliye süreçlerini izleyen mülk yönetim sistemi.",
      },
    ],
  },
  {
    slug: "tarim",
    title: "Tarım",
    group: "Sektörel Çözümler",
    summary:
      "Akıllı tarım, sera, hayvancılık ve tarla yönetimiyle tarımsal üretimi veriyle yöneten teknoloji çözümleri.",
    intro:
      "Tarımsal üretimi sensör verisi, uydu görüntüsü ve saha kayıtlarıyla besleyen; verimi artırıp maliyeti düşüren akıllı tarım sistemleri geliştiriyoruz. Seradan ahıra, tarladan pazara üretimin her aşamasını dijitalleştiriyoruz.",
    services: [
      {
        name: "Akıllı Tarım Yazılımı",
        description:
          "Sensör ve istasyon verileriyle sulama, gübreleme ve ilaçlama kararlarını destekleyen hassas tarım platformu.",
      },
      {
        name: "Sera Yönetimi",
        description:
          "İklim kontrolü, sulama otomasyonu ve hasat takibiyle sera üretimini optimize eden yönetim sistemi.",
      },
      {
        name: "Hayvancılık Yönetimi",
        description:
          "Küpe bazlı hayvan kaydı, süt verimi, aşı-tedavi ve yem rasyonu takibi yapan işletme yönetim çözümü.",
      },
      {
        name: "Tarla Takip Sistemi",
        description:
          "Parsel bazlı ekim planı, maliyet ve hasat kaydı; uydu destekli bitki gelişim izleme sunan takip platformu.",
      },
    ],
  },
  {
    slug: "mobil-uygulamalar",
    title: "Mobil Uygulamalar",
    group: "Teknoloji ve Platform",
    summary:
      "iOS, Android ve hibrit teknolojilerle kurumsal ihtiyaçlarınıza özel, performanslı mobil uygulamalar.",
    intro:
      "Native ve cross-platform teknolojilerde uzman ekibimizle, App Store ve Google Play'de yayınlanan tüketici uygulamalarından saha ekiplerinizin kullandığı kurumsal iç uygulamalara kadar her ölçekte mobil çözüm geliştiriyoruz.",
    services: [
      {
        name: "iOS Uygulamaları",
        description:
          "Swift ile geliştirilen, Apple tasarım standartlarına uygun, App Store yayın süreci dahil native iOS uygulamaları.",
      },
      {
        name: "Android Uygulamaları",
        description:
          "Kotlin ile geliştirilen, geniş cihaz yelpazesinde test edilmiş, Google Play yayın destekli native Android uygulamaları.",
      },
      {
        name: "Hibrit Mobil Uygulamalar",
        description:
          "Flutter ve React Native ile tek kod tabanından iOS ve Android'e; hızlı geliştirme, düşük maliyet avantajıyla.",
      },
      {
        name: "Kurumsal Mobil Çözümler",
        description:
          "Saha satış, servis, depo ve onay süreçleri için kurum içi dağıtımlı (MDM uyumlu) mobil uygulamalar.",
      },
    ],
  },
  {
    slug: "web-yazilimlari",
    title: "Web Yazılımları",
    group: "Teknoloji ve Platform",
    summary:
      "Kurumsal sitelerden SaaS platformlarına, yönetim panellerinden portallara kadar modern web çözümleri.",
    intro:
      "Modern web teknolojileriyle (React, Next.js, .NET, Node.js) hızlı, güvenli ve ölçeklenebilir web uygulamaları geliştiriyoruz. SEO uyumlu kurumsal sitelerden binlerce kullanıcılı SaaS platformlarına kadar web'in her ölçeğinde deneyimliyiz.",
    services: [
      {
        name: "Kurumsal Web Siteleri",
        description:
          "Markanızı yansıtan, SEO uyumlu, hızlı ve yönetilebilir kurumsal web siteleri; çok dilli yapı desteğiyle.",
      },
      {
        name: "Yönetim Panelleri",
        description:
          "İş verilerinizi yönettiğiniz, rol bazlı yetkilendirmeli, raporlama ve dashboard destekli admin panelleri.",
      },
      {
        name: "Web Portalları",
        description:
          "Müşteri, bayi, tedarikçi ve çalışan portalları; self-servis işlemler ve entegre veri akışlarıyla.",
      },
      {
        name: "SaaS Platformları",
        description:
          "Abonelik modelli, ölçeklenebilir bulut yazılım ürünleri; ödeme, faturalama ve kullanım ölçümleme altyapısıyla.",
      },
      {
        name: "Çok Kiracılı (Multi-Tenant) Sistemler",
        description:
          "Tek altyapıda yüzlerce firmaya izole hizmet veren, kiracı bazlı özelleştirme destekli multi-tenant mimariler.",
      },
      {
        name: "Admin Panelleri",
        description:
          "Mevcut sistem ve uygulamalarınız için içerik, kullanıcı ve operasyon yönetimi sağlayan özel admin arayüzleri.",
      },
    ],
  },
  {
    slug: "masaustu-yazilimlari",
    title: "Masaüstü Yazılımları",
    group: "Teknoloji ve Platform",
    summary:
      "Windows, macOS ve Linux için performans odaklı masaüstü uygulamaları ve endüstriyel yazılımlar.",
    intro:
      "Donanım entegrasyonu, offline çalışma veya yüksek performans gerektiren senaryolar için masaüstü uygulamaları geliştiriyoruz. Üretim sahasındaki endüstriyel terminallerden ofisteki uzman araçlarına kadar her platformda çözüm sunuyoruz.",
    services: [
      {
        name: "Windows Uygulamaları",
        description:
          ".NET tabanlı, donanım ve yazıcı entegrasyonlu, kurumsal ağlarda merkezi dağıtılabilen Windows uygulamaları.",
      },
      {
        name: "macOS Uygulamaları",
        description:
          "Apple ekosistemiyle uyumlu, native performanslı ve modern arayüzlü macOS masaüstü uygulamaları.",
      },
      {
        name: "Linux Uygulamaları",
        description:
          "Sunucu ve istemci tarafında çalışan, açık kaynak ekosistemiyle uyumlu Linux uygulamaları.",
      },
      {
        name: "Endüstriyel Masaüstü Yazılımları",
        description:
          "PLC, terazi, sensör ve endüstriyel cihaz haberleşmeli; 7/24 kesintisiz çalışan saha ve kiosk yazılımları.",
      },
    ],
  },
  {
    slug: "yapay-zeka",
    title: "Yapay Zeka",
    group: "Teknoloji ve Platform",
    summary:
      "Chatbot'tan doküman analizine, OCR'dan tahminlemeye kadar iş süreçlerinize değer katan yapay zeka çözümleri.",
    intro:
      "Yapay zekayı deneysel projelerden çıkarıp gerçek iş değeri üreten sistemlere dönüştürüyoruz. Kurumsal verilerinizle çalışan asistanlardan üretim tahminleme modellerine kadar, ölçülebilir fayda sağlayan AI çözümleri geliştiriyoruz.",
    services: [
      {
        name: "AI Chatbot",
        description:
          "Web sitesi ve WhatsApp üzerinden 7/24 müşteri sorularını yanıtlayan, kurumsal bilgi tabanınızla eğitilmiş sohbet robotları.",
      },
      {
        name: "Kurumsal AI Asistanı",
        description:
          "Şirket dokümanlarınız ve verilerinizle çalışan; çalışanlarınızın sorularını güvenli şekilde yanıtlayan kurum içi AI asistanı.",
      },
      {
        name: "Doküman Analizi",
        description:
          "Sözleşme, fatura ve rapor gibi belgelerden otomatik veri çıkaran, özetleyen ve sınıflandıran analiz sistemleri.",
      },
      {
        name: "OCR Sistemleri",
        description:
          "Taranmış belge, fatura ve kimlik görüntülerinden yüksek doğrulukla metin ve alan bazlı veri çıkaran OCR çözümleri.",
      },
      {
        name: "Görüntü İşleme",
        description:
          "Üretim hattında görsel kalite kontrol, nesne sayma ve güvenlik amaçlı görüntü analizi yapan bilgisayarlı görü sistemleri.",
      },
      {
        name: "Tahminleme Sistemleri",
        description:
          "Satış, talep ve stok tahminleri üreten; geçmiş verinizden öğrenen makine öğrenmesi modelleri.",
      },
      {
        name: "AI Destekli Raporlama",
        description:
          "Doğal dilde soru sorarak rapor alan, anormallikleri otomatik tespit edip yorumlayan akıllı raporlama araçları.",
      },
    ],
  },
  {
    slug: "veri-ve-analitik",
    title: "Veri ve Analitik",
    group: "Teknoloji ve Platform",
    summary:
      "BI, dashboard ve veri ambarı çözümleriyle verinizi karar destek gücüne dönüştüren analitik platformlar.",
    intro:
      "Farklı sistemlere dağılmış verinizi tek doğruluk kaynağında birleştiriyor, yönetimin karar süreçlerini gerçek zamanlı verilerle besliyoruz. Veri ambarı mimarisinden self-servis raporlama araçlarına kadar uçtan uca analitik altyapılar kuruyoruz.",
    services: [
      {
        name: "Business Intelligence (BI)",
        description:
          "Power BI ve benzeri araçlarla ya da özel geliştirmeyle; tüm iş verilerinizi analiz edilebilir hale getiren BI çözümleri.",
      },
      {
        name: "Dashboard Sistemleri",
        description:
          "Kritik metriklerinizi (KPI) gerçek zamanlı gösteren; yönetim, üretim ve satış ekranları için özel dashboard'lar.",
      },
      {
        name: "Raporlama Yazılımları",
        description:
          "Zamanlanmış otomatik raporlar, dinamik filtreleme ve Excel/PDF çıktı destekli kurumsal raporlama araçları.",
      },
      {
        name: "Veri Ambarı",
        description:
          "Farklı kaynaklardan gelen veriyi temizleyip birleştiren, analitik sorgulara optimize edilmiş veri ambarı mimarileri.",
      },
      {
        name: "Büyük Veri Çözümleri",
        description:
          "Yüksek hacimli ve akış halindeki veriyi işleyen, ölçeklenebilir depolama ve işleme altyapıları.",
      },
    ],
  },
  {
    slug: "iot",
    title: "IoT",
    group: "Teknoloji ve Platform",
    summary:
      "Sensörden buluta uzanan IoT platformları, uzaktan cihaz yönetimi ve akıllı fabrika çözümleri.",
    intro:
      "Sahadaki cihaz ve sensörlerden veri toplayan, bulutta işleyen ve aksiyona dönüştüren uçtan uca IoT sistemleri kuruyoruz. Endüstriyel protokollerden (Modbus, OPC-UA, MQTT) bulut platformlarına kadar tüm katmanlarda deneyimliyiz.",
    services: [
      {
        name: "IoT Platformları",
        description:
          "Binlerce cihazdan veri toplayan, kural motoru ve alarm mekanizmalı, görselleştirme destekli IoT yönetim platformları.",
      },
      {
        name: "Sensör Yönetimi",
        description:
          "Sıcaklık, nem, enerji ve titreşim gibi sensör verilerinin toplanması, kalibrasyonu ve eşik bazlı uyarı sistemi.",
      },
      {
        name: "Uzaktan Cihaz Yönetimi",
        description:
          "Sahadaki cihazların uzaktan izlenmesi, yapılandırılması ve güncellenmesi (OTA) için yönetim altyapısı.",
      },
      {
        name: "Akıllı Fabrika Çözümleri",
        description:
          "Makine verisini üretim sistemleriyle buluşturan, enerji ve verimlilik optimizasyonu sağlayan Endüstri 4.0 çözümleri.",
      },
    ],
  },
  {
    slug: "guvenlik",
    title: "Güvenlik",
    group: "Teknoloji ve Platform",
    summary:
      "Kimlik doğrulama, yetkilendirme, SSO ve log yönetimiyle sistemlerinizi güvence altına alan altyapılar.",
    intro:
      "Kurumsal uygulamalarınızın güvenlik katmanını standartlara uygun şekilde tasarlıyoruz. Modern kimlik protokolleri (OAuth2, OIDC, SAML), merkezi yetki yönetimi ve denetlenebilir log altyapılarıyla hem güvenliği hem de uyumluluğu sağlıyoruz.",
    services: [
      {
        name: "Kimlik Doğrulama Sistemleri",
        description:
          "Çok faktörlü doğrulama (MFA), biyometrik ve OTP destekli, modern protokollerle çalışan kimlik doğrulama altyapıları.",
      },
      {
        name: "Yetkilendirme Sistemleri",
        description:
          "Rol ve kural bazlı (RBAC/ABAC) erişim kontrolü; ekran, veri ve işlem seviyesinde ince taneli yetki yönetimi.",
      },
      {
        name: "Log Yönetimi",
        description:
          "Uygulama ve sistem loglarının merkezi toplanması, aranabilir hale getirilmesi ve saklama politikalarıyla yönetimi.",
      },
      {
        name: "Denetim Kayıtları",
        description:
          "Kim, ne zaman, neyi değiştirdi sorusunu yanıtlayan; KVKK ve denetim gereksinimlerine uygun audit trail altyapısı.",
      },
      {
        name: "SSO Entegrasyonları",
        description:
          "Active Directory, Azure AD ve Google Workspace ile tek oturum açma; tüm uygulamalarınıza tek kimlikle erişim.",
      },
    ],
  },
  {
    slug: "entegrasyonlar",
    title: "Entegrasyonlar",
    group: "Altyapı ve Entegrasyon",
    summary:
      "API mimarilerinden banka, kargo ve ödeme entegrasyonlarına kadar sistemlerinizi birbirine bağlayan çözümler.",
    intro:
      "Kurumunuzdaki ve dışarıdaki sistemleri güvenli, izlenebilir ve dayanıklı entegrasyonlarla birbirine bağlıyoruz. İyi tasarlanmış API'lar ve mikroservis mimarileriyle, yazılım ekosisteminizi büyümeye hazır hale getiriyoruz.",
    services: [
      {
        name: "REST API",
        description:
          "Standartlara uygun, versiyonlu, dokümante edilmiş ve güvenli REST API tasarımı ve geliştirmesi.",
      },
      {
        name: "GraphQL API",
        description:
          "İstemcinin ihtiyacı kadar veri çektiği, esnek sorgu yapılı, performans odaklı GraphQL API altyapıları.",
      },
      {
        name: "Mikroservis Mimarisi",
        description:
          "Bağımsız geliştirilebilen ve ölçeklenebilen servisler; mesajlaşma altyapıları ve servis keşfi ile birlikte.",
      },
      {
        name: "API Gateway",
        description:
          "Tüm API trafiğini tek noktadan yöneten; kimlik doğrulama, hız sınırlama ve izleme özellikli gateway kurulumları.",
      },
      {
        name: "Üçüncü Parti Entegrasyonları",
        description:
          "Kullandığınız herhangi bir dış servis veya yazılımla veri alışverişi sağlayan özel entegrasyon geliştirmeleri.",
      },
      {
        name: "Banka Entegrasyonları",
        description:
          "Hesap hareketi çekme, otomatik mutabakat ve toplu ödeme talimatları için banka API entegrasyonları.",
      },
      {
        name: "ERP Entegrasyonları",
        description:
          "SAP, Logo, Netsis, Mikro gibi ERP sistemleriyle çift yönlü ve gerçek zamanlı veri senkronizasyonu.",
      },
      {
        name: "Kargo Entegrasyonları",
        description:
          "Yurtiçi ve uluslararası kargo firmalarıyla gönderi oluşturma, takip ve iade süreç entegrasyonları.",
      },
      {
        name: "SMS Entegrasyonları",
        description:
          "Toplu ve tekil SMS gönderimi, OTP doğrulama ve iletim raporları için SMS sağlayıcı entegrasyonları.",
      },
      {
        name: "E-posta Entegrasyonları",
        description:
          "İşlemsel ve toplu e-posta gönderimi, şablon yönetimi ve iletim takibi sağlayan e-posta altyapıları.",
      },
      {
        name: "Ödeme Sistemi Entegrasyonları",
        description:
          "Sanal POS, iyzico, PayTR ve benzeri ödeme kuruluşlarıyla güvenli online tahsilat entegrasyonları.",
      },
    ],
  },
  {
    slug: "bulut-ve-devops",
    title: "Bulut ve DevOps",
    group: "Altyapı ve Entegrasyon",
    summary:
      "Cloud mimarisi, CI/CD, Docker/Kubernetes ve monitoring ile modern, kesintisiz yazılım altyapıları.",
    intro:
      "Uygulamalarınızın güvenilir, ölçeklenebilir ve sürdürülebilir şekilde çalışması için modern altyapılar kuruyoruz. Bulut mimarisinden otomatik dağıtım hatlarına, izleme sistemlerinden felaket kurtarma planlarına kadar operasyonel mükemmelliği hedefliyoruz.",
    services: [
      {
        name: "Cloud Mimarisi",
        description:
          "AWS, Azure ve yerli bulut sağlayıcılarında maliyet-performans dengeli, güvenli bulut mimarisi tasarımı ve kurulumu.",
      },
      {
        name: "CI/CD Kurulumu",
        description:
          "Kod değişikliklerinin otomatik test edilip dağıtıldığı; hızlı ve güvenli sürüm çıkarma hatları (pipeline) kurulumu.",
      },
      {
        name: "Docker",
        description:
          "Uygulamaların konteynerleştirilmesi; her ortamda aynı şekilde çalışan, taşınabilir dağıtım paketleri.",
      },
      {
        name: "Kubernetes",
        description:
          "Konteyner orkestrasyonu ile otomatik ölçekleme, kendini onaran servisler ve kesintisiz güncelleme altyapısı.",
      },
      {
        name: "Monitoring Sistemleri",
        description:
          "Uygulama ve sunucu sağlığını 7/24 izleyen; sorunları kullanıcıdan önce haber veren izleme ve alarm sistemleri.",
      },
      {
        name: "Loglama Altyapısı",
        description:
          "Dağıtık sistemlerin loglarını merkezi toplayan, hata ayıklamayı hızlandıran aranabilir log altyapıları.",
      },
      {
        name: "Yedekleme Çözümleri",
        description:
          "Otomatik ve doğrulanmış yedekleme, felaket kurtarma senaryoları ve veri kaybına karşı koruma stratejileri.",
      },
    ],
  },
  {
    slug: "size-ozel-yazilimlar",
    title: "Size Özel Yazılımlar",
    group: "Altyapı ve Entegrasyon",
    summary:
      "Sıfırdan geliştirme, dijital dönüşüm, modernizasyon ve danışmanlıkla tamamen size özel yazılım çözümleri.",
    intro:
      "Hazır yazılımların karşılayamadığı ihtiyaçlar için, iş süreçlerinizi birebir yansıtan özel yazılımlar geliştiriyoruz. Analiz ve mimari tasarımdan geliştirme ve devreye almaya, eski sistemlerin dönüşümünden uzun vadeli bakıma kadar yazılım yaşam döngüsünün tamamında yanınızdayız.",
    services: [
      {
        name: "Kuruma Özel ERP",
        description:
          "İş yapış şeklinizi hazır paketlere uydurmak yerine, süreçlerinize birebir uyan modüler ERP geliştirmesi.",
      },
      {
        name: "Sektöre Özel Yazılımlar",
        description:
          "Sektörünüzün kendine has ihtiyaçlarını derinlemesine analiz edip çözen, alan bilgisi odaklı yazılımlar.",
      },
      {
        name: "Tamamen Sıfırdan Yazılım Geliştirme",
        description:
          "Fikir aşamasından canlıya alma sürecine; analiz, tasarım, geliştirme ve test dahil uçtan uca ürün geliştirme.",
      },
      {
        name: "Dijital Dönüşüm Projeleri",
        description:
          "Kâğıt ve Excel'le yürüyen süreçlerin analiz edilip önceliklendirilerek adım adım dijitalleştirilmesi.",
      },
      {
        name: "Yazılım Modernizasyonu",
        description:
          "Yavaşlayan ve bakımı zorlaşan uygulamaların modern teknolojilere, kesinti yaşatmadan kademeli taşınması.",
      },
      {
        name: "Legacy Sistem Dönüşümü",
        description:
          "Eski teknolojilerle yazılmış kritik sistemlerin veri bütünlüğü korunarak yeni nesil mimarilere dönüştürülmesi.",
      },
      {
        name: "Danışmanlık ve Mimari Tasarımı",
        description:
          "Teknoloji seçimi, sistem mimarisi, ekip yapılanması ve yazılım süreçleri konusunda kurumsal danışmanlık.",
      },
    ],
  },
];

export function getCategory(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoriesByGroup(group: ServiceGroup): ServiceCategory[] {
  return categories.filter((c) => c.group === group);
}

export const totalServiceCount = categories.reduce(
  (sum, c) => sum + c.services.length,
  0
);
