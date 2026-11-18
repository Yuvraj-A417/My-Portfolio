# Yuvraj Tiwary - Cinematic Engineering Portfolio

An ultra-premium, scroll-driven portfolio for **Yuvraj Tiwary**, Software Development Engineer and System Architect. The site is designed as a luxury-tech product launch blended with an interactive engineering blueprint: cinematic motion, WebGL architecture visuals, recruiter-ready case studies, competitive programming signals, and production-grade SEO/performance hardening.

Live site: [my-portfolio-yuvraj-7f72.vercel.app/](https://my-portfolio-yuvraj-7f72.vercel.app/)

Resume: [View Resume](https://drive.google.com/file/d/1XqxtkYkbJN6nFfeK4k5__GOxQ5ctma8c/view)

LinkedIn: [Yuvraj Tiwary](https://www.linkedin.com/in/yuvraj-tiwary-426279254)

GitHub: [Adi1816](https://github.com/yuvrajtiwary-bitmesraece)

---

## Overview

This portfolio is built to communicate engineering depth in the first few seconds, then reward deeper exploration through structured storytelling. It presents Yuvraj's profile across six scroll-linked stages:

| Stage | Purpose | Experience Beat |
| --- | --- | --- |
| Initialization | Establish identity and seniority signal | Hero, UKG status, cinematic system core |
| Engine Room | Explain academic and systems foundation | BIT Mesra, Electronics, CGPA 7.59, marquee proof strip |
| Stack Explosion | Make skills interactive and memorable | 3D-like tech bubbles, live readout cards, competitive profiles |
| Architectural Timeline | Show professional impact | UKG, ECE SIPAR with measured outcomes |
| Feature Showcase | Present flagship projects as case studies | AI Mock Interview, PixelGenie, NetSentinelX |
| System Handshake | Convert interest into action | Resume, email, social links, recruiter command surface |

The result is not a static resume page. It is a high-signal interactive system that demonstrates frontend craft, product taste, performance awareness, and engineering narrative design.

---

## Profile Signals

### Professional

- **Current Role:** Software Development Engineer at UKG, API Gateway
- **Location:** Noida, India
- **Positioning:** Backend systems, AI-native products, platform workflows, engineering interfaces

### Education

- **Institute:** Birla Institute of Technology, Mesra
- **Discipline:** Electronics
- **CGPA:** 7.59
- **Core Coursework:** Operating Systems, DBMS, Object-Oriented Programming, Computer Networks

### Competitive Programming

| Platform | Handle | Tier | Max rating |
| --- | --- | --- | --- |
| CodeChef | [bhaiya_2004](https://www.codechef.com/users/bhaiya_2004) | 5 stars | 2034 |
| LeetCode | [Baabu_Bhaiya_Ki_Jai](https://leetcode.com/u/Baabu_Bhaiya_Ki_Jai/) | Knight | 2042 |

Best contest finishes: global rank **26** of 12,000+ in CodeChef Starters 136 (Div 2), **35** of 10,000+ in Starters 139 (Div 2), and **492** of 30,000+ in LeetCode Biweekly 133.

---

## Experience

### UKG

**Software Engineering Intern — Apigee API Platform**  
**Jan 2026 - Jul 2026**

- Built a Python monitoring pipeline over Nginx logs, Splunk exports and Grafana metrics that flags sustained 5xx failures, with per-API thresholds scaled to call volume from Apigee Analytics.
- Routed flagged failures to Claude Code through a Jira MCP integration that files tickets and skips duplicates: **62 defects filed in 4 months**, about 65–70% confirmed real by senior-engineer review.
- Maintained Jenkins CI/CD pipelines deploying Apigee API proxies to dev, staging and production on GCP; supported zero-downtime revision releases through the Apigee Management API.

Stack signals: `Python`, `Apigee`, `GCP`, `Splunk`, `Grafana`, `Nginx`, `Jenkins`, `Claude Code`, `Jira MCP`

### ECE SIPAR, BIT Mesra

**Computer Vision Intern**  
**May 2025 - Jul 2025**

- Measured wound healing for a RIMS Ranchi drug-efficacy study: polygon annotation, Shoelace-formula areas and percent-healed curves over 13 days (experimental drug 98.7% healed by Day 13, standard drug 83.9%, natural healing 56.2%).
- Trained a custom U-Net to segment third molars on panoramic dental X-rays (800–900 professor-annotated images), reaching about 72% IoU after a warm-up on circular objects from a COCO-derived dataset.

---

## Open Source

9 merged pull requests across 4 projects with about 360k combined GitHub stars:

| Project | Pull requests |
| --- | --- |
| [NestJS](https://github.com/nestjs/nest) | Kafka transport decodes every value of a repeated header ([#18521](https://github.com/nestjs/nest/pull/18521)); REPL functions survive `.clear` ([#18547](https://github.com/nestjs/nest/pull/18547)) |
| [Puppeteer](https://github.com/puppeteer/puppeteer) | Cooperative Intercept Mode applies the highest-priority payload ([#15825](https://github.com/puppeteer/puppeteer/pull/15825)); clean script works on Windows ([#15812](https://github.com/puppeteer/puppeteer/pull/15812)) |
| [Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) | Page numbers placed correctly on rotated and cropped pages ([#8896](https://github.com/Stirling-Tools/Stirling-PDF/pull/8896)); stamp-tool regression test ([#8803](https://github.com/Stirling-Tools/Stirling-PDF/pull/8803)) |
| [Uptime Kuma](https://github.com/louislam/uptime-kuma) | SMSManager gateway type ([#8174](https://github.com/louislam/uptime-kuma/pull/8174)); SIGNL4 monitor ID ([#8173](https://github.com/louislam/uptime-kuma/pull/8173)); IPv6 ping test ([#8148](https://github.com/louislam/uptime-kuma/pull/8148)) |

---

## Featured Projects

The project section is built as a case-study viewport rather than a simple card grid. Each project includes product positioning, problem statement, role, challenge, solution, impact, architecture notes, engineering decisions, screenshots, live links, and source links.

### AI Mock Interview

**Stack:** Next.js 15 + PostgreSQL (Drizzle ORM) + Gemini + Clerk  
**Release:** [v1.0.0](https://github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview/releases/tag/v1.0.0)  
**Live:** [ai-mock-interview-dev2.vercel.app](https://ai-mock-interview-dev2.vercel.app/)  
**Source:** [github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview](https://github.com/yuvrajtiwary-bitmesraece/AI-Mock-Interview)

A GenAI interview simulator: Gemini writes role-specific questions, the candidate answers out loud, and every answer gets a rating and written feedback.

Key engineering work:

- Moved every database and Gemini call into server actions with per-user ownership checks, taking API secrets out of the client bundle
- Gemini in JSON mode with a response schema; questions validated before saving
- Fixed speech capture cutting long answers short, plus AI-response, feedback and navigation bugs
- CI (lint, test, build on every PR), unit tests, ESLint, Dependabot and tag-driven GitHub Releases, shipped as v1.0.0

### PixelGenie

**Stack:** PyTorch + Stable Diffusion + CLIP + VGG19  
**Metric:** Prompt-to-image generation and semantic alignment evaluation  
**Live:** [colab.research.google.com](https://colab.research.google.com/drive/1Hyy3RaEJj0XGzTMUBbF8bCO92T-fPhwP?usp=sharing)  
**Source:** [github.com/yuvrajtiwary-bitmesraece/PixelGenie](https://github.com/yuvrajtiwary-bitmesraece/PixelGenie)

PixelGenie is a Generative AI image creation and evaluation project that combines text-to-image generation, neural style transfer, and vision-language models. It uses Stable Diffusion v1.5 to generate images from natural-language prompts, CLIP to evaluate image-text similarity, and VGG19 for neural style transfer. The project also supports seed-controlled image generation, multiple prompt variations, and visual evaluation to explore how generated images align with their intended descriptions.

Key product signals:

- Stable Diffusion v1.5 text-to-image generation
- CLIP-based image-text similarity evaluation
- VGG19-based neural style transfer
- Seed-controlled image generation for reproducible experiments
- Multiple prompt-based image generation and visual comparisons

### NetSentinelX

**Stack:** Python + Scikit-learn + XGBoost + NSL-KDD  
**Metric:** ML-based Network Intrusion Detection  
**Live:** [colab.research.google.com](https://colab.research.google.com/drive/1pZeHegKnFokKJvYJwMdYRulSFJUfvING?usp=sharing)  
**Source:** [github.com/yuvrajtiwary-bitmesraece/NetSentinelX](https://github.com/yuvrajtiwary-bitmesraece/NetSentinelX)

NetSentinelX is a machine learning-based network intrusion detection system that analyzes network traffic to distinguish legitimate connections from anomalous activity. Built using the NSL-KDD benchmark dataset, it compares supervised classification models with unsupervised anomaly detection to evaluate different approaches to identifying suspicious network behavior.


Key product signals:

- NSL-KDD network intrusion detection dataset
- Five-model comparison: XGBoost, Random Forest, KNN, SVM, and Elliptic Envelope
- Supervised classification + unsupervised anomaly detection
- Feature encoding, normalization, and class imbalance handling
- Precision, recall, F1-score, accuracy, and confusion matrix evaluation



---

## Technical Stack

### Core Framework

- **Next.js 14.2.35** - App Router application structure, metadata, production build pipeline
- **React 18.3.1** - Component model and client-side interactivity
- **TypeScript 5.7** - Strong typing for portfolio data, component props, and interaction surfaces

### Motion and Interaction

- **Framer Motion** - Text reveal choreography, blur-ins, section transitions, preview modals
- **GSAP** - Scroll-linked storytelling support and animation architecture
- **Three.js** - WebGL-based core scene, texture generation, orbital system visuals
- **React Three Fiber** - React integration for the 3D scene
- **Lucide React** - Icon system for commands, links, actions, and interface details

### Production and Observability

- **Vercel Analytics** - Production analytics integration
- **Vercel Speed Insights** - Real-world performance monitoring
- **Sharp** - Recommended production image optimization backend for Next.js
- **Next Metadata API** - SEO, Open Graph, Twitter card, manifest, robots, and sitemap

---

## Feature Architecture

### Cinematic System Core

The portfolio uses a central 3D-inspired architecture core as a recurring visual motif. It changes clarity and presence based on scroll position:

- Blurred during text-heavy sections to prevent visual collision.
- Clear during the dedicated stack reveal phase.
- Reduced on low-power or compact devices when needed.
- Replaced with a static core when reduced motion or device constraints apply.

### Scroll-Linked Storytelling

The site is organized as a scrollytelling system rather than a page of isolated blocks. Scroll progress drives:

- Stage HUD
- Global nav progress
- Core scene clarity
- Stack reveal timing
- Section transitions
- Project viewport progression

### Recruiter Kit

The top-right **Recruiter Kit** gives fast access to high-intent actions:

- Copy email
- Send email
- View resume
- Open LinkedIn and GitHub
- Open competitive profiles
- Open project demos

The panel is hidden from keyboard focus when closed and becomes available only when opened, keeping the experience clean for keyboard and screen-reader users.

### Interactive Tech Stack

The stack section uses interactive translucent technology bubbles. Hovering or focusing a skill updates a live readout card with:

- Category
- Technology name
- Proficiency signal
- Description
- Official logo
- Profile links where relevant

Included categories:

- Languages: `C++`, `Python`, `TypeScript`, `JavaScript`, `Java`, `C`
- Backend & Web: `Node.js`, `NestJS`, `Next.js`, `React`, `PostgreSQL`, `Drizzle`, `REST APIs`; familiar with `Spring Boot`, `Kafka`
- Cloud & DevOps: `GCP`, `Apigee`, `Jenkins`, `Splunk`, `Grafana`, `Nginx`, `Git`, `Linux`
- AI & ML: `Claude Code`, `MCP`, `Gemini API`, `PyTorch`, `TensorFlow`, `OpenCV`, `Hugging Face`
- Computer Science: `DSA`, `OOP`, `OS`, `DBMS`, `Networks`
- Competitive Profiles: CodeChef, LeetCode

### Project Deep Links

Each featured project has a stable hash slug:

- `#ai-mock-interview`
- `#PixelGenie`
- `#NetSentinelX`

This allows direct navigation to a project case study while preserving the cinematic section layout.

### Mobile and Low-Power Strategy

The site is intentionally optimized for mobile and lower-power devices:

- Static-first fallback for compact or constrained devices
- Lazy WebGL mounting
- Reduced-motion support
- Save-data and device-memory awareness
- Mobile layout checks for overflow
- Localized image and logo assets

---

## SEO and Metadata

The application includes production metadata and crawler support:

- Dynamic metadata base derived from deployment environment
- Canonical URL
- SEO title and description
- Keyword set
- Open Graph image
- Twitter card image
- `robots.txt`
- `sitemap.xml`
- Web app manifest
- JSON-LD structured data for Person profile
- SameAs links for social, competitive, and project profiles

SEO description:

> Cinematic engineering portfolio of Yuvraj Tiwary, Software Development Engineer Intern at UKG, showcasing backend architecture, AI products, competitive programming, and systems craft.

---

## Accessibility and UX Considerations

Accessibility is treated as part of the product quality bar:

- Semantic section structure
- Accessible navigation links
- Keyboard-safe command panel behavior
- Focusable controls only when visible
- Descriptive project screenshot alt text
- Reduced-motion support
- Proper button and link labels
- Clipboard fallback to email
- No hidden focus traps in the Recruiter Kit

---

## Performance Notes

The site has been tuned to keep the cinematic layer from overwhelming the content:

- WebGL scene is lazy-loaded.
- Mobile devices can stay on static core until appropriate.
- Background scene blur is controlled with CSS variables.
- Stack logos are localized and preloaded to avoid first-hover delays.
- Project images use Next.js image optimization.
- `sharp` is installed for production image optimization.
- Vercel Speed Insights is enabled.

Final live sanity check on Vercel passed for:

- iPhone SE
- iPhone 15
- Desktop

Verified:

- No horizontal overflow
- No broken images
- No console errors
- No failed network requests
- Metadata and OG image present
- Recruiter Kit visible and keyboard-safe

---

## Local Development

### Prerequisites

- Node.js 18.17 or newer recommended
- npm

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will run locally at:

```bash
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

The project can infer its deployment URL from Vercel, but a canonical site URL can be provided explicitly:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Example file:

```bash
.env.example
```

---

## Deployment

The project is optimized for Vercel.

Recommended deployment flow:

```bash
git status
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will automatically build and deploy from the connected GitHub repository.

Production build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

---

## Repository Structure

```text
.
├── app
│   ├── globals.css
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── opengraph-image.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── seo.ts
│   └── sitemap.ts
├── components
│   ├── chrome
│   ├── nav
│   ├── primitives
│   ├── scene
│   └── sections
├── data
│   └── portfolio.ts
├── hooks
│   └── useScrollProgress.ts
├── public
│   ├── favicon.svg
│   ├── logos
│   └── projects
├── next.config.mjs
├── package.json
└── tsconfig.json
```

### Key Files

| File | Responsibility |
| --- | --- |
| `data/portfolio.ts` | Profile data, stages, skills, experience, projects, links |
| `components/PortfolioExperience.tsx` | Main page orchestration, scroll progress, scene state |
| `components/scene/CoreScene.tsx` | WebGL/Three.js system core |
| `components/scene/StaticCore.tsx` | Static fallback core |
| `components/sections/HeroSection.tsx` | Hero identity and offer signal |
| `components/sections/AboutSection.tsx` | Engine Room and moving marquee |
| `components/sections/SkillsSection.tsx` | Interactive tech stack bubbles and readout |
| `components/sections/ExperienceSection.tsx` | Professional timeline |
| `components/sections/ProjectsSection.tsx` | Case-study project showcase |
| `components/sections/FooterSection.tsx` | Resume, email, social handshake |
| `components/chrome/CommandLauncher.tsx` | Recruiter Kit command surface |
| `app/seo.ts` | SEO description, keywords, canonical URL helper |
| `app/opengraph-image.tsx` | Dynamic Open Graph image |

---

## Design System

### Visual Direction

- Luxury technology
- Code as art
- Deep-space interface language
- Architectural systems diagrams
- Premium product launch sensibility
- Recruiter-readable content density

### Palette

| Token | Color | Use |
| --- | --- | --- |
| Obsidian | `#030303` | Primary background |
| Oracle Blue | `#0072C6` | Primary accent |
| Terminal Green | `#00FF41` | System highlights |
| Silver / White | `#F6F8FB` | Heading gradients and high-contrast text |
| Project Blue | `#0072C6` | AI Mock Interview |
| Project Purple | `#8B5CF6` | SpecPilot |
| Project Red | `#FF312E` | Fresher's Guide |
| Project Yellow | `#F7C948` | Text2Mantra |

### Interaction Principles

- Motion should explain hierarchy, not distract from text.
- 3D visuals should blur behind major reading moments.
- Recruiter actions should be visible but not intrusive.
- Project surfaces should feel like product case studies, not thumbnails.
- Mobile should remain stable and readable even when the cinematic layer is reduced.

---

## Quality Checklist

This project has been checked for:

- Production build completion
- Local production startup
- Vercel deployment
- Mobile viewport stability
- Desktop viewport stability
- SEO metadata
- Open Graph image
- Sitemap and robots
- Broken images
- Console errors
- Hidden focusable controls
- Reduced-motion behavior
- Clipboard fallback behavior
- Project deep-link behavior

---

## Contact

**Yuvraj Tiwary**  
Software Development Engineer | System Architect  
Noida, India

Email: [yuvrajtiwary699@gmail.com](mailto:yuvrajtiwary699@gmail.com)

LinkedIn: [linkedin.com/in/yuvraj-tiwary-426279254](https://www.linkedin.com/in/yuvraj-tiwary-426279254)

GitHub: [github.com/yuvrajtiwary-bitmesraece](https://github.com/yuvrajtiwary-bitmesraece)

Resume: [View Resume](https://drive.google.com/file/d/1UrDfrCbWR0CteapxVeI_lvIMAaw4HoXX/view?usp=sharing)

---

## License

This is a personal portfolio project for Yuvraj Tiwary. The source is public for review and inspiration, but the identity, copy, images, personal data, and portfolio presentation are specific to Yuvraj Tiwary.
