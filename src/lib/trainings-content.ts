/**
 * ============================================================================
 * TRAININGS CONTENT — per-training config for the 6 passive training pages.
 * ============================================================================
 * Each config feeds the shared landing sections (HeroCompact, CurriculumFlex,
 * WhoForVariant, FaqCustom) via the corresponding route file under
 * src/routes/.
 * ============================================================================
 */

import type { Module, ModuleOutcome, Outcome } from "./landing-data";
import type { PricingContent } from "@/components/landing/PricingSimple";

export interface TrainingFaqItem {
  q: string;
  /** Plain string, or an array of bullet points rendered as a list. */
  a: string | string[];
}

export interface TrainingPageContent {
  slug: string;
  title: string;
  subtitle: string;
  /** Small type/duration tag rendered next to hero image. */
  typeTag: string;
  whoForVariant: "security" | "deployment";
  /** "modules" = numbered accordion (like main masterclass). "flat" = single flowing list. */
  curriculumMode: "modules" | "flat";
  modules?: Module[];
  flatItems?: ModuleOutcome[];
  footnote?: string;
  /** Overrides the default "Kazanımlar" (Outcomes) cards. */
  outcomes?: Outcome[];
  /** Optional tiered pricing block. When absent, PricingSimple's fallback renders. */
  pricing?: PricingContent;
  faq: TrainingFaqItem[];
  /** Meta for <head> */
  head: { title: string; description: string };
  /** Per-training Google Form URL used by the final "Başvuru Formunu Aç" CTA. */
  applyFormUrl: string;
}


/**
 * Turn a flat outcome list into per-item numbered modules. Each top-level bullet
 * becomes its own module; nested items become that module's outcomes.
 */
function outcomesToModules(items: ModuleOutcome[]): Module[] {
  return items.map((item, i) => {
    const number = String(i + 1).padStart(2, "0");
    if (typeof item === "string") {
      return { number, title: item, outcomes: [] };
    }
    return { number, title: item.text, outcomes: item.children };
  });
}

const PRICE_FAQ: TrainingFaqItem = {
  q: "Eğitim ücreti nedir?",
  a: "Eğitim ücreti ve diğer tüm detayları için başvurun.",
};

// ---------- Shared outcome sets (Kazanımlar) ----------

const SECURITY_ATTACK_SURFACE_ALL: Outcome = {
  icon: "ScanSearch",
  title: "Yapay zeka saldırı yüzeylerini anlamak",
  body: "Geliştirilmiş ML, DL modelleri, LLM ve Agentic AI uygulamalarının saldırı yüzeylerini (attack surfaces) anlayabileceksiniz.",
};

const SECURITY_ATTACK_SURFACE_LLM: Outcome = {
  icon: "ScanSearch",
  title: "Yapay zeka saldırı yüzeylerini anlamak",
  body: "Geliştirilmiş LLM ve Agentic AI uygulamalarının saldırı yüzeylerini (attack surfaces) anlayabileceksiniz.",
};

const SECURITY_ATTACK_SURFACE_ML: Outcome = {
  icon: "ScanSearch",
  title: "Yapay zeka saldırı yüzeylerini anlamak",
  body: "Geliştirilmiş ML, DL modellerinin saldırı yüzeylerini (attack surfaces) anlayabileceksiniz.",
};

const REDTEAM_SPECIALIZE: Outcome = {
  icon: "Crosshair",
  title: "AI Red Teaming alanında uzmanlaşmak",
  body: "Bir ML, DL, LLM ya da Agentic AI modelinin güvenlik zafiyetlerini gerçek bir hacker gibi pentest edebilir, bu zafiyetleri exploit edebilirsiniz.",
};

const INFRA_SECURITY_APPLIED: Outcome = {
  icon: "ShieldAlert",
  title: "Yapay Zeka Altyapı Güvenliği",
  body: "Yapay zekaların bazı kritik zafiyetleri o yapay zeka sisteminin altyapısından (AI Infrastructure) kaynaklanır. Bu zafiyetleri anlamak, güvenliğini sağlayabilmek ya da exploit edebilmek için gereken teorik ve uygulamalı bilgilere sahip olacaksınız.",
};

const INFRA_SECURITY_THEORY: Outcome = {
  icon: "ShieldAlert",
  title: "Yapay Zeka Altyapı Güvenliği temelleri",
  body: "Yapay zekaların bazı kritik zafiyetleri o yapay zeka sisteminin altyapısından (AI Infrastructure) kaynaklanır. Bu zafiyetleri anlamak, güvenliğini sağlayabilmek ya da exploit edebilmek için gereken teorik bilgilere sahip olacaksınız.",
};

const SECURING_AI_GENERAL: Outcome = {
  icon: "ShieldCheck",
  title: "Yapay Zekanın güvenliğini sağlamak",
  body: "Yapay zeka sistemlerini hacklemek bir hacker bakış açısı gerektirir, o altyapıların güvenliğini sağlamak ise bir siber güvenlik uzmanı bakış açısı... Bu eğitimde sadece saldırmayı değil, o zafiyetleri nasıl daha güvenli hale getirebileceğinizi öğrenirsiniz. Hem teorik hem de uygulamalı...",
};

const SECURING_LLM: Outcome = {
  icon: "ShieldCheck",
  title: "LLM/Agentic AI güvenliğini sağlamak",
  body: "Yapay zeka sistemlerini hacklemek bir hacker bakış açısı gerektirir, o altyapıların güvenliğini sağlamak ise bir siber güvenlik uzmanı bakış açısı... Bu eğitimde sadece saldırmayı değil, o zafiyetleri nasıl daha güvenli hale getirebileceğinizi öğrenirsiniz. Hem teorik hem de uygulamalı...",
};

const SECURING_ML: Outcome = {
  icon: "ShieldCheck",
  title: "ML ve DL güvenliğini sağlamak",
  body: "Yapay zeka sistemlerini hacklemek bir hacker bakış açısı gerektirir, o altyapıların güvenliğini sağlamak ise bir siber güvenlik uzmanı bakış açısı... Bu eğitimde sadece saldırmayı değil, o zafiyetleri nasıl daha güvenli hale getirebileceğinizi öğrenirsiniz. Hem teorik hem de uygulamalı...",
};

const RAG_VECTOR_SECURITY: Outcome = {
  icon: "Database",
  title: "RAG, Vector DB güvenliği",
  body: "Yapay zeka güvenliğinde her şey yapay zeka modeli ya da altyapısından ibaret değildir. Altyapıda yazılımın çalışması için uyguladığımız veri mimarisi, veritabanı yapısı ve teknolojileri, vector DB tasarımı, RAG mimarisi de ciddi şekilde güvenlik sorunlarına neden olabilmektedir. Bu başlıkları da bir siber saldırgan ve savunmacı olarak öğreneceksiniz.",
};

const RAG_VECTOR_SECURITY_LLM: Outcome = {
  icon: "Database",
  title: "RAG, Vector DB güvenliği",
  body: "Yapay zeka güvenliğinde her şey LLM/Agentic AI modeli ya da altyapısından ibaret değildir. Altyapıda yazılımın çalışması için uyguladığımız veri mimarisi, veritabanı yapısı ve teknolojileri, vector DB tasarımı, RAG mimarisi de ciddi şekilde güvenlik sorunlarına neden olabilmektedir. Bu başlıkları da bir siber saldırgan ve savunmacı olarak öğreneceksiniz.",
};

const AI_DATA_SECURITY: Outcome = {
  icon: "Database",
  title: "AI odaklı veri güvenliği",
  body: "Yapay zeka güvenliğinde her şey ML, DL algoritması, LLM/Agentic AI uygulaması ya da altyapısından ibaret değildir. Altyapıda yazılımın çalışması için uyguladığımız veri mimarisi, veritabanı yapısı ve teknolojileri, veritabanı tasarımı, veri mimarisi de ciddi şekilde güvenlik sorunlarına neden olabilmektedir. Bu başlıkları da bir siber saldırgan ve savunmacı olarak öğreneceksiniz.",
};

const INTEGRATION_SECURITY: Outcome = {
  icon: "Plug",
  title: "Entegrasyon Güvenliği",
  body: "Her şey model, altyapı ve veritabanın güvenliğinden ibaret değildir. İster bir ML, DL modeli geliştirin, isterseniz de LLM yada Agentic AI, geliştirdiğiniz yapay zekalar farklı API, sistem ya da yapay zekalarla birlikte çalışmak zorunda... Bu entegrasyonlar için geliştirilen protokollerden bazıları: MCP, ACP, A2A ve AP2'dur. Bu eğitimde tüm AI protokollerinin güvenliğini saldırgan ve savunmacı gözünden inceliyoruz.",
};

const NATO_SPECIALIZE: Outcome = {
  icon: "Award",
  title: "NATO AI Security standartlarında uzmanlaşın",
  body: "Bir ML, DL, LLM ya da Agentic AI modelinin güvenlik zafiyetlerini gerçek bir hacker gibi pentest edebilir, bu zafiyetleri exploit edebilirsiniz. Ayrıca, NATO gibi askeri oluşumların ileri seviye AI Security standartlarında uzmanlaşabileceksiniz.",
};

// Deployment-track outcomes

const ML_LIFECYCLE: Outcome = {
  icon: "RefreshCw",
  title: "ML System Lifecycle",
  body: "Bir yapay zeka modeli geliştirdiniz ancak sonraki konularda, ihtiyaçlarda yeni bilgilere, uzmanlıklara ihtiyaç duyduğunuzu farkettiğiniz! Bu eğitim sizin için... Bir AI modeli sıradan bir yazılım deployment süreçlerinden farklıdır. Bu eğitimde AI modeli ve altyapısının bakımı, monitor edilmesi, ölçeklenmesi, güvenliğine teorik ve uygulamalı olarak odaklanacağız.",
};

const LLM_LIFECYCLE: Outcome = {
  icon: "RefreshCw",
  title: "LLM System Lifecycle",
  body: "Bir yapay zeka LLM / Agentic AI projesi ancak sonraki konularda, ihtiyaçlarda yeni bilgilere, uzmanlıklara ihtiyaç duyduğunuzu farkettiğiniz! Bu eğitim sizin için... Bir LLM uygulaması sıradan bir yazılım deployment süreçlerinden farklıdır. Bu eğitimde LLM/Agentic AI uygulama ve altyapısının bakımı, monitor edilmesi, ölçeklenmesi, güvenliğine teorik ve uygulamalı olarak odaklanacağız.",
};

const MLAAS_ML: Outcome = {
  icon: "Cloud",
  title: "MLaaS: Machine Learning as a Services",
  body: "Servis odaklı geliştirilen yazılımlara SaaS denir. Bu eğitimde bir çok AI altyapısı ve MLaaS geliştiren Cihan Özhan ile SaaS + ML/DL konularına hakim olacaksınız.",
};

const MLAAS_LLM: Outcome = {
  icon: "Cloud",
  title: "MLaaS: Machine Learning as a Services",
  body: "Servis odaklı geliştirilen yazılımlara SaaS denir. Bu eğitimde bir çok AI altyapısı ve MLaaS geliştiren Cihan Özhan ile SaaS + LLM/Agentic AI konularına hakim olacaksınız.",
};

const AI_PRODUCTION: Outcome = {
  icon: "Gauge",
  title: "AI Production konularında uzmanlaşın",
  body: "Yazılım, yapay zeka, güvenlik, performans, ölçeklendirme, monitoring ve dahası... Bu eğitimde AI Production temellerini gerçek dünya tecrübeleriyle doğru anlayabileceksiniz.",
};

const ML_DEPLOYMENT_OUTCOME: Outcome = {
  icon: "Layers",
  title: "ML, DL, LLM ve Agentic AI deployment",
  body: "Algoritmik yapay zeka (ML, DL) ile LLM tabanlı (Agentic AI) sistemler tamamen farklı deployment ve AI Production uzmanlığına ihtiyaç duyar. Bu konuların tamamında gerçek dünya tecrübeleri bulunan Cihan Özhan ile teorik ve uygulamalı deployment süreçleri tasarlayacaksınız.",
};

const LLM_DEPLOYMENT_OUTCOME: Outcome = {
  icon: "Layers",
  title: "LLM ve Agentic AI deployment",
  body: "LLM tabanlı (Agentic AI) sistemler yazılımdan tamamen farklı deployment ve AI Production uzmanlığına ihtiyaç duyar. Bu konuların tamamında gerçek dünya tecrübeleri bulunan Cihan Özhan ile teorik ve uygulamalı deployment süreçleri tasarlayacaksınız.",
};

const AI_PROD_SECURITY: Outcome = {
  icon: "ShieldCheck",
  title: "AI Production ortamında güvenlik temelleri",
  body: "Bir kurum ya da kuruluşun altyapısını yapay zekaya emanet etmek büyük bir sorumluluk yüklenmek demektir. İster ML, DL gibi algoritmik, isterseniz de LLM gibi Agentic AI çalışması yapmış olun. Yapay zekalar hacklenebiliyor... Offensive AI ve AI Red Teaming üzerine uzman olan Cihan Özhan ile AI altyapınızı daha güvenli hale getireceksiniz.",
};

const SCALABLE_AI: Outcome = {
  icon: "TrendingUp",
  title: "Ölçeklenebilir yapay zekalar",
  body: "100 kişiye hizmet verecek bir ML/DL modeli ya da LLM ile 10000 kişiye hizmet verecek bir yapay zekanın altyapı ve mimari ihtiyaçları ciddi oranda değişiklik gösterir. Scalable AI başlığında öğreneceğiniz bir çok konu ile artık siz de ölçeklenebilir yapay zekalar geliştirebileceksiniz.",
};

const AI_RED_TEAMING_OUTCOMES: Outcome[] = [
  SECURITY_ATTACK_SURFACE_ALL,
  REDTEAM_SPECIALIZE,
  INFRA_SECURITY_APPLIED,
  SECURING_AI_GENERAL,
  RAG_VECTOR_SECURITY,
  INTEGRATION_SECURITY,
];

const LLM_SECURITY_OUTCOMES: Outcome[] = [
  SECURITY_ATTACK_SURFACE_LLM,
  INFRA_SECURITY_THEORY,
  SECURING_LLM,
  RAG_VECTOR_SECURITY_LLM,
  INTEGRATION_SECURITY,
];

const AI_ML_SECURITY_OUTCOMES: Outcome[] = [
  SECURITY_ATTACK_SURFACE_ML,
  INFRA_SECURITY_THEORY,
  SECURING_ML,
  AI_DATA_SECURITY,
  INTEGRATION_SECURITY,
];

const AI_SEC_DEFENSE_OUTCOMES: Outcome[] = [
  SECURITY_ATTACK_SURFACE_ALL,
  NATO_SPECIALIZE,
  INFRA_SECURITY_APPLIED,
  SECURING_AI_GENERAL,
  RAG_VECTOR_SECURITY,
  INTEGRATION_SECURITY,
];

const ML_DEPLOYMENT_OUTCOMES: Outcome[] = [
  ML_LIFECYCLE,
  MLAAS_ML,
  AI_PRODUCTION,
  ML_DEPLOYMENT_OUTCOME,
  AI_PROD_SECURITY,
  SCALABLE_AI,
];

const LLM_DEPLOYMENT_OUTCOMES: Outcome[] = [
  LLM_LIFECYCLE,
  MLAAS_LLM,
  AI_PRODUCTION,
  LLM_DEPLOYMENT_OUTCOME,
  AI_PROD_SECURITY,
  SCALABLE_AI,
];

const AI_RED_TEAMING_PRICING: PricingContent = {
  early: {
    originalPrice: "60.000 TL",
    price: "50.000 TL",
    caption: "Erken kayıt döneminde geçerli fiyat.",
  },
  student: {
    price: "40.000 TL",
    caption: "Öğrenciler için özel fiyat.",
  },
};



// ---------- Page 1: AI Red Teaming Masterclass ----------

const AI_RED_TEAMING_MODULES: Module[] = [
  {
    number: "01",
    title: "Introduction to Red Teaming AI",
    outcomes: [
      "What is AI Red Teaming?",
      "AI Security vs. Security AI",
      "AI Red Teaming vs. LLM Red Teaming vs. Agentic AI Red Teaming",
    ],
  },
  {
    number: "02",
    title: "ML & DL Foundations",
    outcomes: [
      "Machine Learning & Deep Learning Foundations",
      "Machine Learning Model Training",
      "Simple Model Querying & Inference",
      "Model Sensitivity: Model Sensitivity Analysis",
      "FGSM Attack Analysis",
      "Exercise: MNIST Classifier",
      "Exercise: Model Queries",
      "Exercise: Text Generator",
      "Machine Learning Model Deployment",
    ],
  },
  {
    number: "03",
    title: "Introduction to Adversarial AI",
    outcomes: [
      "Adversarial AI Overview",
      "What is Adversarial AI and Adversarial Attacks?",
      "Physical Adversarial Attacks",
      "Membership Inference",
      "Shadow Models",
      "Vulnerability Reporting",
      "AI Hacker Mode: Membership Inference Investigation",
      "AI Hacker Mode: Attack Decision Tree",
      "AI Hacker Mode: Shadow Model",
      "AI Hacker Mode: AI security research paper — read, extract, implement!",
    ],
  },
  {
    number: "04",
    title: "Evasion & Inference Attacks",
    outcomes: [
      "Evasion & Inference Attacks",
      {
        text: "WhiteBox Evasion Attacks",
        children: ["FGSM Attack", "PDG Attack", "C&W Attack"],
      },
      {
        text: "BlackBox Evasion Attacks",
        children: [
          "Understand BlackBox Threat Models",
          "Implement SimBA — Score-Based Attack",
          "Execute HopSkipJump — Decision-Based Attack",
        ],
      },
      "ART Evasion Attacks (ART library)",
      "Cleverhans Evasion Attacks (CleverHans library)",
      "Foolbox Evasion Attacks (Foolbox library)",
      "Attack Comparison",
      "Vulnerability Report",
    ],
  },
  {
    number: "05",
    title: "Poisoning & Backdoor",
    outcomes: [
      {
        text: "Model & Data Poisoning Overview",
        children: ["Data Poisoning", "Poisoning Detection"],
      },
      "LLM Poisoning",
      "Backdoor Attack & Backdoor Triggers",
      "Defense Testing",
      "Defense Effectiveness",
    ],
  },
  {
    number: "06",
    title: "Generative AI Security",
    outcomes: [
      "Adversarial NLP",
      "Certified Defenses against Adversarial Examples",
      "LLM Architecture",
      {
        text: "Prompt Injection",
        children: [
          "Prompt Injection Chain",
          "Direct Injection",
          "Filter Bypass",
          "Guardrail Bypass",
          "Multilayer Bypass",
        ],
      },
      "Custom Garak Probe",
    ],
  },
  {
    number: "07",
    title: "Advanced LLM Red Teaming",
    outcomes: ["Purple Team", "Multi Vector", "Model Comparison", "Research Deepdive"],
  },
  {
    number: "08",
    title: "Mitigations, Evaluation & Reporting",
    outcomes: [
      "Defense Implementation",
      "Atlas Mapping",
      "Security Evaluation",
      "AI Pentest Report",
    ],
  },
  {
    number: "09",
    title: "Capstone Project",
    outcomes: [
      "Demonstrate complete AI Security workflow: Planning, Reconnaissance, Attack, Defense, Evaluation, and Reporting.",
    ],
  },
  {
    number: "10",
    title: "RAG Exploitation",
    outcomes: [
      "Build and systematically compromise a Retrieval-Augmented Generation (RAG) application. Poison its knowledge base, hijack retrieval, and exfiltrate sensitive data through the LLM. This lab demonstrates why RAG systems require end-to-end security.",
    ],
  },
  {
    number: "11",
    title: "Multi-Agent Attacks",
    outcomes: [
      "Attack a multi-agent customer service system where three AI agents collaborate via shared memory to handle customer requests. The agents (Customer Service, Billing, and Technical Support) trust each other implicitly and share a Redis-backed memory store with no access controls.",
      "Objective: exploit trust relationships between agents, manipulate shared memory, trigger unauthorized actions, and propagate attacks across the entire agent network.",
      "This section contains 7 vulnerabilities.",
    ],
  },
  {
    number: "12",
    title: "Supply Chain Attack",
    outcomes: [
      "Supply Chain Attack Overview",
      "Serialization Attack: Pickle Exploit",
      "ML Model Registry",
    ],
  },
  {
    number: "13",
    title: "Model Extraction",
    outcomes: [
      "Model Extraction Overview",
      "LLM Extraction: LLM Training Data Extraction",
      "Membership Inference Attack",
      "Model Extraction Attack (Model Stealing)",
      "Target API: Model Extraction & Inference Attacks",
    ],
  },
  {
    number: "14",
    title: "Automated AI Red Teaming",
    outcomes: [
      "This lab deploys three industry-standard red teaming tools (garak, PyRIT, promptfoo) against a deliberately vulnerable chatbot target. Learn to run systematic vulnerability scans, compare tool strengths, and integrate automated red teaming into CI/CD pipelines.",
    ],
  },
  {
    number: "15",
    title: "End-to-End AI Red Teaming Project",
    outcomes: [
      "Conduct a full red team assessment against an AI-powered enterprise platform, consisting of four interconnected services backed by shared infrastructure.",
      "This section contains 6 vulnerabilities.",
    ],
  },
];

// ---------- Page 2: LLM Security & Agentic AI Security ----------

const LLM_SECURITY_ITEMS: ModuleOutcome[] = [
  {
    text: "Güvenli Yapay Zeka",
    children: ["Yapay Zeka Hacklenebilir mi?", "Adversarial Attack Nedir?"],
  },
  "Blue Teaming vs. Red Teaming",
  "AI Security vs. Security AI",
  "Yapay Zeka ile Siber Saldırı ve Savunma",
  "Yapay Zekaya Siber Saldırı ve Savunma",
  "Yapay Zekanın Kritik Güvenlik Zafiyetleri",
  "Explainable AI: Yapay Zekanın Açıklanabilirliği",
  "Responsible AI",
  "Demo: Bir Yapay Zeka (Deep Learning) Modelini Hacklemek",
  "Demo: Bir Yapay Zeka (LLM) Modelini Hacklemek",
  {
    text: "OWASP LLM Top 10",
    children: [
      "LLM01: Prompt Injection",
      "LLM02: Sensitive Information Disclosure",
      "LLM03: Supply Chain",
      "LLM04: Data and Model Poisoning",
      "LLM05: Improper Output Handling",
      "LLM06: Excessive Agency",
      "LLM07: System Prompt Leakage",
      "LLM08: Vector and Embedding Weaknesses",
      "LLM09: Misinformation",
      "LLM10: Unbounded Consumption",
    ],
  },
  "Agentic AI Security",
  "OWASP Agentic AI – Threats and Mitigations",
];

// ---------- Page 3: AI / ML Security ----------

const AI_ML_SECURITY_ITEMS: ModuleOutcome[] = [
  {
    text: "Güvenli Yapay Zeka",
    children: ["Yapay Zeka Hacklenebilir mi?", "Adversarial Attack Nedir?"],
  },
  "Blue Teaming vs. Red Teaming",
  "AI Security vs. Security AI",
  "Yapay Zeka ile Siber Saldırı ve Savunma",
  "Yapay Zekaya Siber Saldırı ve Savunma",
  "Yapay Zekanın Kritik Güvenlik Zafiyetleri",
  "Explainable AI: Yapay Zekanın Açıklanabilirliği",
  "Responsible AI",
  "Demo: Bir Yapay Zeka (Deep Learning) Modelini Hacklemek",
  "Demo: Bir Yapay Zeka (LLM) Modelini Hacklemek",
  {
    text: "OWASP Machine Learning Security Top 10",
    children: [
      "ML01: Input Manipulation Attack",
      "ML02: Data Poisoning Attack",
      "ML03: Model Inversion Attack",
      "ML04: Membership Inference Attack",
      "ML05: Model Theft",
      "ML06: AI Supply Chain Attacks",
      "ML07: Transfer Learning Attack",
      "ML08: Model Skewing",
      "ML09: Output Integrity Attack",
      "ML10: Model Poisoning",
    ],
  },
];

// ---------- Page 4: Machine Learning Deployment ----------

const ML_DEPLOYMENT_ITEMS: ModuleOutcome[] = [
  "MLOps'a Genel Bakış",
  "Software Engineering",
  {
    text: "Donanımsal Hesaplama (Compute Hardware)",
    children: ["GPU Temelleri", "GPU Cloud", "On-Prem"],
  },
  "Kaynak Yönetimi",
  "ML System Lifecycle",
  "MLaaS: Machine Learning as a Services",
  "Model Packaging",
  "Model Deployment Türleri",
  "Model Deployment (Web): AI Modelleri için Web Tabanlı Mimari ve Teknolojiler",
  "Model Sharing: ONNX",
  {
    text: "Model Serving Araç ve Library'leri",
    children: [
      "TensorFlow Serving: Mimarisi",
      "TensorFlow Serving: RESTful ve TensorFlow Serving ile Model Prediction",
      "Proje: TensorFlow Extended (TFX) Pipeline ile Model Deployment",
      "PyTorch Serve: Mimarisi",
      "Proje: PyTorch Serve ile Deployment",
      "Diğer Araçlar",
    ],
  },
  "Cloud Tabanlı ML Deployment",
  {
    text: "ML Deployment İçin Model Optimizasyonu",
    children: ["ML Quantization", "ML Pruning", "ML Distillation"],
  },
  {
    text: "Distributed AI",
    children: [
      "Distributed Sistemlere Genel Bakış",
      "Distributed AI Nedir?",
      "Distributed AI Kullanım Senaryoları",
      "Distributed AI Araçları",
      "Distributed AI Training: Genel Bakış",
      "Data Parallelism",
      "Model Parallelism",
      "Experiment Management",
      "Hyperparameter Tuning",
      "Veri Yönetimi",
      "Machine Learning Parallelism and Scaling",
    ],
  },
  "Secure ML Deployment",
];

// ---------- Page 5: LLM Deployment ----------

const LLM_DEPLOYMENT_ITEMS: ModuleOutcome[] = [
  "LLMOps'a Genel Bakış",
  "Software Engineering",
  {
    text: "Donanımsal Hesaplama (Compute Hardware)",
    children: ["GPU Temelleri", "GPU Cloud", "On-Prem"],
  },
  "Kaynak Yönetimi",
  "ML System Lifecycle",
  "LLM Lifecycle",
  "MLaaS: Machine Learning as a Services",
  "Model Packaging",
  "Model Deployment Türleri",
  "Model Deployment (Web): AI Modelleri için Web Tabanlı Mimari ve Teknolojiler",
  "Model Sharing: ONNX",
  {
    text: "Model Serving Araç ve Library'leri",
    children: [
      "TensorFlow Serving: Mimarisi",
      "TensorFlow Serving: RESTful ve TensorFlow Serving ile Model Prediction",
      "Proje: TensorFlow Extended (TFX) Pipeline ile Model Deployment",
      "PyTorch Serve: Mimarisi",
      "Proje: PyTorch Serve ile Deployment",
      "Diğer Araçlar",
    ],
  },
  "LLM Inference",
  {
    text: "LLM Deployment İçin Model Optimizasyonu",
    children: ["LLM Quantization", "LLM Pruning", "LLM Distillation"],
  },
  {
    text: "LLM Deployment",
    children: ["Python ile LLM Deployment", "Cloud Tabanlı LLM Deployment"],
  },
  {
    text: "Distributed AI",
    children: [
      "Distributed Sistemlere Genel Bakış",
      "Distributed AI Nedir?",
      "Distributed AI Kullanım Senaryoları",
      "Distributed AI Araçları",
      "Distributed AI Training: Genel Bakış",
      "Data Parallelism",
      "Model Parallelism",
      "Experiment Management",
      "Hyperparameter Tuning",
      "Veri Yönetimi",
      "LLM Parallelism and Scaling",
    ],
  },
  "Secure LLM Deployment",
];

// ---------- Page 6: Savunma Sanayiinde Yapay Zeka Güvenliği ----------

const AI_SEC_DEFENSE_MODULES: Module[] = [
  {
    number: "01",
    title: "Yapay Zeka Güvenliğine Genel Bakış",
    outcomes: [
      "Yapay Zeka Güvenliği: Mantık, Teknik, Taktik",
      "AI Security vs. Security AI",
      "Yapay Zeka ile Siber Saldırı ve Savunma",
      "Proje Demo: Bir Yapay Zeka Modelini Hacklemek (AI Security)",
      "Proje Demo: Bir Yapay Zeka Modeliyle Hacklemek (Security AI)",
    ],
  },
  {
    number: "02",
    title: "Havacılık ve Savunmada Yapay Zeka",
    outcomes: [
      "Havacılık ve Uzayda Yapay Zeka Uygulamalarına Genel Bakış",
      "Mission-Critical AI Kullanım Alanları",
      "Savunma Sistemlerinde Entegrasyon Zorlukları",
      "Havacılık ve Uzay Yapay Zekası İçin Risk Ortamları",
      "Havacılık ve Savunmada AI Deployment Yaşam Döngüsü (lifecycle)",
      "Ulusal Savunmada Yapay Zeka Etiği",
    ],
  },
  {
    number: "03",
    title: "Yapay Zeka Sistemleri için Tehdit Ortamı",
    outcomes: [
      "Yapay Zeka Güvenliği Saldırı Yüzeyleri (AI Attack Surfaces)",
      "Yapay Zekanın Kritik Güvenlik Zafiyetleri",
      "Yapay Zekânın Bütünlüğüne (Integrity) ve Kullanılabilirliğine (Availability) Yönelik Tehditler",
      "Veri Zehirlenmesi ve Arka Kapı Saldırıları (Data Poisoning & Backdoor Attacks)",
      "Model Çıkarma (Extraction) ve Kaçınma (Evasion) Tehditleri",
      "Yapay Zeka Tedarik Zinciri Güvenliği ve Zorlukları",
      "Yapay Zeka Kullanarak Gelişmiş Kalıcı Tehditler (Advanced Persistent Threats)",
    ],
  },
  {
    number: "04",
    title: "Adversarial Robustness Stratejileri",
    outcomes: [
      "Adversarial Attack Temelleri",
      "Model Sağlamlığını (Robustness) İyileştirme Teknikleri",
      "AI Red Teaming Temelleri ve Teknikleri",
      "Havacılık ve Savunmada AI Red Teaming",
      "Model Sağlamlığı için Adversarial Training Yaklaşımları",
      "AI Robustness için Evaluation Metrics",
      "Real-Time Savunma Zorlukları",
      "Encrypted Machine Learning",
      "Federated Learning",
      "XAI: Explainable AI",
    ],
  },
  {
    number: "05",
    title: "Agentic AI ve Foundation Model Güvenliği",
    outcomes: [
      "Large Language Model (LLM) Mimarisi",
      "LLM'lerde Fine-tuning Zafiyetleri",
      "Prompt Injection ve Kötüye Kullanım Senaryoları",
      "Vector ve Embedding Zafiyetleri",
      "LLM'lerin Kritik Güvenlik Zafiyetleri",
      "LLM'ler için Savunma Mekanizmaları",
      "Güvenli API Deployment Teknikleri",
      "Yapay Zeka Model Erişim Kontrolü (Access Control) ve Denetimi (Audit)",
      "Proje Demo: Bir Yapay Zeka (LLM) Modelini Hacklemek",
      "LLM Security vs. Agentic AI Security",
    ],
  },
  {
    number: "06",
    title: "Yapay Zeka Yaşam Döngüsü Güvenliği",
    outcomes: [
      "Güvenli Yapay Zeka Modeli Geliştirme Uygulamaları",
      "Yapay Zeka Sistemleri için Veri Yönetimi",
      "Güvenli Yapay Zeka Eğitim Ortamları ve Altyapıları",
      "Yapay Zekanın Doğrulanması (validation) ve Onaylanması (verification)",
      "Dağıtım Sonrası İzleme (Post-Deployment Monitoring) Araçları",
      "Yama (Patch) Yönetimi ve Versiyonlama",
    ],
  },
  {
    number: "07",
    title: "Havacılık ve Savunmada Yapay Zeka Güvenlik Yönetişimi (Governance)",
    outcomes: [
      "Regülasyon ve Uyumluluk Zorunlulukları",
      "Küresel Yapay Zeka Güvenlik Yönergelerine Genel Bakış",
      "NATO ve Uluslararası Yapay Zeka Standartları",
      "Yapay Zeka Risk Yönetimi Framework'leri",
      "Mevcut Sistemlerle Güvenli Entegrasyon",
      "Yapay Zeka Denetimine Hazırlık ve Dokümantasyon",
    ],
  },
];

// ---------- Aggregate ----------

export const TRAINING_CONTENT: Record<string, TrainingPageContent> = {
  "ai-red-teaming-masterclass": {
    slug: "ai-red-teaming-masterclass",
    title: "AI Red Teaming Masterclass",
    subtitle:
      "Yapay zeka sistemlerine saldırı ve savunma perspektifinden yaklaşın. Adversarial attack'lardan LLM red teaming'e, RAG exploitation'dan multi-agent saldırılarına kadar uçtan uca uygulamalı bir program.",
    typeTag: "Genel Katılım · Kurumsal · 36+ saat",
    whoForVariant: "security",
    curriculumMode: "modules",
    modules: AI_RED_TEAMING_MODULES,
    outcomes: AI_RED_TEAMING_OUTCOMES,
    pricing: AI_RED_TEAMING_PRICING,
    footnote:
      "Bu eğitim Demo ve 'OWASP LLM Top 10' listesindeki konular için birçok uygulama örneği içerir.",
    faq: [
      {
        q: "Bu eğitime katılmak için ön koşullar nelerdir?",
        a: ["Python", "Machine Learning temelleri", "Siber güvenlik temelleri"],
      },
      {
        q: "Eğitim formatı nedir?",
        a: "Online, canlı ve uygulamalı olarak gerçekleşir. 36+ saatlik içerik yoğun program şeklinde planlanır.",
      },
      {
        q: "Eğitim sırasında hangi araçlar kullanılıyor?",
        a: "ART, CleverHans, Foolbox, garak, PyRIT, promptfoo gibi red teaming araçları; ayrıca özel geliştirilmiş adversarial lab ortamları.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "AI Red Teaming Masterclass | Cihan Özhan",
      description:
        "Adversarial saldırılardan LLM red teaming'e, RAG exploitation ve multi-agent saldırılarına kadar uçtan uca uygulamalı AI red teaming eğitimi.",
    },
    applyFormUrl: "https://forms.gle/mW3BLoqTJPYvfZm66",
  },
  "llm-security-agentic-ai-security": {
    slug: "llm-security-agentic-ai-security",
    title: "LLM Security & Agentic AI Security",
    subtitle:
      "Büyük dil modellerinin ve agentic AI sistemlerinin güvenlik zafiyetlerini OWASP LLM Top 10 ve OWASP Agentic AI çerçevesi üzerinden uygulamalı olarak öğrenin.",
    typeTag: "Kurumsal · 2 gün",
    whoForVariant: "security",
    curriculumMode: "modules",
    modules: outcomesToModules(LLM_SECURITY_ITEMS),
    footnote:
      "Bu eğitim Demo ve 'OWASP LLM Top 10' listesindeki konular için birçok uygulama örneği içerir.",
    faq: [
      {
        q: "Bu eğitim kimler için uygun?",
        a: "LLM tabanlı uygulama geliştiren mühendisler, AI güvenliği ile ilgilenen güvenlik uzmanları ve kurumsal AI ekipleri için uygundur.",
      },
      {
        q: "OWASP LLM Top 10 konularının tamamı işleniyor mu?",
        a: "Evet. LLM01–LLM10 arasındaki tüm başlıklar demo ve uygulama örnekleriyle detaylı olarak ele alınır.",
      },
      {
        q: "Agentic AI Security ne kadar kapsıyor?",
        a: "OWASP Agentic AI framework'ü, tehditler ve mitigation stratejileri; multi-agent güvenlik senaryolarıyla birlikte işlenir.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "LLM Security & Agentic AI Security | Cihan Özhan",
      description:
        "OWASP LLM Top 10 ve OWASP Agentic AI çerçevesiyle LLM ve agentic AI güvenliği kurumsal eğitim programı.",
    },
    applyFormUrl: "https://forms.gle/JPgYTeSnrgMrkavi7",
  },
  "ai-ml-security": {
    slug: "ai-ml-security",
    title: "AI / ML Security",
    subtitle:
      "Klasik makine öğrenmesi sistemlerine yönelik adversarial saldırılar, veri zehirlenmesi ve model çalınması gibi tehditleri OWASP Machine Learning Security Top 10 kapsamında inceleyin.",
    typeTag: "Kurumsal · 2 gün",
    whoForVariant: "security",
    curriculumMode: "modules",
    modules: outcomesToModules(AI_ML_SECURITY_ITEMS),
    faq: [
      {
        q: "Bu eğitim kimler için uygun?",
        a: "Klasik ML ve deep learning sistemleri geliştiren ekipler, güvenlik uzmanları ve model doğrulama sorumluları için uygundur.",
      },
      {
        q: "OWASP ML Security Top 10 tamamı işleniyor mu?",
        a: "Evet. ML01–ML10 arasındaki tüm saldırı ve savunma başlıkları demo ve uygulama örnekleriyle işlenir.",
      },
      {
        q: "Ön koşul olarak ne bilmeliyim?",
        a: "Temel makine öğrenmesi kavramları ve Python bilgisi eğitimden en iyi verimi almanızı sağlar.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "AI / ML Security | Cihan Özhan",
      description:
        "OWASP Machine Learning Security Top 10 kapsamında adversarial saldırılar, veri zehirlenmesi ve model çalınması eğitimi.",
    },
    applyFormUrl: "https://forms.gle/rrS2fhGZWCASJbuA6",
  },
  "machine-learning-deployment": {
    slug: "machine-learning-deployment",
    title: "Machine Learning Deployment",
    subtitle:
      "Makine öğrenmesi modellerini üretime almak için MLOps, model serving, optimizasyon ve distributed training'i uçtan uca uygulamalı olarak öğrenin.",
    typeTag: "Kurumsal · 2 gün",
    whoForVariant: "deployment",
    curriculumMode: "modules",
    modules: outcomesToModules(ML_DEPLOYMENT_ITEMS),
    outcomes: ML_DEPLOYMENT_OUTCOMES,
    faq: [
      {
        q: "Bu eğitim kimler için uygun?",
        a: "Modelleri laboratuvardan üretime taşımak isteyen ML/AI mühendisleri, DevOps/MLOps ekipleri ve kurumsal teknoloji birimleri için tasarlandı.",
      },
      {
        q: "Hangi araç ve platformlar işleniyor?",
        a: "TensorFlow Serving, TFX, PyTorch Serve, ONNX ve cloud tabanlı deployment yaklaşımları uygulamalı örneklerle işlenir.",
      },
      {
        q: "Distributed training konularını kapsıyor mu?",
        a: "Evet. Data parallelism, model parallelism, hyperparameter tuning ve ML scaling detaylı olarak ele alınır.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "Machine Learning Deployment | Cihan Özhan",
      description:
        "MLOps, model serving, optimizasyon ve distributed training ile makine öğrenmesi modellerini üretime alma eğitimi.",
    },
    applyFormUrl: "https://forms.gle/eRq57FPJJZhmjDyN9",
  },
  "llm-deployment": {
    slug: "llm-deployment",
    title: "LLM Deployment",
    subtitle:
      "Büyük dil modellerini güvenli ve ölçeklenebilir şekilde üretime almak için LLMOps, model serving, optimizasyon ve distributed inference'ı uygulamalı olarak öğrenin.",
    typeTag: "Kurumsal · 2 gün",
    whoForVariant: "deployment",
    curriculumMode: "modules",
    modules: outcomesToModules(LLM_DEPLOYMENT_ITEMS),
    outcomes: LLM_DEPLOYMENT_OUTCOMES,
    faq: [
      {
        q: "Bu eğitim kimler için uygun?",
        a: "LLM tabanlı ürünleri üretime almak isteyen ML/AI mühendisleri, DevOps/MLOps ekipleri ve kurumsal teknoloji birimleri için uygundur.",
      },
      {
        q: "LLM inference optimizasyonu ne kadar kapsanıyor?",
        a: "Quantization, pruning ve distillation başta olmak üzere üretim ortamı için LLM optimizasyon teknikleri detaylı işlenir.",
      },
      {
        q: "Cloud ve on-prem senaryoları ele alınıyor mu?",
        a: "Evet. Hem cloud tabanlı hem on-prem GPU altyapıları üzerinde LLM deployment yaklaşımları uygulamalı olarak gösterilir.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "LLM Deployment | Cihan Özhan",
      description:
        "LLMOps, model serving, optimizasyon ve distributed inference ile LLM'leri güvenli ve ölçeklenebilir şekilde üretime alın.",
    },
    applyFormUrl: "https://forms.gle/4gejKhPf8gChDtoM9",
  },
  "ai-security-in-defense": {
    slug: "ai-security-in-defense",
    title: "Savunma Sanayiinde Yapay Zeka Güvenliği",
    subtitle:
      "Havacılık ve savunma sistemlerinde yapay zekanın güvenliği, risk yönetimi ve yönetişimini; adversarial robustness'tan agentic AI güvenliğine kadar kapsamlı şekilde ele alan kurumsal program.",
    typeTag: "Kurumsal · 3 gün",
    whoForVariant: "security",
    curriculumMode: "modules",
    modules: AI_SEC_DEFENSE_MODULES,
    outcomes: AI_SEC_DEFENSE_OUTCOMES,
    faq: [
      {
        q: "Bu program kimler için tasarlandı?",
        a: "Havacılık ve savunma sanayii, kamu kurumları ve mission-critical AI sistemleri geliştiren kurumsal ekipler için tasarlanmıştır.",
      },
      {
        q: "NATO ve uluslararası standartlar kapsanıyor mu?",
        a: "Evet. NATO ve uluslararası AI güvenlik standartları, risk yönetimi framework'leri ve uyumluluk zorunlulukları programın önemli bir bölümüdür.",
      },
      {
        q: "Program süresi ve formatı nedir?",
        a: "Kurumsal olarak 3 günlük yoğun bir program olarak planlanır ve talebe göre online veya yerinde uygulanabilir.",
      },
      PRICE_FAQ,
    ],
    head: {
      title: "Savunma Sanayiinde Yapay Zeka Güvenliği | Cihan Özhan",
      description:
        "Havacılık ve savunma sistemlerinde yapay zeka güvenliği, risk yönetimi ve yönetişimini kapsayan kurumsal eğitim programı.",
    },
    applyFormUrl: "https://forms.gle/Uf7sc6YU51e1at1w5",
  },
};
