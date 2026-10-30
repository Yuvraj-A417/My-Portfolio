import { siteProfile } from "@/data/portfolio";

function withProtocol(url: string) {
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelDeploymentUrl = process.env.VERCEL_URL;
  const resolvedUrl = explicitUrl || vercelProductionUrl || vercelDeploymentUrl || siteProfile.siteUrl;

  return withProtocol(resolvedUrl).replace(/\/$/, "");
}

export const seoDescription =
  "Cinematic engineering portfolio of Yuvraj Tiwary, Software Development Engineer at UKG, showcasing backend architecture, AI products, competitive programming, and systems craft.";

export const seoKeywords = [
  "Yuvraj Tiwary",
  "Yuvraj Tiwary portfolio",
  "Software Development Engineer",
  "System Architect",
  "UKG API Gateway",
  "Backend Engineer",
  "Next.js Developer",
  "Spring Boot Developer",
  "Competitive Programming",
  "Codechef 5 stars",
  "LeetCode Knight",
  "AtCoder 4 Star",
  "AI Mock Interview",
  "PixelGenie",
  "NetSentinelX",
  "BIT Mesra"
];
