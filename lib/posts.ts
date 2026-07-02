export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  tag: string;
  excerpt: string;
  blocks: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "erp-secerken-yapilan-5-kritik-hata",
    title: "ERP Seçerken Yapılan 5 Kritik Hata",
    date: "2026-06-18",
    readingTime: "6 dk",
    tag: "ERP",
    excerpt:
      "Yanlış ERP seçimi yıllarca taşınan bir maliyete dönüşür. Şirketlerin ERP projelerinde en sık düştüğü beş tuzağı ve bunlardan kaçınmanın yollarını derledik.",
    blocks: [
      {
        type: "p",
        text: "ERP projeleri, bir şirketin alabileceği en stratejik teknoloji kararlarından biridir. Doğru kurgulandığında tüm departmanları aynı veri üzerinde buluşturur; yanlış kurgulandığında ise yıllarca sürüklenen, ekiplerin etrafından dolaştığı bir yük haline gelir. Sahada gördüğümüz en yaygın beş hatayı paylaşıyoruz.",
      },
      { type: "h2", text: "1. Süreçleri analiz etmeden yazılım seçmek" },
      {
        type: "p",
        text: "En sık karşılaştığımız hata, mevcut iş süreçleri netleştirilmeden ürün demolarına başlanması. Hangi sürecin nasıl işlediği, nerede tıkandığı ve neyin otomatikleşmesi gerektiği bilinmeden seçilen her sistem, kurumun değil yazılımın iş yapış şeklini dayatır. Seçimden önce mutlaka süreç envanteri çıkarılmalı.",
      },
      { type: "h2", text: "2. Özelleştirme ihtiyacını küçümsemek" },
      {
        type: "p",
        text: "\"Hazır paket alırız, uyum sağlarız\" yaklaşımı kâğıt üzerinde ekonomik görünür. Ancak şirketi rakiplerinden ayıran süreçler çoğu zaman standart paketlere sığmaz. Kritik süreçlerinizde ne kadar özelleştirme gerekeceğini seçim aşamasında netleştirmek, projenin toplam maliyetini belirleyen ana faktördür.",
      },
      { type: "h2", text: "3. Veri göçünü sona bırakmak" },
      {
        type: "p",
        text: "Eski sistemlerdeki cari, stok ve geçmiş hareket verilerinin temizlenip taşınması, çoğu projede en çok zaman alan iştir. Veri kalitesi düşükse yeni sistem de yanlış veriyle açılır ve güven daha ilk günden sarsılır. Veri göçü, projenin başında planlanması gereken bir iş paketidir.",
      },
      { type: "h2", text: "4. Sahayı projeye dahil etmemek" },
      {
        type: "p",
        text: "ERP kararları yönetim katında alınır ama sistemi her gün kullanacak olan depo personeli, üretim operatörü ve muhasebe ekibidir. Sahanın görüşü alınmadan tasarlanan ekranlar, canlıya geçişte direnç ve geçici çözümlerle (yine Excel) sonuçlanır.",
      },
      { type: "h2", text: "5. Canlıya geçişi tek seferde planlamak" },
      {
        type: "p",
        text: "Tüm modüllerin aynı gün devreye alındığı \"big bang\" geçişler yüksek risklidir. Modül modül, lokasyon lokasyon ilerleyen kademeli geçişler hem riski dağıtır hem de ekiplerin sisteme alışmasına zaman tanır.",
      },
      {
        type: "p",
        text: "Alpina Systems olarak ERP projelerine yazılımdan önce analizle başlıyoruz. Kuruma özel ERP geliştirme ve mevcut sistem dönüşümü konularında deneyimimizi konuşmak için bize ulaşabilirsiniz.",
      },
    ],
  },
  {
    slug: "uretimde-dijital-donusum-nereden-baslamali",
    title: "Üretimde Dijital Dönüşüm: Nereden Başlamalı?",
    date: "2026-05-27",
    readingTime: "7 dk",
    tag: "Üretim",
    excerpt:
      "MES mi, OEE mi, yoksa önce barkodlu stok mu? Üretim işletmeleri için dijital dönüşümün doğru sırasını ve hızlı kazanım noktalarını ele alıyoruz.",
    blocks: [
      {
        type: "p",
        text: "Üretim işletmelerinde dijital dönüşüm genellikle iki uçta başlar: ya çok iddialı bir Endüstri 4.0 vizyonuyla ya da tek bir acil sorunun (örneğin stok tutmama) çözümüyle. İkisi de meşru, ama sürdürülebilir dönüşüm doğru sıralamayla gelir.",
      },
      { type: "h2", text: "Önce veri: Ne üretiyorsunuz, ne kaybediyorsunuz?" },
      {
        type: "p",
        text: "Dönüşümün ilk adımı yeni makine ya da robot değil, mevcut üretimin ölçülmesidir. Hangi hat ne kadar üretiyor, duruşlar nerede, fire oranı ne? Bu sorulara güvenilir yanıt veremiyorsanız, ilk yatırım basit bir üretim takip sistemi olmalı. Kâğıt formların dijital terminallere taşınması bile tek başına ciddi görünürlük sağlar.",
      },
      { type: "h2", text: "İkinci adım: Stok ve izlenebilirlik" },
      {
        type: "p",
        text: "Üretim verisi akmaya başladıktan sonra sıra hammadde ve mamul izlenebilirliğine gelir. Barkodlu stok takibi, lot bazlı izleme ve depo adresleme; hem müşteri denetimlerinde hem de maliyet hesabında oyunun kurallarını değiştirir.",
      },
      { type: "h2", text: "Üçüncü adım: OEE ve makine verisi" },
      {
        type: "p",
        text: "Temel veri altyapısı oturduktan sonra makinelerden otomatik veri toplamaya geçilebilir. PLC ve sensör entegrasyonlarıyla beslenen OEE takibi, iyileştirme çalışmalarını tahminden ölçüme taşır. Deneyimimiz, OEE'yi ilk kez gerçek veriyle gören işletmelerin tahminlerinden 15-20 puan aşağıda çıktığı yönünde — ve bu, iyileştirme için muazzam bir alan demek.",
      },
      { type: "h2", text: "Dördüncü adım: Planlama ve entegrasyon" },
      {
        type: "p",
        text: "Saha verisi güvenilir hale geldiğinde MRP ve ileri planlama anlamlı sonuç üretmeye başlar. Üretim, depo ve satın alma sistemlerinin ERP ile çift yönlü konuşması bu aşamanın işidir. Sıralamayı atlayıp doğrudan planlamaya yatırım yapan işletmeler, çöp veriyle plan yapmanın hayal kırıklığını yaşar.",
      },
      {
        type: "p",
        text: "Özet: önce ölç, sonra izle, sonra optimize et. Her aşama kendi yatırımını 12-18 ay içinde geri ödeyebilecek hızlı kazanımlar içerir. Fabrikanız için doğru yol haritasını birlikte çıkarmak isterseniz üretim ekibimizle tanışın.",
      },
    ],
  },
  {
    slug: "e-fatura-e-arsiv-gecis-rehberi",
    title: "E-Fatura ve E-Arşiv'e Geçiş: Pratik Rehber",
    date: "2026-05-06",
    readingTime: "5 dk",
    tag: "E-Dönüşüm",
    excerpt:
      "Zorunluluk kapsamları genişledikçe e-dönüşüm her ölçekten şirketin gündeminde. E-fatura ve e-arşiv geçişinde dikkat edilmesi gereken adımları özetledik.",
    blocks: [
      {
        type: "p",
        text: "E-fatura ve e-arşiv artık yalnızca büyük şirketlerin değil, ciro eşiklerinin düşmesiyle KOBİ'lerin de gündeminde. Geçiş teknik olarak karmaşık olmasa da, entegrasyonun iş süreçlerine doğru oturtulması projenin başarısını belirliyor.",
      },
      { type: "h2", text: "E-fatura ile e-arşiv arasındaki fark" },
      {
        type: "p",
        text: "E-fatura, sistemde kayıtlı mükellefler arasında GİB üzerinden iletilen faturadır; alıcı da e-fatura mükellefi olmalıdır. E-arşiv fatura ise e-fatura mükellefi olmayan firmalara ve nihai tüketicilere kesilir, elektronik ortamda oluşturulup e-posta ile iletilebilir. Çoğu şirketin ikisini birlikte kullanması gerekir.",
      },
      { type: "h2", text: "Entegratör mü, GİB portalı mı?" },
      {
        type: "p",
        text: "Düşük fatura hacminde GİB portalı yeterli olabilir; ancak günde onlarca fatura kesen bir işletme için portal üzerinden manuel işlem sürdürülebilir değildir. Özel entegratör üzerinden, mevcut satış ve muhasebe yazılımınızla entegre çalışan bir yapı hem hızlı hem hatasızdır.",
      },
      { type: "h2", text: "Geçişte kontrol listesi" },
      {
        type: "list",
        items: [
          "Mali mühür başvurusunun erken yapılması (temin süresi değişkendir)",
          "Fatura senaryolarının (temel/ticari) müşteri bazlı belirlenmesi",
          "Mevcut yazılımla entegratör arasındaki alan eşleştirmelerinin test edilmesi",
          "İptal, iade ve yanıt akışlarının süreçlere tanımlanması",
          "Yasal saklama (10 yıl) için arşiv stratejisinin netleştirilmesi",
        ],
      },
      {
        type: "p",
        text: "Alpina Systems olarak satış, ön muhasebe ve ERP sistemlerinizi entegratörlerle uçtan uca bağlıyor; e-fatura, e-arşiv ve e-irsaliye süreçlerinizi mevcut iş akışınızı bozmadan devreye alıyoruz.",
      },
    ],
  },
  {
    slug: "kurumsal-yapay-zeka-gercekci-baslangic",
    title: "Kurumsal Yapay Zeka: Gerçekçi Bir Başlangıç Rehberi",
    date: "2026-04-15",
    readingTime: "8 dk",
    tag: "Yapay Zeka",
    excerpt:
      "Yapay zekaya 'bir yerden başlamak' isteyen şirketler için hype'tan uzak, yatırım getirisi kanıtlanmış kullanım senaryolarını değerlendiriyoruz.",
    blocks: [
      {
        type: "p",
        text: "Yapay zeka gündemi hiç olmadığı kadar yoğun; ancak kurumsal dünyada başarılı olan projeler, en gösterişli olanlar değil, en net tanımlanmış problemi çözenler. Şirketinizde AI yatırımının karşılığını hızla göreceğiniz dört alanı deneyimlerimizle paylaşıyoruz.",
      },
      { type: "h2", text: "1. Doküman yoğun süreçler" },
      {
        type: "p",
        text: "Fatura, sözleşme, sipariş formu ve teknik doküman işleyen her departman, AI destekli veri çıkarma ve özetlemeden ölçülebilir fayda sağlar. Günde yüzlerce belgeyi elle sisteme giren bir ekip için OCR ve akıllı belge analizi, çoğu zaman ilk ve en kârlı AI yatırımıdır.",
      },
      { type: "h2", text: "2. Kurumsal bilgi erişimi" },
      {
        type: "p",
        text: "Prosedürler, yönetmelikler ve teknik bilgi kurum içinde dağınıksa, çalışanların doğru bilgiye ulaşma maliyeti görünmez ama büyüktür. Şirket dokümanlarıyla eğitilmiş, yanıtlarını kaynak göstererek veren bir kurumsal asistan, bu maliyeti dramatik biçimde düşürür. Kritik nokta: asistanın yetki bazlı erişime saygı duyması ve halüsinasyona karşı kaynak atfıyla denetlenebilir olması.",
      },
      { type: "h2", text: "3. Müşteri iletişiminde ilk hat" },
      {
        type: "p",
        text: "Sık sorulan soruların, sipariş durumu ve randevu gibi rutin taleplerin AI chatbot'a devredilmesi, müşteri temsilcilerini gerçekten insan gerektiren işlere odaklar. Doğru kurgu, botun bilmediği yerde insana devretmesidir — müşteriyi botla boğuşturmak değil.",
      },
      { type: "h2", text: "4. Tahminleme" },
      {
        type: "p",
        text: "Satış tahmini, stok optimizasyonu ve bakım öngörüsü gibi alanlarda makine öğrenmesi modelleri, yeterli geçmiş veri varsa klasik yöntemlerden belirgin şekilde iyi sonuç verir. Buradaki ön koşul veri disiplinidir: temiz ve düzenli veri olmadan model kurmak, temelsiz bina yapmaya benzer.",
      },
      { type: "h2", text: "Nasıl başlamalı?" },
      {
        type: "p",
        text: "Önerimiz tek ve dar kapsamlı bir pilotla başlamak: bir departman, bir süreç, ölçülebilir bir hedef. 8-12 haftalık bir pilot, hem teknik fizibiliteyi hem organizasyonel uyumu test eder. Pilot başarılıysa yaygınlaştırma yatırımı kendini kanıtlamış bir zemine oturur.",
      },
    ],
  },
  {
    slug: "hazir-yazilim-mi-ozel-yazilim-mi",
    title: "Hazır Yazılım mı, Özel Yazılım mı? Doğru Karar Çerçevesi",
    date: "2026-03-20",
    readingTime: "6 dk",
    tag: "Strateji",
    excerpt:
      "Her şirketin er ya da geç sorduğu soru: paket mi alalım, kendimize mi yaptıralım? Kararı netleştiren pratik bir değerlendirme çerçevesi sunuyoruz.",
    blocks: [
      {
        type: "p",
        text: "Yazılım firması olmamıza rağmen ilk cevabımız şaşırtıcı gelebilir: her ihtiyaç için özel yazılım doğru cevap değildir. Muhasebe, e-posta ve ofis araçları gibi standartlaşmış alanlarda hazır ürünler neredeyse her zaman daha mantıklıdır. Peki özel yazılım ne zaman doğru karardır?",
      },
      { type: "h2", text: "Özel yazılımın haklı olduğu durumlar" },
      {
        type: "list",
        items: [
          "Süreç, rekabet avantajınızın kaynağıysa: sizi farklı kılan iş yapış şeklini pakete uydurarak törpülemek stratejik kayıptır.",
          "Hazır ürünler ihtiyacın %60'ından azını karşılıyorsa: kalan %40 için ödenecek özelleştirme ve geçici çözüm maliyeti, özel geliştirmeyi geçer.",
          "Birden fazla sistemin kesişiminde çalışıyorsanız: ERP, saha, e-ticaret ve lojistiği birleştiren akışlar çoğu zaman özel entegrasyon katmanı gerektirir.",
          "Lisans maliyeti kullanıcı sayısıyla katlanıyorsa: yüzlerce kullanıcıda yıllık lisans, birkaç yılda özel geliştirme bütçesini aşabilir.",
        ],
      },
      { type: "h2", text: "Hazır yazılımın haklı olduğu durumlar" },
      {
        type: "list",
        items: [
          "Süreç sektörde standartsa (bordro mevzuatı, ön muhasebe) tekerleği yeniden icat etmeyin.",
          "Hızlı başlamak kritikse: hazır ürün haftalar içinde açılır, özel geliştirme aylar ister.",
          "İç sahiplik yoksa: özel yazılım, gereksinimleri sahiplenecek bir iş birimi olmadan başarıya ulaşamaz.",
        ],
      },
      { type: "h2", text: "Hibrit yaklaşım: çoğu şirketin gerçek cevabı" },
      {
        type: "p",
        text: "Pratikte en sağlıklı mimari genellikle hibrittir: standart alanlarda hazır ürünler, rekabetçi süreçlerde özel geliştirme ve ikisini birbirine bağlayan sağlam bir entegrasyon katmanı. Bu yaklaşım hem maliyeti hem riski dengeler.",
      },
      {
        type: "p",
        text: "Hangi sürecin pakete, hangisinin özel geliştirmeye layık olduğunu netleştirmek için tarafsız bir analiz oturumu yapıyoruz — sonucunda özel yazılım çıkmasa bile.",
      },
    ],
  },
  {
    slug: "multi-tenant-saas-mimarisi-neden-onemli",
    title: "SaaS Ürününüzde Multi-Tenant Mimari Neden Kritik?",
    date: "2026-02-25",
    readingTime: "7 dk",
    tag: "Mimari",
    excerpt:
      "SaaS ürünü geliştiren ekipler için en kritik mimari karar: kiracı izolasyonu. Yanlış kurgulanan multi-tenancy'nin bedeli ve doğru yaklaşımlar.",
    blocks: [
      {
        type: "p",
        text: "Bir SaaS ürününün ilk müşterisiyle yüzüncü müşterisi arasındaki fark, çoğu zaman kodun kalitesi değil mimarinin doğruluğudur. Ve SaaS mimarisinin kalbinde tek bir karar yatar: kiracılar (tenant) birbirinden nasıl izole edilecek?",
      },
      { type: "h2", text: "Üç temel yaklaşım" },
      {
        type: "p",
        text: "Kiracı başına ayrı veritabanı en güçlü izolasyonu sağlar; yedekleme ve taşıma kolaydır ancak yüzlerce kiracıda operasyon yükü büyür. Paylaşımlı veritabanında ayrı şemalar orta yoldur. Paylaşımlı şemada satır bazlı izolasyon (tenant_id) ise en ekonomik ve en yaygın modeldir — ama en disiplinli geliştirme pratiğini gerektirir; tek bir eksik filtre, veri sızıntısı demektir.",
      },
      { type: "h2", text: "Doğru seçim neye bağlı?" },
      {
        type: "list",
        items: [
          "Hedef segment: Kurumsal müşteriler sözleşmelerde veri izolasyonu şartı koyabilir; KOBİ SaaS'ında satır bazlı model genellikle yeterlidir.",
          "Özelleştirme ihtiyacı: Kiracı bazlı alan ve akış özelleştirmesi arttıkça şema/veritabanı ayrımı avantaj kazanır.",
          "Uyumluluk: KVKK ve sektörel regülasyonlar veri konumu ve izolasyon seviyesini etkileyebilir.",
          "Operasyon kapasitesi: Ayrı veritabanı modeli güçlü bir DevOps otomasyonu olmadan sürdürülemez.",
        ],
      },
      { type: "h2", text: "Sonradan değiştirmenin bedeli" },
      {
        type: "p",
        text: "Tenancy modeli, sonradan değiştirilmesi en pahalı mimari karardır; canlı sistemde model değişimi aylar süren riskli bir göç projesidir. Bu yüzden ilk müşteriden önce, hedeflenen ölçek ve segment netleştirilerek karar verilmelidir. İyi haber: doğru soyutlamayla kurgulanmış bir kod tabanı, ileride hibrit modellere (büyük müşteriye ayrı veritabanı, küçüklere paylaşımlı) geçişi mümkün kılar.",
      },
      {
        type: "p",
        text: "Alpina Systems olarak SaaS ürünleri ve çok kiracılı platformlar geliştiriyoruz; mevcut tek müşterili ürünlerin multi-tenant mimariye dönüşümünde de deneyim sahibiyiz.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date)
);
