/**
 * ============================================================================
 * CONTENT & DATA — Cihan Özhan · Agentic AI Uzmanlık Programı
 * ============================================================================
 *
 * DATA VERIFICATION NOTE (read before launch):
 * Real facts below were sourced from https://www.cihanozhan.com and his public
 * profiles (Udemy, LinkedIn, YouTube, GitHub, Medium, SlideShare).
 *
 * Numbers marked `verify: true` are POSITIONING PLACEHOLDERS that MUST be
 * replaced with verified, dated figures before going to production. The page
 * surfaces a single "son güncelleme" date (LAST_UPDATED) so nothing silently
 * ages. Audience size (all platforms) and direct course-student count are
 * deliberately labelled differently so the two "öğrenci" figures never conflict.
 *
 * Photos/logos/testimonials are placeholders pending usage rights & consent:
 *  - Instructor & testimonial photos: replace with real, permissioned images.
 *  - Organization logos (esp. public-sector e.g. Cumhurbaşkanlığı): confirm
 *    usage rights before shipping.
 *  - Testimonials: keep written consent on file for name/photo/quote.
 * ============================================================================
 */

export const LAST_UPDATED = "Haziran 2026";

/** Single source of truth for the application target so every CTA behaves identically. */
export const APPLY_ANCHOR = "#basvuru";
export const CURRICULUM_ANCHOR = "#mufredat";

export const COURSE = {
  title: "Agentic AI Uzmanlık Programı",
  // Headline is intentionally Turkish (primary audience is Türkiye-based).
  hours: "36+",
  modules: 8,
  format: "Online / Canlı + Kayıt erişimi (kendi hızınızda tekrar)",
  cohortStart: "15 Eylül 2026",
  applicationDeadline: "5 Eylül 2026",
  seatsTotal: 40,
  seatsLeft: 12, // verify: true — live seat count
  preRegistrations: 380, // verify: true — "son 30 günde X kişi ön kayıt"
};

export interface Metric {
  value: string;
  label: string;
  verify?: boolean;
}

export const METRICS: Metric[] = [
  { value: "300.000+", label: "Öğrenci", verify: true },
  { value: "7.000+", label: "Saat Üretilmiş İçerik", verify: true },
  { value: "250+", label: "Etkinlik, Seminer ve Konferans", verify: true },
  { value: "10+", label: "Udemy Best Seller Eğitim", verify: true },
  { value: "250+", label: "Kurumsal Eğitim / Proje / Danışmanlık", verify: true },
  { value: "20+", label: "Yıl Sektör Tecrübesi", verify: true },
  { value: "16+", label: "Yıl Eğitmenlik Tecrübesi", verify: true },
];

export interface WhyNowCard {
  stat: string;
  title: string;
  body: string;
  source: string;
  verify?: boolean;
}

export const WHY_NOW: WhyNowCard[] = [
  {
    stat: "%75",
    title: "AI artık rekabet avantajı değil, temel beceri",
    body: "Bilgi çalışanlarının büyük çoğunluğu işlerinde yapay zeka araçlarını kullanmaya başladı. Kullanmayanlar geride kalıyor.",
    source: "Kaynak placeholder — yayın öncesi güncel rapor ile değiştirin (ör. Microsoft Work Trend Index).",
    verify: true,
  },
  {
    stat: "%40",
    title: "İş süreçleri hızla otomatikleşiyor",
    body: "Mevcut iş görevlerinin önemli bir bölümü önümüzdeki yıllarda agentic AI sistemleriyle kısmen veya tamamen otomatize edilecek.",
    source: "Kaynak placeholder — yayın öncesi güncel rapor ile değiştirin (ör. WEF Future of Jobs).",
    verify: true,
  },
  {
    stat: "1M+",
    title: "Yeni kariyer fırsatları ortaya çıkıyor",
    body: "AI mühendisliği ve agent geliştirme rolleri en hızlı büyüyen pozisyonlar arasında. Talep, yetkin uzman arzının çok üzerinde.",
    source: "Kaynak placeholder — yayın öncesi güncel iş ilanı verisi ile değiştirin (ör. LinkedIn Jobs on the Rise).",
    verify: true,
  },
];

export interface Persona {
  title: string;
  body: string;
}

export const PERSONAS: Persona[] = [
  {
    title: "Profesyoneller",
    body: "Yapay zekayı günlük iş akışına entegre etmek, ekibini hızlandırmak ve kariyerini geleceğe taşımak isteyen uzmanlar.",
  },
  {
    title: "Girişimciler",
    body: "AI destekli ürün ve otonom iş süreçleri kurarak maliyet düşürmek ve ölçeklenmek isteyen kurucular.",
  },
  {
    title: "Yazılımcılar",
    body: "LLM tabanlı agent'lar, araç kullanımı (tool use) ve üretim seviyesinde AI sistemleri geliştirmek isteyen geliştiriciler.",
  },
];

export const NOT_FOR: string[] = [
  "Hazır şablonlarla tek tıkla zengin olmayı vadeden bir kestirme arayanlar.",
  "Uygulamalı proje yapmadan sadece teori dinlemek isteyenler.",
  "Temel bilgisayar kullanımına ve öğrenmeye zaman ayıramayacak olanlar.",
];

export interface Outcome {
  icon: string;
  title: string;
  body: string;
}

export const OUTCOMES: Outcome[] = [
  {
    icon: "Bot",
    title: "Otonom AI agent'ları tasarlayabilirsiniz",
    body: "Hedef belirleyen, planlayan ve araç kullanan agent mimarilerini sıfırdan kurabilirsiniz.",
  },
  {
    icon: "Workflow",
    title: "Çoklu-agent iş akışları kurabilirsiniz",
    body: "Birden fazla agent'ı koordine eden, görev bölen ve denetleyen sistemler oluşturabilirsiniz.",
  },
  {
    icon: "Plug",
    title: "Gerçek dünya araçlarına bağlayabilirsiniz",
    body: "API'ler, veritabanları ve dış servislerle entegre, iş yapan agent'lar geliştirebilirsiniz.",
  },
  {
    icon: "Database",
    title: "RAG ve hafıza sistemleri inşa edebilirsiniz",
    body: "Kendi verinizle çalışan, bağlam koruyan ve doğru yanıt veren bilgi sistemleri kurabilirsiniz.",
  },
  {
    icon: "ShieldCheck",
    title: "Güvenli ve güvenilir sistemler üretebilirsiniz",
    body: "AI güvenliği, değerlendirme (eval) ve hata yönetimiyle üretime hazır çözümler çıkarabilirsiniz.",
  },
  {
    icon: "Rocket",
    title: "Üretime alıp ölçekleyebilirsiniz",
    body: "Geliştirdiğiniz agent'ları deploy edip izleyebilir, maliyet ve performansını yönetebilirsiniz.",
  },
];

export interface Module {
  number: string;
  title: string;
  duration: string;
  outcomes: string[];
}

export const MODULES: Module[] = [
  {
    number: "01",
    title: "Agentic AI'a Giriş ve LLM Temelleri",
    duration: "~4 saat",
    outcomes: [
      "Agentic AI ile klasik LLM kullanımı arasındaki farkı kavrama",
      "Token, bağlam penceresi ve maliyet temelleri",
      "İlk prompt tabanlı asistanı oluşturma",
    ],
  },
  {
    number: "02",
    title: "Prompt Engineering ve Yapılandırılmış Çıktılar",
    duration: "~4 saat",
    outcomes: [
      "Güvenilir ve tekrarlanabilir prompt tasarımı",
      "JSON / şema tabanlı yapılandırılmış çıktı üretimi",
      "Few-shot ve reasoning teknikleri",
    ],
  },
  {
    number: "03",
    title: "Tool Use & Function Calling",
    duration: "~5 saat",
    outcomes: [
      "Agent'a araç tanımlama ve çağırma",
      "Harici API ve veritabanı entegrasyonu",
      "Hata yönetimi ve güvenli araç kullanımı",
    ],
  },
  {
    number: "04",
    title: "RAG ve Hafıza (Memory) Sistemleri",
    duration: "~5 saat",
    outcomes: [
      "Vektör veritabanları ve embedding mantığı",
      "Kendi verinizle Retrieval-Augmented Generation",
      "Kısa ve uzun dönem agent hafızası tasarımı",
    ],
  },
  {
    number: "05",
    title: "Agent Mimarileri ve Planlama",
    duration: "~5 saat",
    outcomes: [
      "ReAct, planner-executor ve döngü tabanlı mimariler",
      "Görev ayrıştırma (task decomposition)",
      "Karar verme ve öz-değerlendirme",
    ],
  },
  {
    number: "06",
    title: "Çoklu-Agent Sistemleri (Multi-Agent)",
    duration: "~5 saat",
    outcomes: [
      "Rol tabanlı agent ekipleri kurma",
      "Agent'lar arası iletişim ve koordinasyon",
      "Orkestrasyon ve denetim katmanları",
    ],
  },
  {
    number: "07",
    title: "Güvenlik, Değerlendirme (Eval) ve Güvenilirlik",
    duration: "~4 saat",
    outcomes: [
      "Prompt injection ve AI güvenlik riskleri",
      "Otomatik değerlendirme (eval) altyapısı kurma",
      "Trustworthy & Responsible AI ilkeleri",
    ],
  },
  {
    number: "08",
    title: "Üretime Alma (Deployment) ve Ölçekleme",
    duration: "~4 saat",
    outcomes: [
      "Agent'ları servis olarak deploy etme",
      "İzleme, loglama ve maliyet optimizasyonu",
      "Bitirme projesi: uçtan uca agentic sistem",
    ],
  },
];

export interface InstructorProject {
  org: string;
  title: string;
  outcome: string;
}

/** Real engagements drawn from cihanozhan.com — confirm logo/name usage before launch. */
export const INSTRUCTOR_PROJECTS: InstructorProject[] = [
  {
    org: "T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
    title: "Offensive AI sunumu — Dijital Genç Bilgi Yarışması (2023)",
    outcome: "Kamu düzeyinde yapay zeka güvenliği farkındalığı.",
  },
  {
    org: "Microsoft / BilgeAdam",
    title: "Microsoft Copilot & Azure AI Studio eğitimi (2024)",
    outcome: "Kurumsal ekiplere uygulamalı üretken AI adaptasyonu.",
  },
  {
    org: "AISecLab (Kurucu)",
    title: "AI Safety Summit & AISecLab eğitim programları",
    outcome: "Türkiye'de AI güvenliği topluluğu ve konferans serisi.",
  },
];

export interface TimelineItem {
  period: string;
  text: string;
}

export const INSTRUCTOR_TIMELINE: TimelineItem[] = [
  { period: "Kuruculuk", text: "Safebox, AISecLab ve Runbit kurucusu" },
  { period: "Uzmanlık", text: "Offensive AI Security, Araştırmacı & Geliştirici" },
  { period: "Eğitmenlik", text: "16+ yıl programlama, güvenlik ve yapay zeka eğitimleri" },
  { period: "Konum", text: "İstanbul · New York" },
];

/** Institutions where training / consulting was delivered — logo strip.
 *  `logo` is filled in once the client-provided logo files are uploaded as assets. */
export interface Institution {
  name: string;
  logo?: string;
}

export const INSTITUTIONS: Institution[] = [
  { name: "Cumhurbaşkanlığı" },
  { name: "Aselsan" },
  { name: "Siemens" },
  { name: "Yemeksepeti" },
  { name: "Turkcell" },
  { name: "N11" },
  { name: "TUSAŞ (TEI)" },
  { name: "İş Bankası" },
  { name: "Akbank" },
  { name: "Garanti Bankası" },
  { name: "Türk Telekom" },
];

export interface PresenceCard {
  platform: string;
  handle: string;
  followers: string;
  url: string;
  verify?: boolean;
}

export const PRESENCE: PresenceCard[] = [
  { platform: "Udemy", handle: "cihanozhan", followers: "Best Seller eğitmen", url: "https://udemy.com/user/cihanozhan", verify: true },
  { platform: "YouTube", handle: "@cihanozhan", followers: "50+ ücretsiz eğitim serisi", url: "https://www.youtube.com/cihanozhan", verify: true },
  { platform: "LinkedIn", handle: "in/cihanozhan", followers: "Geniş profesyonel ağ", url: "https://linkedin.com/in/cihanozhan", verify: true },
  { platform: "GitHub", handle: "cihanozhan", followers: "Açık kaynak projeler", url: "https://github.com/cihanozhan", verify: true },
  { platform: "Medium", handle: "@cihanozhan", followers: "Teknik makaleler", url: "https://medium.com/@cihanozhan", verify: true },
];

export interface FreeVideo {
  title: string;
  meta: string;
  url: string;
}

/** REAL published courses/series from cihanozhan.com — do not invent titles. */
export const FREE_VIDEOS: FreeVideo[] = [
  { title: "AI Red Teaming", meta: "2025 · YouTube", url: "https://www.youtube.com/watch?v=U4H2P73Uz_c" },
  { title: "Machine Learning as a Service (MLaaS)", meta: "2025 · Playlist", url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFwyKekACxgGMt50A3JrYm1x" },
  { title: "Applied Deep Learning (50+ Saat)", meta: "2022/23 · Playlist", url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxVptNDb76nTHk4SMkInDDw" },
  { title: "AI Security Engineer (Bootcamp · 15 Saat)", meta: "2023 · Playlist", url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxjMco-nxzOCffjwx1LKzpQ" },
  { title: "PyTorch Mimarisi ve Ekosistemi", meta: "2022 · Playlist", url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFz5M1hDKh-ZyrUYLXRuX_3J" },
  { title: "Computer Vision with OpenCV", meta: "2022 · YouTube", url: "https://www.youtube.com/watch?v=752a-huWGuA" },
];

export const YOUTUBE_CHANNEL = "https://www.youtube.com/@cihanozhan";

export interface TabItem {
  title: string;
  meta: string;
  url: string;
}

/** REAL talks / presentations / publications from cihanozhan.com. */
export const TALKS: TabItem[] = [
  { title: "Applied Offensive AI — Cyber Anatolian Communities", meta: "02.2025", url: "https://www.cihanozhan.com/" },
  { title: "Offensive AI — Boğaziçi Üniversitesi", meta: "05.2023", url: "https://cihanozhan.medium.com/event-offensive-ai-dd28384ddb02" },
  { title: "Offensive AI — Google Developer Student Clubs", meta: "2023", url: "https://www.youtube.com/watch?v=5QoIW4IFjnQ" },
  { title: "AI Safety — AI Safety Summit (AISecLab)", meta: "01.2024", url: "https://www.instagram.com/p/C2Ca2JDNqY7/" },
];

export const PRESENTATIONS: TabItem[] = [
  { title: "AI Security: ML, DL & Computer Vision Security", meta: "SlideShare · 2021", url: "https://www.slideshare.net/Cihanzhan/ai-security-machine-learning-deep-learning-and-computer-vision-security" },
  { title: "MLaaS: Scaling ML Models as Microservices", meta: "SlideShare · 2022", url: "https://www.slideshare.net/Cihanzhan/mlaas-presenting-scaling-machine-learning-models-as-microservicespptx" },
  { title: "Endüstriyel Yapay Zeka ve Otonom Sistemler", meta: "SlideShare · 2021", url: "https://www.slideshare.net/Cihanzhan/endstriyel-yapay-zeka-ve-otonom-sistemler" },
  { title: "Mobil Uygulama Güvenliği", meta: "SlideShare · 2022", url: "https://www.slideshare.net/Cihanzhan/mobil-uygulama-gvenlii-mobile-security" },
];

export const PUBLICATIONS: TabItem[] = [
  { title: "Kitap: İleri Seviye T-SQL Programlama (Kodlab)", meta: "2013", url: "https://www.kodlab.com/database/237-yazilimcilar-icin-ileri-seviye-t-sql-programlama-9786055201142.html" },
  { title: "Kitap: Go Programlama Dili (Taslak)", meta: "2018 · Medium", url: "https://cihanozhan.medium.com/go-programlama-dili-kitab%C4%B1-81eea6997997" },
  { title: "Makaleler — Medium", meta: "Sürekli", url: "https://medium.com/@cihanozhan" },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

/** PLACEHOLDER testimonials — replace with real, consented quotes + photos. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Katılımcı Adı",
    role: "Yazılım Mühendisi",
    quote: "Teorik bilgiyi gerçek projelere dökme şeklimi tamamen değiştirdi. İlk haftada çalışan bir agent çıkardım.",
  },
  {
    name: "Katılımcı Adı",
    role: "Ürün Yöneticisi",
    quote: "Cihan'ın anlatımı son derece net ve uygulamaya dönük. Ekibime AI süreçlerini ben kurdum.",
  },
  {
    name: "Katılımcı Adı",
    role: "Girişimci",
    quote: "Ürünümüze otonom bir AI katmanı ekledik ve operasyon maliyetimizi gözle görülür düşürdük.",
  },
  {
    name: "Katılımcı Adı",
    role: "Veri Bilimci",
    quote: "RAG ve multi-agent kısımları tek başına eğitimin ücretini fazlasıyla karşılıyor.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Eğitime katılmak için ön bilgi gerekiyor mu?",
    a: "Temel seviye Python programlama dili bilgisi gerekiyor.",
  },
  {
    q: "Eğitim formatı nedir?",
    a: "Online ve canlı gerçekleşir.",
  },
  {
    q: "Eğitim ücreti nedir, taksit seçenekleri var mı?",
    a: "Taksit imkânı mevcuttur. Standart eğitim ücreti 40.000 TL'dir; erken kayıt yaptıran ilk 30 öğrenci için ücret 35.000 TL olarak uygulanır.",
  },
  {
    q: "Eğitim günleri ve saatleri nedir?",
    a: "Eğitimler Salı, Perşembe ve Cumartesi günleri 20.00 - 23.00 saatleri arasında canlı olarak işlenir.",
  },
  {
    q: "Başvuru nasıl ilerliyor?",
    a: "“Başvuru Yap” ile formu doldurursunuz; ekibimiz sizinle iletişime geçerek uygunluk ve hedeflerinizi konuşur. Kontenjan sınırlıdır.",
  },
];
