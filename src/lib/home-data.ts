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
  "20+ yıldır yazılım, güvenlik ve yapay zeka alanında araştırmacı, geliştirici ve girişimci olarak çalışıyorum.",
  "Offensive AI Security üzerine araştırmalar yürütüyor; kamu kurumlarından üniversitelere ve global teknoloji şirketlerine kadar yüzlerce kuruma eğitim ve danışmanlık veriyorum.",
  "İstanbul ve New York arasında; agentic AI sistemlerini tasarlıyor, güvenli hale getiriyor ve üretime taşıyorum.",
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
    url: "https://www.cihanozhan.com/", // TODO
  },
  {
    title: "Machine Learning Engineer",
    body: "Makine öğrenmesi modellerini uçtan uca geliştirme ve servisleştirme.",
    meta: "Program",
    url: "https://www.cihanozhan.com/", // TODO
  },
  {
    title: "AI Security Engineer",
    body: "Offensive & defensive AI güvenliği, red teaming ve güvenli ML sistemleri.",
    meta: "Bootcamp",
    url: "https://www.youtube.com/playlist?list=PLr48dQTh3FFxjMco-nxzOCffjwx1LKzpQ",
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
  { label: "Twitter", url: "https://twitter.com/cihanozhan" }, // TODO: doğrula
  { label: "Vimeo", url: "https://vimeo.com/cihanozhan" }, // TODO: doğrula
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
export const TEACHING_ORGS: string[] = [
  "Cyber Anatolian Communities",
  "Microsoft / BilgeAdam",
  "Beykoz University",
  "AISecLab (AI Safety Summit organizer)",
  "İstinye University",
  "Bahçeşehir University",
  "Maltepe University",
  "Haliç University",
  "ML Career Hole (Devmulti Group)",
  "AISecLab.org",
  "Digital Transformation Office, Presidency of Türkiye",
  "Google Developer Student Clubs",
  "Marmara University",
  "Türkiye Youth NGOs Platform",
  "Boğaziçi University",
  "Yıldız Technical University",
  "Karadeniz Technical University",
  "Istanbul Data Lab",
  "BilgincIT Academy",
  "Cisco Networking Academy",
  "Istanbul Medeniyet University",
  "Üsküdar University",
  "Iğdır University",
  "BGA Security",
  "Devnot Summit",
  "Lycée Saint-Joseph",
  "Teknopark İstanbul",
  "Lycée Saint Benoît d'İstanbul",
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
