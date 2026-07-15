/**
 * ============================================================================
 * HOMEPAGE CONTENT — cihanozhan.com (personal homepage)
 * ============================================================================
 * Draft copy assembled from Cihan Özhan's public bio + provided structure.
 * Items marked with `// TODO` need the owner's exact wording / final URLs.
 * Masterclass-specific data continues to live in `landing-data.ts`.
 * ============================================================================
 */

export const PERSON = {
  name: "Cihan Özhan",
  title:
    "Founder of Safebox, AISecLab & Runbit · Offensive AI Security · Researcher · Developer",
  location: "İstanbul · New York",
  tagline: "Yapay zekayı güvenli, otonom ve üretime hazır hale getiriyorum.",
};

export const MASTERCLASS_ROUTE = "/agentic-ai-masterclass";

export const ABOUT_PARAGRAPHS: string[] = [
  "20+ yıldır yazılım, veritabanı, siber güvenlik ve yapay zeka alanlarında çalışan; Offensive AI Security, Agentic AI ve otonom sistemler üzerine uzmanlaşmış araştırmacı ve deeptech girişimcisiyim.",
  "Yapay zekanın güvenliği ve saldırı yüzeyi üzerine araştırmalar yürütüyor; kamu kurumlarından üniversitelere, savunma sanayiinden global teknoloji şirketlerine kadar yüzlerce kuruma eğitim, danışmanlık ve teknik liderlik sağlıyorum.",
  "İstanbul ve New York arasında; üretim ortamında çalışan agentic AI sistemleri tasarlıyor, güvenliğini sağlıyor ve ölçeklenebilir AI platformları geliştiriyorum.",
];

export interface Venture {
  name: string;
  role: string;
  body: string;
  url: string;
}

export const VENTURES: Venture[] = [
  {
    name: "Safebox",
    role: "Kurucu",
    body: "Veri ve yapay zeka güvenliği odaklı ürün ve çözümler.",
    url: "https://www.cihanozhan.com/", // TODO: gerçek Safebox linki
  },
  {
    name: "AISecLab",
    role: "Kurucu",
    body: "AI güvenliği araştırma laboratuvarı, eğitim programları ve AI Safety Summit.",
    url: "https://www.cihanozhan.com/", // TODO: gerçek AISecLab linki
  },
  {
    name: "Runbit",
    role: "Kurucu",
    body: "Yapay zeka destekli sistemler ve mühendislik çözümleri.",
    url: "https://www.cihanozhan.com/", // TODO: gerçek Runbit linki
  },
];

export interface Training {
  title: string;
  body: string;
  meta: string;
  url: string;
  /** Internal route link (opens in same tab). External if false/undefined. */
  internal?: boolean;
  featured?: boolean;
}

export const TRAININGS: Training[] = [
  {
    title: "Agentic AI Masterclass",
    body: "Sıfırdan başlayarak gerçek projeler üzerinde otonom AI agent'ları tasarlama, çoklu-agent sistemleri kurma ve üretime alma. Amiral gemisi program.",
    meta: "Flagship · 36+ saat · Canlı",
    url: "/agentic-ai-masterclass",
    internal: true,
    featured: true,
  },
  {
    title: "LLM Engineering Bootcamp",
    body: "LLM tabanlı uygulamalar, RAG ve üretim seviyesinde sistem tasarımı.",
    meta: "Bootcamp",
    url: "https://cihanozhan.com/llms",
  },
  {
    title: "Machine Learning Engineer",
    body: "Makine öğrenmesi modellerini uçtan uca geliştirme ve servisleştirme.",
    meta: "Program",
    url: "https://aiseclab.org/courses/machine-learning-engineer/",
  },
  {
    title: "AI Security Engineer",
    body: "Offensive & defensive AI güvenliği, red teaming ve güvenli ML sistemleri.",
    meta: "Bootcamp",
    url: "https://aiseclab.org/courses/ai-security-engineer/",
  },
];

export interface ExpertiseGroup {
  category: string;
  items: string[];
}

export const EXPERTISE: ExpertiseGroup[] = [
  {
    category: "AI / ML",
    items: ["LLM & Agentic AI", "Deep Learning", "Computer Vision", "RAG & Vector DB", "MLaaS"],
  },
  {
    category: "Güvenlik",
    items: ["Offensive AI", "AI Red Teaming", "Prompt Injection", "Trustworthy AI", "Mobile Security"],
  },
  {
    category: "Diller",
    items: ["Python", "Go", "C#", "SQL", "JavaScript"],
  },
  {
    category: "Veri & Altyapı",
    items: ["PostgreSQL", "Vektör Veritabanları", "Microservices", "Azure AI", "Docker"],
  },
];

export interface Channel {
  label: string;
  url: string;
}

export const CHANNELS: Channel[] = [
  { label: "Udemy", url: "https://www.udemy.com/user/cihanozhan/" },
  { label: "YouTube", url: "https://www.youtube.com/@cihanozhan" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/cihanozhan/" },
  { label: "GitHub", url: "https://github.com/cihanozhan" },
  { label: "Medium", url: "https://medium.com/@cihanozhan" },
  { label: "Twitter (X)", url: "https://x.com/autonomousec" },
  { label: "Vimeo", url: "https://vimeo.com/livetrainer" },
  { label: "Web Arşivi", url: "http://web.archive.org/web/20250512103701/http://cihanozhan.com/" },
];

export const CONTACT = {
  email: "info@cihanozhan.com", // TODO: gerçek e-posta
  website: "https://www.cihanozhan.com",
};

/**
 * Teaching / speaking locations for the scroll-reveal map.
 * All org/event/year strings are taken verbatim from existing copy
 * (landing-data TALKS + INSTRUCTOR_PROJECTS). Coordinates are stylized
 * positions on the abstract SVG map (0–100 space), not precise geodata.
 */
export interface TeachingLocation {
  id: string;
  /** City label — only set where explicitly stated in copy. */
  label?: string;
  x: number;
  y: number;
  org: string;
  event: string;
  year: string;
  /** Visual anchor city (base hubs get a large marker). */
  hub?: boolean;
}

/**
 * Compact list of organizations / brands where Cihan has taught or spoken.
 * Names only — events are covered in other sections, so this strip stays lean.
 */
export const TEACHING_ORGS: { name: string; url: string }[] = [
  { name: "Cyber Anatolian Communities", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/posts/satresmi_siber-g%C3%BCvenlik-k%C4%B1%C5%9F-kamp%C4%B125-e%C4%9Fitmenlerimizden-activity-7292213634385022978-zo0K/" },
  { name: "Microsoft", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/posts/bilgeadam_bilgeadam-bilgeadamteknoloji-azureaistudio-activity-7239647674864435204-hpsH/" },
  { name: "BilgeAdam", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/posts/bilgeadam_bilgeadam-bilgeadamteknoloji-azureaistudio-activity-7239647674864435204-hpsH/" },
  { name: "Beykoz University", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/posts/cihanozhan_offensiveai-aisecurity-yapayzeka-activity-7198288315534471169-rkV6" },
  { name: "AISecLab (AI Safety Summit organizer)", url: "https://web.archive.org/web/20250512103701/https://www.instagram.com/p/C2Ca2JDNqY7/" },
  { name: "Haliç University", url: "https://web.archive.org/web/20250512103701/https://www.instagram.com/p/C0texhjNRFH/" },
  { name: "ML Career Hole (Devmulti Group)", url: "https://web.archive.org/web/20250512103701/https://kommunity.com/devmultigroup/events/ml-career-hole-2023-deced6fd" },
  { name: "AISecLab.org (OWASP ML Top 10)", url: "https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=QBMHvsgjSxA" },
  { name: "AISecLab.org (Cyber Security & Deep Learning)", url: "https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=k7atzVZDJFk" },
  { name: "AISecLab.org (Defense Industry AI)", url: "https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=fvuqcD0rXUU" },
  { name: "Digital Transformation Office, Presidency of Türkiye", url: "https://web.archive.org/web/20250512103701/https://aiseclab.org/portfolio/dijital-genc-bilgi-yarismasi-turkiye-cumhuriyeti-cumhurbaskanligi-dijital-donusum-ofisi/" },
  { name: "Google Developer Student Clubs", url: "https://web.archive.org/web/20250512103701/https://www.youtube.com/watch?v=5QoIW4IFjnQ" },
  { name: "Marmara University", url: "https://web.archive.org/web/20250512103701/https://biletino.com/tr/e-n4x/yapay-zeka-zirvesi-23/" },
  { name: "Türkiye Youth NGOs Platform", url: "https://web.archive.org/web/20250512103701/https://twitter.com/tgsptr/status/1653444048693100547" },
  { name: "Boğaziçi University", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/event-offensive-ai-dd28384ddb02" },
  { name: "Yıldız Technical University", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/event-offensive-ai-bd03a65aba58" },
  { name: "Karadeniz Technical University", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/event-offensive-ai-543583bd77e5" },
  { name: "Istanbul Data Lab", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/event-cihan-%C3%B6zhan-ile-ai-security-91756a24a754" },
  { name: "BilgincIT Academy", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/etkinlik-cihan-%C3%B6zhan-ile-cyber-ai-fa0bc6494fe4" },
  { name: "Cisco Networking Academy", url: "https://web.archive.org/web/20250512103701/https://www.netacad.com/portal/web/self-enroll/m/course-1254020" },
  { name: "Istanbul Medeniyet University", url: "https://web.archive.org/web/20250512103701/https://cihanozhan.medium.com/cyber-ai-etkinli%C4%9Fi-%C3%BCni-18-07-2022-c248398cb3b3" },
  { name: "Üsküdar University", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/posts/cihanozhan_yapayzeka-machinelearning-deeplearning-activity-6912696798050439168-j0cm" },
  { name: "Iğdır University", url: "https://web.archive.org/web/20250512103701/https://www.linkedin.com/feed/update/urn:li:activity:6902909144131522560/" },
  { name: "BGA Security", url: "https://web.archive.org/web/20250512103701/https://www.bgasecurity.com/2021/11/webinar-yapay-zeka-guvenligi/" },
  { name: "Devnot Summit", url: "https://web.archive.org/web/20250512103701/https://summit.devnot.com/2020/" },
  { name: "Teknopark İstanbul", url: "https://web.archive.org/web/20250512103701/https://www.teknoparkistanbul.com.tr/egitimler/blockchain-decentralized-uygulama-gelistirme-sunumu" },
  { name: "Lycée Saint Benoît d'İstanbul", url: "https://web.archive.org/web/20250512103701/https://www.sb.k12.tr/6-uluslararasi-dijital-bahar-udb/" },
];

export const TEACHING_LOCATIONS: TeachingLocation[] = [
  {
    id: "newyork",
    label: "New York",
    x: 13,
    y: 41,
    org: "New York",
    event: "Çalışma üssü — Offensive AI & agentic sistemler",
    year: "—",
    hub: true,
  },
  {
    id: "istanbul",
    label: "İstanbul",
    x: 60,
    y: 33,
    org: "İstanbul",
    event: "Çalışma üssü — araştırma, geliştirme ve eğitim",
    year: "—",
    hub: true,
  },
  {
    id: "bogazici",
    x: 57,
    y: 29,
    org: "Boğaziçi Üniversitesi",
    event: "Offensive AI",
    year: "05.2023",
  },
  {
    id: "cumhurbaskanligi",
    x: 67,
    y: 40,
    org: "T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi",
    event: "Offensive AI sunumu — Dijital Genç Bilgi Yarışması",
    year: "2023",
  },
  {
    id: "gdsc",
    x: 63,
    y: 47,
    org: "Google Developer Student Clubs",
    event: "Offensive AI",
    year: "2023",
  },
  {
    id: "aisafety",
    x: 71,
    y: 32,
    org: "AI Safety Summit (AISecLab)",
    event: "AI Safety",
    year: "01.2024",
  },
  {
    id: "cyberanatolian",
    x: 54,
    y: 45,
    org: "Cyber Anatolian Communities",
    event: "Applied Offensive AI",
    year: "02.2025",
  },
  {
    id: "microsoft",
    x: 69,
    y: 49,
    org: "Microsoft / BilgeAdam",
    event: "Microsoft Copilot & Azure AI Studio eğitimi",
    year: "2024",
  },
];
