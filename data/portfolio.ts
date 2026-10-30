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
  group: "Languages" | "Frontend" | "Backend" | "Cloud" | "Tools" | "Coursework";
};

export type ExperienceItem = {
  company: string;
  meta: string;
  period: string;
  title: string;
  details: string;
  metric: string;
  stack: string[];
  signal: string;
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
  resumeHref: "https://drive.google.com/file/d/1dSfXDfcK14qpaoX3_lazfjNp4KAZ1_DW/view?usp=sharing"
};

export const stages: Stage[] = [
  { id: "hero", label: "Initialization", range: "0-15%", log: "Identity core waking from cold storage." },
  { id: "engine", label: "Engine Room", range: "15-35%", log: "Education substrate and architecture layer exposed." },
  { id: "stack", label: "Stack Explosion", range: "35-55%", log: "Runtime stack separated into orbiting service bands." },
  { id: "timeline", label: "Timeline", range: "55-75%", log: "Career fragments aligning into a data pillar." },
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
  { name: "C++", tone: "silver", level: "Algorithmic Kernel", group: "Languages", log: "Low-level systems thinking and competitive problem solving." },
  { name: "C", tone: "silver", level: "Systems Base", group: "Languages", log: "Memory-aware programming foundation and operating-system level reasoning." },
  { name: "Python", tone: "blue", level: "Automation Layer", group: "Languages", log: "Fast scripting, data handling, and AI/product glue code." },
  { name: "JavaScript", tone: "green", level: "Runtime Web", group: "Languages", log: "Browser and Node.js fluency for product-grade interfaces." },
  { name: "TypeScript", tone: "silver", level: "Typed Product Layer", group: "Languages", log: "Safer full-stack development with explicit contracts." },
  { name: "React.js", tone: "blue", level: "Interface Layer", group: "Frontend", log: "Responsive interfaces with animation-aware interaction patterns." },
  { name: "Next.js", tone: "silver", level: "Product Shell", group: "Frontend", log: "Full-stack product surfaces, AI workflows, and optimized rendering." },
  { name: "GSAP", tone: "green", level: "Motion Driver", group: "Frontend", log: "Timeline-based animation and scroll-linked storytelling." },
  { name: "Tailwind CSS", tone: "blue", level: "Design System Utility", group: "Frontend", log: "Fast, consistent styling for modern responsive products." },
  { name: "Node.js", tone: "green", level: "API Runtime", group: "Backend", log: "Server-side JavaScript for APIs, tools, and integration layers." },
  { name: "Spring Boot", tone: "green", level: "Service Fabric", group: "Backend", log: "Service architecture, integrations, and clean domain boundaries." },
  { name: "PostgreSQL", tone: "blue", level: "Relational Store", group: "Backend", log: "Structured persistence for reliable product data." },
  { name: "MySQL", tone: "silver", level: "Relational Store", group: "Backend", log: "Database modeling and query fundamentals." },
  { name: "Azure", tone: "blue", level: "Cloud Platform", group: "Cloud", log: "Cloud delivery and Azure DevOps experience." },
  { name: "Docker", tone: "green", level: "Runtime Capsule", group: "Cloud", log: "Containerized development flows and predictable runtime packaging." },
  { name: "Kubernetes", tone: "blue", level: "Cluster Control", group: "Cloud", log: "Cloud-native deployment literacy and scalable platform awareness." },
  { name: "Git", tone: "silver", level: "Version Control", group: "Tools", log: "Clean source control and collaborative development workflow." },
  { name: "GitHub", tone: "blue", level: "Code Platform", group: "Tools", log: "Project hosting, collaboration, and open-source style workflows." },
  { name: "GitLab", tone: "green", level: "DevOps Platform", group: "Tools", log: "Repository and delivery workflow literacy." },
  { name: "OS", tone: "silver", level: "Coursework", group: "Coursework", log: "Process, memory, file-system, and concurrency fundamentals." },
  { name: "DBMS", tone: "blue", level: "Coursework", group: "Coursework", log: "Relational modeling, transactions, indexes, and query design." },
  { name: "OOP", tone: "green", level: "Coursework", group: "Coursework", log: "Object-oriented design principles and maintainable abstractions." },
  { name: "Networks", tone: "silver", level: "Coursework", group: "Coursework", log: "Transport, routing, sockets, and distributed-system foundations." }
];

export const competitiveProfiles: CompetitiveProfile[] = [
  {
    platform: "Codechef",
    handle: "bhaiya_2004",
    rating: "2034",
    tier: "5 stars",
    href: "https://www.codechef.com/users/bhaiya_2004"
  },
  {
    platform: "LeetCode",
    handle: "Baabu_Bhaiya_Ki_Jai",
    rating: "2042",
    tier: "Knight",
    href: "https://leetcode.com/u/Baabu_Bhaiya_Ki_Jai/"
  },
  {
    platform: "AtCoder",
    handle: "Yuvraj_2004",
    rating: "512",
    tier: "8 Kyu",
    href: "https://atcoder.jp/users/Yuvraj_2004"
  }
];

export const experience: ExperienceItem[] = [
  {
    company: "UKG",
    meta: "Software Development Engineer Intern - APIGEE",
    period: "Jan 2026 - Jul 2026",
    title: "API Gateway Engineering and Production Automation",
    details:
      "Automated API health monitoring using Selenium, Splunk, and Atlassian REST APIs, generating 62 JIRA defects and incidents while improving gateway observability and streamlining Apigee deployments across GCP environments.",
    metric: "62 JIRA defects & incidents",
    stack: ["Java", "Apigee X", "GCP", "Splunk", "Selenium", "REST APIs", "Jenkins"],
    signal: "Enterprise backend reliability"
  },
  {
    company: "ECE SIPAR",
    meta: "Computer Vision Research Intern",
    period: "May 2025 - Jul 2025",
    title: "CV-driven diabetic wound healing analysis",
    details:
      "Developed a computer vision pipeline to analyze wound-healing progression in diabetic Wistar rats, using image processing and pixel-based wound area estimation across treatment groups.",
    metric: "84 experimental image records analyzed",
    stack: ["Python", "OpenCV", "Computer Vision", "Image Processing", "NumPy"],
    signal: "Applied AI research and medical image analysis"
  }
];

export const projects: Project[] = [
  {
    slug: "ai-mock-interview",
    name: "AI Mock Interview",
    stack: "Next.js 14 + Gemini AI",
    metric: "500+ interviews processed",
    signal: "Voice, rubric, feedback loop",
    copy: "A holographic interview platform that converts preparation into structured, AI-assisted feedback loops.",
    problem:
      "Interview preparation is usually unstructured: candidates practice answers, but do not get consistent scoring, live transcripts, or actionable performance reports.",
    role: "Full-stack product engineer",
    challenge: "Create a realistic practice loop without making the AI feel like an ungrounded chatbot.",
    solution: "Built a guided interview flow with generated questions, live transcripts, rubric-style feedback, and session reports.",
    impact: "Processed 500+ mock interviews and turned repeat practice into measurable candidate feedback.",
    proofPoints: ["AI interviewer flow", "Live transcript surface", "Performance report loop"],
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
      "Smart web app that simulates real interviews using an AI-driven interviewer.",
      "Question flow supports technical and HR practice with live transcripts.",
      "Performance reports convert responses into feedback that users can act on."
    ],
    decisions: [
      "Kept feedback structured instead of purely conversational so results are easy to compare over time.",
      "Designed the UI around high-pressure interview cadence: prompt, answer, score, reflect, retry.",
      "Used the 500+ processed interviews metric as the primary proof point."
    ],
    links: [
      { label: "Live Demo", href: "https://ai-mock-interview-dev2.vercel.app/" },
      { label: "Source", href: "https://github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview" }
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
  { label: "Codechef", href: "https://www.codechef.com/users/bhaiya_2004", icon: Code2 },
  { label: "Contact", href: `mailto:${siteProfile.email}`, icon: Mail },
  { label: "Resume", href: siteProfile.resumeHref, icon: FileText }
];
