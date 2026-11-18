import type { LucideIcon } from "lucide-react";
import { Code2, FileText, Github, Linkedin, Link as LinkIcon, Mail } from "lucide-react";

export type Stage = {
  id: string;
  label: string;
  range: string;
  log: string;
};

export type Skill = {
  name: string;
  tone: "blue" | "green" | "silver";
  log: string;
  level: string;
  group: "Languages" | "Backend & Web" | "Cloud & DevOps" | "AI & ML" | "Computer Science";
  /** Where the skill was actually used, shown as the "Proof" stat. Left out when there is nothing specific to point to. */
  proof?: string;
};

export type ExperienceItem = {
  company: string;
  meta: string;
  period: string;
  title: string;
  highlights: string[];
  metric: string;
  stack: string[];
  signal: string;
};

export type OpenSourcePullRequest = {
  number: number;
  kind: "fix" | "test" | "build";
  scope: string;
  summary: string;
  merged: string;
  additions: number;
  deletions: number;
};

export type OpenSourceProject = {
  name: string;
  /** GitHub "owner/name"; PR links are built from it. */
  repo: string;
  tagline: string;
  logo: string;
  accent: string;
  language: string;
  stars: string;
  pullRequests: OpenSourcePullRequest[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  label: string;
};

export type Project = {
  slug: string;
  name: string;
  stack: string;
  metric: string;
  copy: string;
  signal: string;
  problem: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  proofPoints: string[];
  media: ProjectMedia[];
  architecture: string[];
  decisions: string[];
  links: ProjectLink[];
};

export type CompetitiveProfile = {
  platform: string;
  handle: string;
  rating: string;
  tier: string;
  href: string;
  /** Best contest finish, short enough for a stat cell, e.g. "Global #26 / 12k+". */
  best: string;
  detail: string;
};

export type ContestRank = {
  rank: number;
  field: string;
  contest: string;
  platform: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const siteProfile = {
  name: "Yuvraj Tiwary",
  title: "Software Development Engineer | System Architect",
  location: "Noida, India",
  email: "yuvrajtiwary699@gmail.com",
  siteUrl: "https://github.com/yuvrajtiwary-bitmesraece",
  resumeHref: "https://drive.google.com/file/d/1ch0AllFRaP6Al6crY68WwQF8LYdyfxIs/view?usp=sharing",
  githubHref: "https://github.com/yuvrajtiwary-bitmesraece"
};

export const stages: Stage[] = [
  { id: "hero", label: "Initialization", range: "0-15%", log: "Identity core waking from cold storage." },
  { id: "engine", label: "Engine Room", range: "15-35%", log: "Education substrate and architecture layer exposed." },
  { id: "stack", label: "Stack Explosion", range: "35-55%", log: "Runtime stack separated into orbiting service bands." },
  { id: "timeline", label: "Timeline", range: "55-75%", log: "Career fragments aligning into a data pillar." },
  { id: "opensource", label: "Open Source", range: "75%", log: "Upstream patches merged into shared infrastructure." },
  { id: "showcase", label: "Showcase", range: "75-90%", log: "Product viewport online. Holographic modules ready." },
  { id: "handshake", label: "Handshake", range: "90-100%", log: "Core reassembled. Contact protocol open." }
];

export const bootLines = [
  "Booting UKG Workforce Core",
  "Initializing API Gateway",
  "Mapping BIT Mesra substrate",
  "Linking Kafka-WebSocket channel",
  "System Ready"
];

export const skills: Skill[] = [
  // Languages
  { name: "C++", tone: "silver", level: "Competitive Programming", group: "Languages", proof: "CodeChef 5★", log: "Main contest language: CodeChef max rating 2034 (5★) and LeetCode max rating 2042 (Knight)." },
  { name: "Python", tone: "blue", level: "Automation & ML", group: "Languages", proof: "UKG pipeline", log: "UKG's API failure-detection pipeline, the wound-healing analysis and the U-Net dental X-ray model." },
  { name: "TypeScript", tone: "silver", level: "Typed Backends", group: "Languages", proof: "NestJS · Puppeteer", log: "Merged fixes in NestJS and Puppeteer, and the AI Mock Interview codebase." },
  { name: "JavaScript", tone: "green", level: "Node & Web Runtime", group: "Languages", proof: "Uptime Kuma PRs", log: "Three merged Uptime Kuma fixes covering SMSManager, SIGNL4 and IPv6 ping tests." },
  { name: "Java", tone: "blue", level: "JVM Services", group: "Languages", proof: "Stirling-PDF PRs", log: "Stirling-PDF fix placing page numbers correctly on rotated and cropped pages, with tests." },
  { name: "C", tone: "silver", level: "Systems Base", group: "Languages", log: "Memory-aware programming foundation and operating-system level reasoning." },
  // Backend & Web
  { name: "Node.js", tone: "green", level: "Server Runtime", group: "Backend & Web", proof: "3 OSS projects", log: "Server-side JavaScript across NestJS, Puppeteer and Uptime Kuma contributions." },
  { name: "NestJS", tone: "blue", level: "Upstream Contributor", group: "Backend & Web", proof: "2 merged PRs", log: "Fixed repeated-header decoding in the Kafka microservices transport and kept REPL functions after .clear." },
  { name: "Next.js", tone: "silver", level: "Full-stack Framework", group: "Backend & Web", proof: "AI Mock Interview", log: "App Router and server actions with per-user ownership checks in AI Mock Interview; also this portfolio." },
  { name: "React.js", tone: "blue", level: "UI Layer", group: "Backend & Web", proof: "This portfolio", log: "Component-driven interfaces, including this site's scroll-linked 3D experience." },
  { name: "PostgreSQL", tone: "blue", level: "Relational Store", group: "Backend & Web", proof: "AI Mock Interview", log: "AI Mock Interview's data layer, with interview deletes done in a single transaction." },
  { name: "Drizzle", tone: "green", level: "Type-safe ORM", group: "Backend & Web", proof: "AI Mock Interview", log: "Schema and queries for AI Mock Interview's PostgreSQL database." },
  { name: "REST APIs", tone: "silver", level: "API Design", group: "Backend & Web", proof: "UKG", log: "Apigee API proxies at UKG, plus REST services and integrations across projects." },
  { name: "Spring Boot", tone: "green", level: "Familiar", group: "Backend & Web", proof: "Stirling-PDF", log: "Service architecture on the JVM; Stirling-PDF's backend runs on Spring Boot." },
  { name: "Kafka", tone: "silver", level: "Familiar", group: "Backend & Web", proof: "NestJS #18521", log: "Event streaming; fixed how NestJS's Kafka transport decodes repeated message headers." },
  // Cloud & DevOps
  { name: "GCP", tone: "blue", level: "Cloud Platform", group: "Cloud & DevOps", proof: "UKG", log: "Apigee proxies deployed to dev, staging and production environments on Google Cloud." },
  { name: "Apigee", tone: "green", level: "API Gateway", group: "Cloud & DevOps", proof: "UKG", log: "Proxy deployments, Apigee Analytics call volumes and zero-downtime revision releases through the Management API." },
  { name: "Jenkins", tone: "silver", level: "CI/CD", group: "Cloud & DevOps", proof: "UKG", log: "Maintained the pipelines that deploy Apigee proxies, and debugged failed builds." },
  { name: "Splunk", tone: "green", level: "Log Analytics", group: "Cloud & DevOps", proof: "UKG", log: "Splunk exports feeding the detector that flags sustained 5xx failures." },
  { name: "Grafana", tone: "blue", level: "Metrics", group: "Cloud & DevOps", proof: "UKG", log: "Grafana metrics as a signal in the API monitoring pipeline." },
  { name: "Nginx", tone: "green", level: "Web Server", group: "Cloud & DevOps", proof: "UKG", log: "Nginx access logs as the raw signal for sustained 5xx failure detection." },
  { name: "Git", tone: "silver", level: "Version Control", group: "Cloud & DevOps", proof: "9 merged PRs", log: "Small, reviewable pull requests that got through maintainer review in four projects." },
  { name: "Linux", tone: "blue", level: "OS & Tooling", group: "Cloud & DevOps", log: "Shells, servers and day-to-day development tooling." },
  // AI & ML
  { name: "Claude Code", tone: "silver", level: "AI Engineering", group: "AI & ML", proof: "62 defects filed", log: "Turned flagged API failures into Jira tickets at UKG, skipping duplicates." },
  { name: "MCP", tone: "green", level: "Tool Integration", group: "AI & ML", proof: "Jira MCP", log: "Jira MCP integration that let Claude Code file and de-duplicate defects." },
  { name: "Gemini API", tone: "blue", level: "LLM API", group: "AI & ML", proof: "AI Mock Interview", log: "JSON mode with a response schema for interview questions and answer ratings." },
  { name: "PyTorch", tone: "green", level: "Deep Learning", group: "AI & ML", proof: "PixelGenie", log: "Model execution and optimisation for Stable Diffusion, CLIP and VGG19 experiments." },
  { name: "TensorFlow", tone: "silver", level: "Deep Learning", group: "AI & ML", log: "Neural-network training and experimentation." },
  { name: "OpenCV", tone: "blue", level: "Computer Vision", group: "AI & ML", log: "Image processing and computer-vision pipelines." },
  { name: "Hugging Face", tone: "silver", level: "Model Hub", group: "AI & ML", proof: "PixelGenie", log: "Diffusers and Transformers for Stable Diffusion and CLIP." },
  // Computer Science
  { name: "DSA", tone: "green", level: "Problem Solving", group: "Computer Science", proof: "Global rank 26", log: "Contest-tested: global rank 26 of 12,000+ in CodeChef Starters 136 (Div 2)." },
  { name: "OOP", tone: "green", level: "Coursework", group: "Computer Science", proof: "Coursework", log: "Object-oriented design principles and maintainable abstractions." },
  { name: "OS", tone: "silver", level: "Coursework", group: "Computer Science", proof: "Coursework", log: "Process, memory, file-system, and concurrency fundamentals." },
  { name: "DBMS", tone: "blue", level: "Coursework", group: "Computer Science", proof: "Coursework", log: "Relational modeling, transactions, indexes, and query design." },
  { name: "Networks", tone: "silver", level: "Coursework", group: "Computer Science", proof: "Coursework", log: "Transport, routing, sockets, and distributed-system foundations." }
];

export const contestRanks: ContestRank[] = [
  { rank: 26, field: "12,000+", contest: "Starters 136 (Div 2)", platform: "CodeChef" },
  { rank: 35, field: "10,000+", contest: "Starters 139 (Div 2)", platform: "CodeChef" },
  { rank: 492, field: "30,000+", contest: "Biweekly 133", platform: "LeetCode" }
];

export const competitiveProfiles: CompetitiveProfile[] = [
  {
    platform: "CodeChef",
    handle: "bhaiya_2004",
    rating: "2034",
    tier: "5 stars",
    href: "https://www.codechef.com/users/bhaiya_2004",
    best: "Global #26 / 12k+",
    detail: "Max rating 2034 (5★). Global rank 26 of 12,000+ in Starters 136 (Div 2) and 35 of 10,000+ in Starters 139 (Div 2)."
  },
  {
    platform: "LeetCode",
    handle: "Baabu_Bhaiya_Ki_Jai",
    rating: "2042",
    tier: "Knight",
    href: "https://leetcode.com/u/Baabu_Bhaiya_Ki_Jai/",
    best: "Global #492 / 30k+",
    detail: "Max rating 2042 (Knight). Global rank 492 of 30,000+ in Biweekly Contest 133."
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "UKG",
    meta: "Software Engineering Intern · Apigee API Platform",
    period: "Jan 2026 - Jul 2026",
    title: "Automated API failure detection and Apigee delivery on GCP",
    highlights: [
      "Built a Python monitoring pipeline over Nginx logs, Splunk exports and Grafana metrics that flags sustained 5xx failures, with a separate threshold for each API scaled to its call volume from Apigee Analytics.",
      "Routed flagged failures to Claude Code through a Jira MCP integration that files tickets and skips duplicates: 62 defects filed in 4 months, about 65–70% confirmed as real by senior-engineer review.",
      "Maintained the Jenkins CI/CD pipelines that deploy Apigee API proxies to dev, staging and production on GCP, debugging failed builds and supporting zero-downtime revision releases through the Apigee Management API."
    ],
    metric: "62 defects filed in 4 months",
    stack: ["Python", "Apigee", "GCP", "Splunk", "Grafana", "Nginx", "Jenkins", "Claude Code", "Jira MCP"],
    signal: "API reliability automation"
  },
  {
    company: "ECE SIPAR",
    meta: "Computer Vision Intern · BIT Mesra",
    period: "May 2025 - Jul 2025",
    title: "Medical image analysis: drug efficacy and dental X-ray segmentation",
    highlights: [
      "Measured wound healing for a RIMS Ranchi drug-efficacy study on diabetic rats (experimental drug vs. standard drug vs. natural healing): annotated wound boundaries as polygons, computed their areas with the Shoelace formula, and plotted percent healed over 13 days. By Day 13 the experimental drug group was 98.7% healed, against 83.9% for the standard drug and 56.2% for natural healing.",
      "Trained a custom U-Net to segment third molars (wisdom teeth) on panoramic dental X-rays, using 800–900 images annotated by my professor, and reached about 72% IoU after a warm-up phase on circular objects from a COCO-derived dataset."
    ],
    metric: "~72% IoU on dental X-rays",
    stack: ["Python", "U-Net", "Image Segmentation", "Pandas", "NumPy", "Matplotlib", "VGG Image Annotator"],
    signal: "Computer vision for medical research"
  }
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "NestJS",
    repo: "nestjs/nest",
    tagline: "Progressive Node.js framework for building server-side applications.",
    logo: "/logos/oss/nestjs.png",
    accent: "#ea2845",
    language: "TypeScript",
    stars: "77k",
    pullRequests: [
      {
        number: 18521,
        kind: "fix",
        scope: "microservices",
        summary: "Fixed the Kafka microservices transport so every value of a repeated message header is decoded, not just one.",
        merged: "Nov 16, 2026",
        additions: 31,
        deletions: 1
      },
      {
        number: 18547,
        kind: "fix",
        scope: "core",
        summary: "Kept Nest's built-in REPL functions available after running .clear.",
        merged: "Nov 18, 2026",
        additions: 87,
        deletions: 0
      }
    ]
  },
  {
    name: "Puppeteer",
    repo: "puppeteer/puppeteer",
    tagline: "JavaScript API for controlling Chrome and Firefox.",
    logo: "/logos/oss/puppeteer.png",
    accent: "#00d8a2",
    language: "TypeScript",
    stars: "96k",
    pullRequests: [
      {
        number: 15825,
        kind: "fix",
        scope: "network",
        summary: "Fixed request interception in Cooperative Intercept Mode so the highest-priority handler's payload is the one applied, with unit tests.",
        merged: "Nov 18, 2026",
        additions: 142,
        deletions: 6
      },
      {
        number: 15812,
        kind: "build",
        scope: "windows",
        summary: "Made the build's clean script run through Node so it works on Windows.",
        merged: "Nov 17, 2026",
        additions: 9,
        deletions: 9
      }
    ]
  },
  {
    name: "Stirling-PDF",
    repo: "Stirling-Tools/Stirling-PDF",
    tagline: "Self-hosted toolkit for editing, converting and securing PDFs.",
    logo: "/logos/oss/stirling-pdf.png",
    accent: "#ff6b3d",
    language: "Java · Spring Boot",
    stars: "97k",
    pullRequests: [
      {
        number: 8896,
        kind: "fix",
        scope: "page-numbers",
        summary: "Fixed page numbers landing in the wrong place on rotated and cropped pages by honouring /Rotate and the CropBox, with tests.",
        merged: "Nov 17, 2026",
        additions: 234,
        deletions: 2
      },
      {
        number: 8803,
        kind: "test",
        scope: "stamp",
        summary: "Added a regression test for stamping text that contains periods and umlauts.",
        merged: "Nov 15, 2026",
        additions: 21,
        deletions: 0
      }
    ]
  },
  {
    name: "Uptime Kuma",
    repo: "louislam/uptime-kuma",
    tagline: "Self-hosted uptime monitoring with alerts to 90+ notification services.",
    logo: "/logos/oss/uptime-kuma.png",
    accent: "#5cdd8b",
    language: "Node.js",
    stars: "95k",
    pullRequests: [
      {
        number: 8174,
        kind: "fix",
        scope: "smsmanager",
        summary: "Fixed SMSManager alerts ignoring the configured gateway type.",
        merged: "Nov 16, 2026",
        additions: 29,
        deletions: 1
      },
      {
        number: 8173,
        kind: "fix",
        scope: "signl4",
        summary: "Fixed SIGNL4 alerts using a nonexistent monitor ID; they now send the real monitor ID as the alert's external ID.",
        merged: "Nov 16, 2026",
        additions: 43,
        deletions: 2
      },
      {
        number: 8148,
        kind: "test",
        scope: "ping",
        summary: "Fixed the IPv6 bracket ping test so it passes on machines that have IPv6.",
        merged: "Nov 12, 2026",
        additions: 4,
        deletions: 2
      }
    ]
  }
];

export const openSourceProfileHref =
  "https://github.com/search?q=author%3Ayuvrajtiwary-bitmesraece+is%3Apr+is%3Amerged&type=pullrequests";

export const projects: Project[] = [
  {
    slug: "ai-mock-interview",
    name: "AI Mock Interview",
    stack: "Next.js 15 + PostgreSQL + Gemini",
    metric: "v1.0.0 shipped with CI and tests",
    signal: "Secure server actions, structured AI output",
    copy: "A GenAI interview simulator: Gemini writes role-specific questions, you answer out loud, and every answer comes back with a rating and written feedback.",
    problem:
      "Practising interviews alone gives no feedback. The app fixes that, but its first version called the database and Gemini straight from the browser, which exposed both secrets in client JavaScript, and its interview flow had bugs that cut answers short and saved broken questions.",
    role: "Full-stack engineer (security, reliability and release)",
    challenge: "Make the app safe to deploy publicly and reliable end to end, without a rewrite, through small reviewable pull requests.",
    solution:
      "Moved every database and Gemini call into Next.js server actions with per-user ownership checks, put Gemini in JSON mode with a response schema, fixed the recording and feedback bugs, and added CI, tests, linting and automated releases.",
    impact:
      "Shipped a versioned v1.0.0 release across 7 merged pull requests: no secrets left in the client bundle, vulnerable dependencies patched, and every pull request linted, tested and built on GitHub Actions.",
    proofPoints: [
      "Server actions with ownership checks",
      "Gemini JSON mode + response schema",
      "Auto-restarting speech capture",
      "CI: lint, test, build on every PR",
      "Automated GitHub Releases",
      "v1.0.0 release"
    ],
    media: [
      {
        src: "/projects/ai-mock-interview-01.jpg",
        alt: "AI Mock Interview landing page with AI interview preparation hero and feature cards",
        label: "Landing Surface"
      },
      {
        src: "/projects/ai-mock-interview-02.jpg",
        alt: "AI Mock Interview dashboard with previous mock interviews and create interview panel",
        label: "Dashboard Flow"
      }
    ],
    architecture: [
      "Next.js 15 App Router with Clerk authentication; all data access runs in server actions that check the signed-in user owns the interview.",
      "PostgreSQL through Drizzle ORM; deleting an interview removes its answers in the same transaction.",
      "Gemini in JSON mode with a response schema for both question generation and answer ratings (whole numbers from 1 to 5); questions are validated before they are saved.",
      "Browser speech recognition restarts automatically when the browser pauses it, so long answers are kept in full; re-recording replaces the previous answer."
    ],
    decisions: [
      "Moved secrets server-side (DATABASE_URL, GEMINI_API_KEY) and rotated the keys the old client bundle had exposed.",
      "Asked Gemini for schema-checked JSON instead of parsing free text, so a malformed response can no longer create an unusable interview.",
      "Made the question count configurable (INTERVIEW_QUESTION_COUNT, 1–10) after finding it came from an undefined variable.",
      "Added unit tests, ESLint, a CI workflow, Dependabot and tag-driven GitHub Releases, then shipped the work as v1.0.0 with a changelog."
    ],
    links: [
      { label: "Live Demo", href: "https://ai-mock-interview-dev2.vercel.app/" },
      { label: "Source", href: "https://github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview" },
      { label: "v1.0.0 Release", href: "https://github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview/releases/tag/v1.0.0" }
    ]
  },
  {
    slug: "pixelgenie",
    name: "PixelGenie",
    stack: "PyTorch + Stable Diffusion + CLIP",
    metric: "Text-to-image generation and evaluation",
    signal: "Diffusion models, VGG19, CLIP similarity scoring",
    copy: "A Generative AI image creation and evaluation pipeline combining text-to-image generation, neural style transfer, and vision-language models.",
    problem:
      "Generating images from text prompts is only one part of the workflow. Understanding how closely generated images align with the intended prompts and experimenting with different visual styles adds another layer of evaluation.",
    role: "Generative AI Developer",
    challenge: "Explore multiple image-generation approaches and build a workflow to examine prompt-image alignment while maintaining reproducibility across experiments.",
    solution: "Integrated Stable Diffusion v1.5 for text-to-image generation, CLIP for image-text similarity analysis, and VGG19 for neural style transfer. Added seed-controlled generation and visual evaluation using Matplotlib.",
    impact: "Built an end-to-end experimental pipeline for generating images from text prompts, producing controlled variations, and evaluating semantic alignment between prompts and generated images.",
    proofPoints: ["Stable Diffusion text-to-image generation", "CLIP-based image-text similarity evaluation", "Seed-controlled image generation", "VGG19-based neural style transfer", "Visual comparison and evaluation"],
    media: [
      {
        src: "/projects/pixelgenie-01.png",
        alt: "Illustrates how content and style images are merged using VGG19 to produce a stylized output image.",
        label: "Hero System"
      },
      {
        src: "/projects/pixelgenie-02.png",
        alt: "A single 512x512 image generated from the prompt: “a beautiful fantasy landscape, digital art” using the Stable Diffusion model.",
        label: "Flight Path"
      }
    ],
    architecture: [
      "Stable Diffusion v1.5 through Hugging Face Diffusers generates images from natural-language prompts.",
    "CLIP through Hugging Face Transformers evaluates semantic alignment between generated images and their corresponding text prompts.",
    "VGG19 extracts deep visual features and Gram matrices for neural style transfer.",
    "PyTorch handles model execution, tensor operations, gradient computation, and optimization.",
    "Matplotlib and Pandas support visual comparisons and structured evaluation of generated outputs."
    ],
    decisions: [
      "Used pretrained Stable Diffusion instead of training a diffusion model from scratch.",
    "Integrated CLIP to explore semantic image-text alignment beyond visual inspection.",
    "Introduced random seed control to make generation experiments more reproducible.",
    "Included VGG19-based neural style transfer to explore a complementary image-generation technique.",
    "Combined generation, evaluation, and visualization into one experimental workflow."
    ],
    links: [
      { label: "Live Demo", href: "https://colab.research.google.com/drive/1Hyy3RaEJj0XGzTMUBbF8bCO92T-fPhwP?usp=sharing" },
      { label: "Source", href: "https://github.com/yuvrajtiwary-bitmesraece/PixelGenie" }
    ]
  },
  {
    slug: "netsentinelx",
    name: "NetSentinelX",
    stack: "Python + Scikit-learn + XGBoost + NSL-KDD",
    metric: "ML-powered network intrusion detection",
    signal: "Anomaly detection, attack classification, model benchmarking",
    copy: "An intelligent network intrusion detection system that leverages machine learning to distinguish legitimate network traffic from malicious activity.",
    problem:
      "Traditional network security systems struggle to identify evolving attack patterns and distinguish malicious traffic from legitimate network behavior. Detecting anomalies across high-dimensional network traffic requires models that can capture both known attack signatures and unusual behavioral patterns.",
    role: "Machine Learning Engineer and Model Developer",
    challenge: "Build a reliable intrusion detection pipeline capable of identifying anomalous network traffic while addressing class imbalance, high-dimensional features, and the varying statistical patterns of cyberattacks.",
    solution: "Developed a machine learning-based intrusion detection pipeline using the NSL-KDD benchmark dataset. Implemented and benchmarked five algorithms — XGBoost, Random Forest, K-Nearest Neighbors, Support Vector Machine, and Elliptic Envelope — combining supervised classification with unsupervised anomaly detection. Applied categorical encoding, feature scaling, class imbalance handling, and performance evaluation using precision, recall, F1-score, and confusion matrices.",
    impact: "Established a comparative intrusion detection framework that evaluates multiple learning paradigms, identifies effective anomaly detection strategies, and provides a foundation for explainable, data-driven network security.",
    proofPoints: ["NSL-KDD network intrusion benchmark",
    "5 ML models benchmarked",
    "Supervised + unsupervised learning",
    "Class imbalance handling",
    "Precision, Recall & F1 evaluation",
    "XGBoost feature importance analysis"],
    media: [
      {
        src: "/projects/netsentinelx-01.png",
        alt: "The final comparison of classification reports provided by different models.",
        label: "Campus Hero"
      },
      {
        src: "/projects/netsentinelx-02.png",
        alt: "The raw NSL-KDD dataset for training",
        label: "Guide Modules"
      }
    ],
    architecture: [
      "NSL-KDD dataset ingestion and preprocessing pipeline with categorical encoding, missing-value handling, and feature normalization.",
    "Supervised detection layer using XGBoost, Random Forest, KNN, and SVM to classify network connections as normal or anomalous.",
    "Unsupervised anomaly detection using Elliptic Envelope to identify statistically unusual network traffic without training on class labels.",
    "Evaluation layer comparing precision, recall, F1-score, accuracy, and confusion matrices across all five models."
    ],
    decisions: [
      "Selected NSL-KDD as a benchmark dataset for evaluating network intrusion detection algorithms.",
    "Compared fundamentally different learning approaches instead of relying on a single classifier.",
    "Prioritized anomaly-class precision, recall, and F1-score over accuracy alone due to class imbalance.",
    "Used class weighting in supervised models to reduce bias toward the majority class.",
    "Included unsupervised detection to investigate whether statistical outlier detection could identify suspicious traffic independently of ground-truth labels."
    ],
    links: [
      { label: "Live Demo", href: "https://colab.research.google.com/drive/1pZeHegKnFokKJvYJwMdYRulSFJUfvING?usp=sharing" },
      { label: "Source", href: "https://github.com/yuvrajtiwary-bitmesraece/NetSentinelX" }
    ]
  }
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yuvraj-tiwary-426279254", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/yuvrajtiwary-bitmesraece", icon: Github },
  { label: "CodeChef", href: "https://www.codechef.com/users/bhaiya_2004", icon: Code2 },
  { label: "Contact", href: `mailto:${siteProfile.email}`, icon: Mail },
  { label: "Resume", href: siteProfile.resumeHref, icon: FileText }
];
