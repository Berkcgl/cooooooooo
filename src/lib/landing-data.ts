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

import cumhurbaskanligiLogo from "@/assets/logos/cumhurbaskanligi.svg.asset.json";
import aselsanLogo from "@/assets/logos/aselsan.svg.asset.json";
import siemensLogo from "@/assets/logos/siemens.svg.asset.json";
import yemeksepetiLogo from "@/assets/logos/yemeksepeti.svg.asset.json";
import turkcellLogo from "@/assets/logos/turkcell.svg.asset.json";
import n11Logo from "@/assets/logos/n11.svg.asset.json";
import tusasLogo from "@/assets/logos/tusas.svg.asset.json";
import isbankasiLogo from "@/assets/logos/isbankasi.svg.asset.json";
import akbankLogo from "@/assets/logos/akbank.svg.asset.json";
import garantiLogo from "@/assets/logos/garanti.svg.asset.json";
import turkTelekomLogo from "@/assets/logos/turktelekom.svg.asset.json";

export const LAST_UPDATED = "Haziran 2026";

/** Single source of truth for the application target so every CTA behaves identically. */
export const APPLY_ANCHOR = "#basvuru";
export const CURRICULUM_ANCHOR = "#mufredat";

export const COURSE = {
  title: "Agentic AI Uzmanlık Programı",
  // Headline is intentionally Turkish (primary audience is Türkiye-based).
  hours: "36+",
  modules: 8,
  format: "Online / Canlı",
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
  verify?: boolean;
}

export const WHY_NOW: WhyNowCard[] = [
  {
    stat: "%75",
    title: "AI artık rekabet avantajı değil, temel beceri",
    body: "Bilgi çalışanlarının büyük çoğunluğu işlerinde yapay zeka araçlarını kullanmaya başladı. Kullanmayanlar geride kalıyor.",
    verify: true,
  },
  {
    stat: "%40",
    title: "İş süreçleri hızla otomatikleşiyor",
    body: "Mevcut iş görevlerinin önemli bir bölümü önümüzdeki yıllarda agentic AI sistemleriyle kısmen veya tamamen otomatize edilecek.",
    verify: true,
  },
  {
    stat: "1M+",
    title: "Yeni kariyer fırsatları ortaya çıkıyor",
    body: "AI mühendisliği ve agent geliştirme rolleri en hızlı büyüyen pozisyonlar arasında. Talep, yetkin uzman arzının çok üzerinde.",
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
  /** External site for the institution — makes the logo tile a link. */
  url?: string;
  /** Render on a dark tile (for logos that are white/transparent). */
  dark?: boolean;
}

export const INSTITUTIONS: Institution[] = [
  { name: "Cumhurbaşkanlığı", logo: cumhurbaskanligiLogo.url, url: "https://www.tccb.gov.tr/" },
  { name: "Aselsan", logo: aselsanLogo.url, url: "https://www.aselsan.com/tr" },
  { name: "Siemens", logo: siemensLogo.url, url: "https://www.siemens.com/tr-tr/" },
  { name: "Yemeksepeti", logo: yemeksepetiLogo.url, url: "https://www.yemeksepeti.com/" },
  { name: "Turkcell", logo: turkcellLogo.url, url: "https://www.turkcell.com.tr/" },
  { name: "N11", logo: n11Logo.url, url: "https://www.n11.com/" },
  { name: "TUSAŞ (TEI)", logo: tusasLogo.url, url: "https://www.tusas.com/" },
  { name: "İş Bankası", logo: isbankasiLogo.url, url: "https://www.isbank.com.tr/" },
  { name: "Akbank", logo: akbankLogo.url, url: "https://www.akbank.com/" },
  { name: "Garanti Bankası", logo: garantiLogo.url, url: "https://www.garantibbva.com.tr/" },
  { name: "Türk Telekom", logo: turkTelekomLogo.url, url: "https://www.turktelekom.com.tr/" },
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
  /** Numeric year used for grouping/sorting archive pages. */
  year?: number;
}

const UDEMY_PROFILE = "https://www.udemy.com/user/cihanozhan/";
const SLIDESHARE_PROFILE = "https://www.slideshare.net/Cihanzhan";
const KODLAB_TSQL =
  "https://www.kodlab.com/database/237-yazilimcilar-icin-ileri-seviye-t-sql-programlama-9786055201142.html";
const GO_BOOK_DRAFT =
  "https://cihanozhan.medium.com/go-programlama-dili-kitab%C4%B1-81eea6997997";

/**
 * COURSES — full YouTube/Udemy course archive (2010–2025), newest first.
 * Titles are kept verbatim; links point to the relevant channel/profile
 * where a specific deep link isn't known.
 */
export const COURSES: TabItem[] = [
  { title: "AI Red Teaming", meta: "2025 · YouTube", year: 2025, url: "https://www.youtube.com/watch?v=U4H2P73Uz_c" },
  { title: "Machine Learning as a Service — MLaaS", meta: "2025 · YouTube", year: 2025, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFwyKekACxgGMt50A3JrYm1x" },
  { title: "Mobile Application Security", meta: "2025 · YouTube", year: 2025, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxbVeqiqZFJabPQDI0wChdj" },
  { title: "Engineering Roadmaps — Video Serisi", meta: "2025 · YouTube", year: 2025, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxj1r5hqWYZI2I0Yx8R8MuC" },
  { title: "Algorithmic Trading with AI", meta: "2025 · YouTube", year: 2025, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFzEx-ufKx8RsVJQio4M46gs" },
  { title: "AI Security Engineer Bootcamp (15 Saat)", meta: "2023 · YouTube", year: 2023, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxjMco-nxzOCffjwx1LKzpQ" },
  { title: "Self-Learning AI with Reinforcement Learning", meta: "2023 · YouTube", year: 2023, url: "https://www.youtube.com/watch?v=SlAl11QJJ1A" },
  { title: "Applied Deep Learning (50+ Saat)", meta: "2022/23 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxVptNDb76nTHk4SMkInDDw" },
  { title: "Numeric Programming with NumPy", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFwWXINNyJuRc1qzYo-C0eSh" },
  { title: "AI Safety", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFzy2DayBvRYIy771rmnoeKJ" },
  { title: "Applied ML Model Deployment — MLaaS", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxZsBgNGEkjHiXVBO2FSGbR" },
  { title: "Computer Vision with OpenCV", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/watch?v=752a-huWGuA" },
  { title: "PyTorch Mimarisi ve Ekosistemi", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFz5M1hDKh-ZyrUYLXRuX_3J" },
  { title: "TensorFlow Mimarisi ve Ekosistemi", meta: "2022 · YouTube", year: 2022, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFzrcMZqF3h79LLTgrzoFv6p" },
  { title: "Database Programming with SQL Server", meta: "2021 · YouTube", year: 2021, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFwi4x7FMkNx49JH_ve6eWdr" },
  { title: "Web Programming with Flask/Python", meta: "2021 · YouTube", year: 2021, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFz5dyjGkpZ3RELMsQJze5qF" },
  { title: "Artificial Intelligence Starter Guide", meta: "2021 · Udemy", year: 2021, url: "https://www.udemy.com/course/yapay-zeka-baslangic-rehberi/?referralCode=32FB24B1DB56BEDF1780" },
  { title: "Software Development Getting Started Guide & Advice", meta: "2021 · Udemy", year: 2021, url: "https://www.udemy.com/course/yazilima-baslangic-rehberi/?referralCode=8AD2F80E1662AB735425" },
  { title: "Python Programming Language: Beginner to Advanced", meta: "2020 · YouTube", year: 2020, url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxkKlY3Cv4E4sq3tqiDUTY0" },
  { title: "RESTful API Basics: Architecture and Design", meta: "2020 · Udemy", year: 2020, url: "https://www.udemy.com/course/restful-api-programlama-temelleri-mimari-ve-tasarim/?referralCode=1CFD021B73C50E5A84CA" },
  { title: "Database Programming with PostgreSQL", meta: "2019 · Udemy", year: 2019, url: "https://www.udemy.com/course/postgresql-veritabani-programlama-temelleri-ve-sql/learn/?referralCode=C9FEC3FEC1E31CF9AE06" },
  { title: "Database Programming with SQLite", meta: "2019 · Udemy", year: 2019, url: "https://www.udemy.com/course/sqlite-veritabani-programlama/learn/?referralCode=C760749A22A0BFA4A956" },
  { title: "C# Programming Language", meta: "2017 · Udemy", year: 2017, url: "https://www.udemy.com/course/csharp-programlama-dili/learn/?referralCode=0A59AF55C098D35B6BEA" },
  { title: "Database Programming with SQL Server", meta: "2017 · Udemy", year: 2017, url: "https://www.udemy.com/course/sql-server-veritabani-programlama/learn/?referralCode=C2FFD62FD75BAC3A72DD" },
  { title: "Go: The Standard Library", meta: "2017 · Udemy", year: 2017, url: "https://www.udemy.com/course/golang-programlama-dili-standard-library-1/learn/?referralCode=C46B9D94EA2E1541A8F1" },
  { title: "RESTful API Programming with Go", meta: "2016 · Udemy", year: 2016, url: "https://www.udemy.com/course/golang-restful-api-programlama/learn/?referralCode=C228482190F6FD2FFB1A" },
  { title: "Go Programming Language", meta: "2016 · Udemy", year: 2016, url: "https://www.udemy.com/course/go-programlama-dili/learn/?referralCode=F36AE29AE1690410F9D4" },
  { title: "Database Programming with Oracle", meta: "2011 · Udemy", year: 2011, url: "https://www.udemy.com/course/oracle-plsql-programlama/learn/?referralCode=0ACF03F408F90EA0DCBA" },
  { title: "Oracle SQL Developer", meta: "2010 · Udemy", year: 2010, url: "https://www.udemy.com/course/oracle-sql-developer-training/?referralCode=964D1775B722EFF11B8E" },
];

/** EVENTS / TALKS — full history (organization · date), newest first. */
export const TALKS: TabItem[] = [
  { title: "Applied Offensive AI — Cyber Anatolian Communities", meta: "02.2025", year: 2025, url: "https://www.linkedin.com/posts/satresmi_siber-g%C3%BCvenlik-k%C4%B1%C5%9F-kamp%C4%B125-e%C4%9Fitmenlerimizden-activity-7292213634385022978-zo0K/" },
  { title: "Microsoft Copilot & Azure AI Studio — Microsoft / BilgeAdam", meta: "09.2024", year: 2024, url: "https://www.linkedin.com/posts/bilgeadam_bilgeadam-bilgeadamteknoloji-azureaistudio-activity-7239647674864435204-hpsH/" },
  { title: "Offensive AI — Beykoz Üniversitesi", meta: "06.2024", year: 2024, url: "https://www.linkedin.com/posts/cihanozhan_offensiveai-aisecurity-yapayzeka-activity-7198288315534471169-rkV6" },
  { title: "AI Safety — AI Safety Summit (AISecLab)", meta: "01.2024", year: 2024, url: "https://www.instagram.com/p/C2Ca2JDNqY7/" },
  { title: "Career in Cyber Security — İstinye Üniversitesi", meta: "01.2024", year: 2024, url: "https://www.cihanozhan.com/" },
  { title: "Offensive AI — Bahçeşehir Üniversitesi", meta: "01.2024", year: 2024, url: "https://www.cihanozhan.com/" },
  { title: "Offensive AI — Maltepe Üniversitesi", meta: "12.2023", year: 2023, url: "https://www.cihanozhan.com/" },
  { title: "Offensive AI — Haliç Üniversitesi", meta: "12.2023", year: 2023, url: "https://www.instagram.com/p/C0texhjNRFH/" },
  { title: "Offensive AI — ML Career Hole", meta: "12.2023", year: 2023, url: "https://kommunity.com/devmultigroup/events/ml-career-hole-2023-deced6fd" },
  { title: "OWASP Machine Learning Top 10 — AISecLab.org", meta: "2023", year: 2023, url: "https://www.youtube.com/watch?v=QBMHvsgjSxA" },
  { title: "Cyber Security App Development with Deep Learning — AISecLab.org", meta: "2023", year: 2023, url: "https://www.youtube.com/watch?v=k7atzVZDJFk" },
  { title: "Offensive AI — T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi", meta: "05.2023", year: 2023, url: "https://aiseclab.org/portfolio/dijital-genc-bilgi-yarismasi-turkiye-cumhuriyeti-cumhurbaskanligi-dijital-donusum-ofisi/" },
  { title: "AI and Security in the Defense Industry — AISecLab.org", meta: "2023", year: 2023, url: "https://www.youtube.com/watch?v=fvuqcD0rXUU" },
  { title: "Offensive AI — Google Developer Student Clubs", meta: "2023", year: 2023, url: "https://www.youtube.com/watch?v=5QoIW4IFjnQ" },
  { title: "Offensive AI — Marmara Üniversitesi", meta: "05.2023", year: 2023, url: "https://biletino.com/tr/e-n4x/yapay-zeka-zirvesi-23/" },
  { title: "AI in National Security — Türkiye Gençlik STK'ları Platformu", meta: "05.2023", year: 2023, url: "https://twitter.com/tgsptr/status/1653444048693100547" },
  { title: "Offensive AI — Boğaziçi Üniversitesi", meta: "05.2023", year: 2023, url: "https://cihanozhan.medium.com/event-offensive-ai-dd28384ddb02" },
  { title: "Offensive AI — Yıldız Teknik Üniversitesi", meta: "05.2023", year: 2023, url: "https://cihanozhan.medium.com/event-offensive-ai-bd03a65aba58" },
  { title: "Offensive AI — Karadeniz Teknik Üniversitesi", meta: "04.2023", year: 2023, url: "https://cihanozhan.medium.com/event-offensive-ai-543583bd77e5" },
  { title: "Offensive AI — Istanbul Data Lab", meta: "08.2022", year: 2022, url: "https://cihanozhan.medium.com/event-cihan-%C3%B6zhan-ile-ai-security-91756a24a754" },
  { title: "Offensive AI: Cyber Security and AI — BilgincIT Academy", meta: "08.2022", year: 2022, url: "https://cihanozhan.medium.com/etkinlik-cihan-%C3%B6zhan-ile-cyber-ai-fa0bc6494fe4" },
  { title: "Offensive AI: Cyber Security and AI — Cisco Networking Academy", meta: "07.2022", year: 2022, url: "https://www.netacad.com/portal/web/self-enroll/m/course-1254020" },
  { title: "Offensive AI: Cyber Security and AI — İstanbul Medeniyet Üniversitesi", meta: "07.2022", year: 2022, url: "https://cihanozhan.medium.com/cyber-ai-etkinli%C4%9Fi-%C3%BCni-18-07-2022-c248398cb3b3" },
  { title: "Deep Understanding of AI — Üsküdar Üniversitesi", meta: "03.2022", year: 2022, url: "https://www.linkedin.com/posts/cihanozhan_yapayzeka-machinelearning-deeplearning-activity-6912696798050439168-j0cm" },
  { title: "Deep Understanding of AI — Iğdır Üniversitesi", meta: "02.2022", year: 2022, url: "https://www.linkedin.com/feed/update/urn:li:activity:6902909144131522560/" },
  { title: "Offensive AI — YouTube", meta: "11.2021", year: 2021, url: "https://www.youtube.com/watch?v=oN6twhEwRWw" },
  { title: "Offensive AI: Security, ML & DL & Computer Vision Security", meta: "2021", year: 2021, url: "https://cihanozhan.medium.com/webinar-ai-security-yapay-zeka-ve-computer-vision-g%C3%BCvenli%C4%9Fi-4ce9db9aaa4b" },
  { title: "AI Getting Started Guide — YouTube", meta: "2021", year: 2021, url: "https://www.youtube.com/watch?v=ynh3OR_bmns" },
  { title: "Offensive AI — BGA Security", meta: "2021", year: 2021, url: "https://www.bgasecurity.com/2021/11/webinar-yapay-zeka-guvenligi/" },
  { title: "Industrial AI and Autonomous Vehicles — YouTube", meta: "2021", year: 2021, url: "https://www.youtube.com/watch?v=ID_tw5iq6Xs" },
  { title: "Data Security Fundamentals for Developers — YouTube", meta: "2021", year: 2021, url: "https://www.youtube.com/watch?v=uJ7SmpkicPk" },
  { title: "AI, Cyber Security, Autonomous Systems and Industry 4.0 — YouTube", meta: "2021", year: 2021, url: "https://www.youtube.com/watch?v=LdC90z_mupw" },
  { title: "MLaaS: Scaling ML Models as Microservices — Devnot Summit", meta: "11.2020", year: 2020, url: "https://summit.devnot.com/2020/" },
  { title: "Industry 4.0 Getting Started Guide — YouTube", meta: "2020", year: 2020, url: "https://www.youtube.com/watch?v=xVln4HU450Q" },
  { title: "Digital Transformation MBA Program: AI — YouTube", meta: "2020", year: 2020, url: "https://www.youtube.com/watch?v=7dhv5jVAgUA" },
  { title: "AI Event/Training — Lycée Saint-Joseph", meta: "2020", year: 2020, url: "https://www.cihanozhan.com/" },
  { title: "Decentralized Application Development — Teknopark İstanbul", meta: "2019", year: 2019, url: "https://www.teknoparkistanbul.com.tr/egitimler/blockchain-decentralized-uygulama-gelistirme-sunumu" },
  { title: "IAthon: AI Hackathon — Lycée Saint Benoît d'Istanbul", meta: "2019", year: 2019, url: "https://www.cihanozhan.com/" },
];

/** PRESENTATIONS — full SlideShare archive, newest first. */
export const PRESENTATIONS: TabItem[] = [
  { title: "Cyber Security: Mobile Security", meta: "SlideShare · 2022", year: 2022, url: "https://www.slideshare.net/Cihanzhan/mobil-uygulama-gvenlii-mobile-security" },
  { title: "AI: MLaaS — Presenting & Scaling ML Models as Microservices", meta: "SlideShare · 2022", year: 2022, url: "https://www.slideshare.net/Cihanzhan/mlaas-presenting-scaling-machine-learning-models-as-microservicespptx" },
  { title: "AI: AI and Machine Learning — Today's Implementation Realities", meta: "SlideServe · 2022", year: 2022, url: "https://www.slideserve.com/cihanozhan/ai-and-machine-learning-today-s-implementation-realities" },
  { title: "AI Security: Security, ML & DL & Computer Vision Security v2", meta: "Medium · 2021", year: 2021, url: "https://cihanozhan.medium.com/webinar-ai-security-yapay-zeka-ve-computer-vision-g%C3%BCvenli%C4%9Fi-4ce9db9aaa4b" },
  { title: "AI: Industrial AI and Autonomous Systems/Vehicles", meta: "SlideShare · 2021", year: 2021, url: "https://www.slideshare.net/Cihanzhan/endstriyel-yapay-zeka-ve-otonom-sistemler" },
  { title: "AI Security: Security, ML & DL & Computer Vision Security v1 (EN)", meta: "SlideShare · 2021", year: 2021, url: "https://www.slideshare.net/Cihanzhan/ai-security-machine-learning-deep-learning-and-computer-vision-security" },
  { title: "AI Security: Security, ML & DL & Computer Vision Security v1 (TR)", meta: "SlideShare · 2021", year: 2021, url: "https://www.slideshare.net/Cihanzhan/ai-security-security-machine-learning-deep-learning-computer-vision-security" },
  { title: "AI Getting Started Guide", meta: "SlideServe · 2020", year: 2020, url: "https://www.slideserve.com/cihanozhan/yapay-zeka-ba-lang-rehberi-v1-powerpoint-ppt-presentation" },
  { title: "Industry 4.0 Getting Started Guide for Manufacturing", meta: "SlideServe · 2020", year: 2020, url: "https://www.slideserve.com/cihanozhan/cihan-zhan-end-stri-4-0-ba-lang-rehberi-retim-sekt-rleri-i-in-powerpoint-ppt-presentation" },
  { title: "Database Programming with SQLite", meta: "SlideServe · 2020", year: 2020, url: "https://www.slideserve.com/cihanozhan/sqlite-veritaban-programlama-powerpoint-ppt-presentation" },
  { title: "Python Programming Language", meta: "SlideShare · 2020", year: 2020, url: "https://www.slideshare.net/Cihanzhan/python-programlama-dili" },
  { title: "React.js Web Programming", meta: "SlideShare · 2019", year: 2019, url: "https://www.slideshare.net/Cihanzhan/reactjs-web-programlama" },
  { title: "Angular Web Programming", meta: "SlideShare · 2019", year: 2019, url: "https://www.slideshare.net/Cihanzhan/angular-web-programlama" },
  { title: "Secure Application Development: OWASP", meta: "SlideServe · 2019", year: 2019, url: "https://www.slideserve.com/cihanozhan/g-venli-yaz-l-m-geli-tirme-owasp-powerpoint-ppt-presentation" },
  { title: "Key Data Security Elements, Software Driven", meta: "SlideServe · 2019", year: 2019, url: "https://www.slideserve.com/cihanozhan/temel-veri-g-venli-i-unsurlar-yaz-l-m-odakl-powerpoint-ppt-presentation" },
  { title: "Go Programming Language", meta: "SlideShare · 2019", year: 2019, url: "https://www.slideshare.net/Cihanzhan/go-programlama-dili-seminer" },
  { title: "Rust Programming Language", meta: "SlideShare · 2019", year: 2019, url: SLIDESHARE_PROFILE },
  { title: "Decentralized Application Development", meta: "SlideShare · 2019", year: 2019, url: "https://www.slideshare.net/Cihanzhan/blockchain-decentralized-application-development-turkish" },
  { title: "RESTful API Architecture and Design", meta: "SlideServe · 2019", year: 2019, url: "https://www.slideserve.com/cihanozhan/restful-api-mimari-ve-tasar-m-powerpoint-ppt-presentation" },
];

/** PUBLICATIONS — books & long-form writing. */
export const PUBLICATIONS: TabItem[] = [
  { title: "Kitap: İleri Seviye T-SQL Programlama (Kodlab)", meta: "2013 · Kitap", year: 2013, url: KODLAB_TSQL },
  { title: "Kitap: Go Programlama Dili (Taslak)", meta: "2018 · Kitap", year: 2018, url: GO_BOOK_DRAFT },
  { title: "Makaleler — Medium", meta: "Sürekli", url: "https://medium.com/@cihanozhan" },
];

export interface Testimonial {
  name: string;
  quote: string;
}

/** Real student comments from Cihan Özhan's Udemy courses. */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mahmut",
    quote: "İçimdeki başlama arzunu ne yapmam gerektiğini samimi bir dille anlatan eğitici. Kendisine teşekkür ederim.",
  },
  {
    name: "Büşra",
    quote: "Çok başarılı ve güzel bir kurs, emeğiniz için çok teşekkürler.",
  },
  {
    name: "M. Şükrü",
    quote: "Ufuk açıcı bir kurs.",
  },
  {
    name: "Yusuf",
    quote: "Çok faydalı bilgiler veriliyor. Teşekkür ederim.",
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
    a: "Taksit imkanı mevcuttur. Standart eğitim ücreti 40.000 TL'dir; erken kayıt döneminde ücret 35.000 TL'dir. Öğrenciler için fiyat 30.000 TL'dir.",
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
