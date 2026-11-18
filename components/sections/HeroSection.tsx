"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, FileText, GitMerge, Github, Mail, Trophy, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { SectionEyebrow } from "@/components/primitives/SectionEyebrow";
import { competitiveProfiles, contestRanks, openSourceProjects, siteProfile } from "@/data/portfolio";

const mergedPullRequests = openSourceProjects.reduce((sum, project) => sum + project.pullRequests.length, 0);
const bestRank = contestRanks[0];

function HeroTitle() {
  const words = ["YUVRAJ", "TIWARY"];
  const prefersReducedMotion = useReducedMotion();
  const [isHydrated, setIsHydrated] = useState(false);
  const reduceMotion = isHydrated && prefersReducedMotion;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <h1 className="hero-title" aria-label="Yuvraj Tiwary">
      {words.map((word, wordIndex) => (
        <span className="hero-word" aria-hidden="true" key={word}>
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${word}-${letter}-${letterIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(16px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: reduceMotion ? 0 : 0.18 + (wordIndex * 7 + letterIndex) * 0.026,
                duration: reduceMotion ? 0 : 0.74,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

/** Entrance for the blocks under the name: opacity and transform only, so it stays on the compositor. */
function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  } as const;
}

export function HeroSection() {
  return (
    <section className="story-section hero-section" id="hero">
      <div className="copy-block hero-copy">
        <SectionEyebrow>Software Engineer · ex-UKG · B.Tech, BIT Mesra</SectionEyebrow>
        <HeroTitle />

        <motion.p className="hero-tagline" {...rise(0.62)}>
          I build backend systems that hold up in production, land fixes in the open-source frameworks other engineers
          run on, and compete at <em>CodeChef 5★</em>.
        </motion.p>

        <motion.div className="hero-proof-grid" aria-label="Highlights" {...rise(0.78)}>
          <a className="hero-proof oss" href="#opensource">
            <span className="hero-proof-kicker">
              <GitMerge aria-hidden="true" size={14} />
              Open source
            </span>
            <strong>
              {mergedPullRequests} <small>merged PRs</small>
            </strong>
            <span className="hero-proof-logos" aria-hidden="true">
              {openSourceProjects.map((project) => (
                <img alt="" decoding="async" height={30} key={project.repo} src={project.logo} width={30} />
              ))}
            </span>
            <span className="hero-proof-detail">{openSourceProjects.map((project) => project.name).join(" · ")}</span>
          </a>

          <a className="hero-proof cp" href={competitiveProfiles[0].href} rel="noreferrer" target="_blank">
            <span className="hero-proof-kicker">
              <Trophy aria-hidden="true" size={14} />
              Competitive programming
            </span>
            <strong>
              #{bestRank.rank} <small>global</small>
            </strong>
            <span className="hero-proof-detail">
              of {bestRank.field} · {bestRank.platform} {bestRank.contest}
            </span>
            <span className="hero-proof-chips">
              {competitiveProfiles.map((profile) => (
                <i key={profile.platform}>
                  {profile.platform} {profile.rating} · {profile.tier === "5 stars" ? "5★" : profile.tier}
                </i>
              ))}
            </span>
          </a>

          <a className="hero-proof eng" href="#timeline">
            <span className="hero-proof-kicker">
              <Zap aria-hidden="true" size={14} />
              Industry · UKG
            </span>
            <strong>
              62 <small>defects auto-filed</small>
            </strong>
            <span className="hero-proof-detail">5xx failure detector + Claude Code Jira triage, in 4 months</span>
            <span className="hero-proof-chips">
              <i>Python</i>
              <i>Apigee</i>
              <i>GCP</i>
              <i>Jenkins</i>
            </span>
          </a>
        </motion.div>

        <motion.div className="hero-cta-row" {...rise(0.94)}>
          <a className="hero-cta primary" href={siteProfile.resumeHref} rel="noreferrer" target="_blank">
            <FileText aria-hidden="true" size={17} />
            Resume
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a className="hero-cta" href={siteProfile.githubHref} rel="noreferrer" target="_blank">
            <Github aria-hidden="true" size={17} />
            GitHub
          </a>
          <a className="hero-cta" href={`mailto:${siteProfile.email}`}>
            <Mail aria-hidden="true" size={17} />
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
