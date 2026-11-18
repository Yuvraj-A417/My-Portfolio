"use client";

import type { CSSProperties, PointerEvent } from "react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { competitiveProfiles, skills } from "@/data/portfolio";
import { RevealText } from "@/components/primitives/RevealText";
import { SectionEyebrow } from "@/components/primitives/SectionEyebrow";

type StackOrb = {
  id: string;
  label: string;
  category: string;
  title: string;
  meta: string;
  detail: string;
  proof?: string;
  tone: "blue" | "green" | "silver";
  href?: string;
  skillName?: string;
  logo?: {
    slug?: string;
    src?: string;
    color: string;
    label: string;
  };
};

const LOGOS: Record<string, StackOrb["logo"]> = {
  // Skills without a logo here (Apigee, REST APIs, DSA) show their initials instead.
  "C++": { src: "/logos/cplusplus.svg", color: "00599C", label: "C++ logo" },
  C: { src: "/logos/c.svg", color: "A8B9CC", label: "C logo" },
  Python: { src: "/logos/python.svg", color: "3776AB", label: "Python logo" },
  JavaScript: { src: "/logos/javascript.svg", color: "F7DF1E", label: "JavaScript logo" },
  TypeScript: { src: "/logos/typescript.svg", color: "3178C6", label: "TypeScript logo" },
  Java: { src: "/logos/openjdk.svg", color: "ED8B00", label: "Java logo" },
  "React.js": { src: "/logos/react.svg", color: "61DAFB", label: "React logo" },
  "Next.js": { src: "/logos/nextjs.svg", color: "FFFFFF", label: "Next.js logo" },
  "Node.js": { src: "/logos/nodejs.svg", color: "5FA04E", label: "Node.js logo" },
  NestJS: { src: "/logos/nestjs.svg", color: "E0234E", label: "NestJS logo" },
  "Spring Boot": { src: "/logos/springboot.svg", color: "6DB33F", label: "Spring Boot logo" },
  PostgreSQL: { src: "/logos/postgresql.svg", color: "4169E1", label: "PostgreSQL logo" },
  Drizzle: { src: "/logos/drizzle.svg", color: "C5F74F", label: "Drizzle ORM logo" },
  Kafka: { src: "/logos/apachekafka.svg", color: "F3F7FF", label: "Apache Kafka logo" },
  GCP: { src: "/logos/googlecloud.svg", color: "4285F4", label: "Google Cloud logo" },
  Jenkins: { src: "/logos/jenkins.svg", color: "D24939", label: "Jenkins logo" },
  Splunk: { src: "/logos/splunk.svg", color: "F3F7FF", label: "Splunk logo" },
  Grafana: { src: "/logos/grafana.svg", color: "F46800", label: "Grafana logo" },
  Nginx: { src: "/logos/nginx.svg", color: "009639", label: "NGINX logo" },
  Git: { src: "/logos/git.svg", color: "F05032", label: "Git logo" },
  Linux: { src: "/logos/linux.svg", color: "FCC624", label: "Linux logo" },
  "Claude Code": { src: "/logos/claude.svg", color: "D97757", label: "Claude logo" },
  MCP: { src: "/logos/modelcontextprotocol.svg", color: "F3F7FF", label: "Model Context Protocol logo" },
  "Gemini API": { src: "/logos/googlegemini.svg", color: "8E75B2", label: "Google Gemini logo" },
  PyTorch: { src: "/logos/pytorch.svg", color: "EE4C2C", label: "PyTorch logo" },
  TensorFlow: { src: "/logos/tensorflow.svg", color: "FF6F00", label: "TensorFlow logo" },
  OpenCV: { src: "/logos/opencv.svg", color: "5C3EE8", label: "OpenCV logo" },
  "Hugging Face": { src: "/logos/huggingface.svg", color: "FFD21E", label: "Hugging Face logo" },
  LeetCode: { src: "/logos/leetcode.svg", color: "FFA116", label: "LeetCode logo" },
  CodeChef: { src: "/logos/codechef.svg", color: "5B4638", label: "CodeChef logo" },
  OS: { src: "/logos/OS_logo.webp", color: "00FF41", label: "Operating Systems symbol" },
  DBMS: { src: "/logos/DBMS_logo.webp", color: "0072C6", label: "Database Systems symbol" },
  OOP: { src: "/logos/OOPS_logo.webp", color: "00FF41", label: "Object-Oriented Programming symbol" },
  Networks: { src: "/logos/CN_logo.webp", color: "F3F7FF", label: "Computer Networks symbol" }
};

function buildStackOrbs(): StackOrb[] {
  return [
    ...skills.map((skill) => ({
      id: `skill-${skill.name}`,
      label: skill.name,
      category: skill.group.toUpperCase(),
      title: skill.name,
      meta: skill.level,
      detail: skill.log,
      proof: skill.proof,
      tone: skill.tone,
      skillName: skill.name,
      logo: LOGOS[skill.name]
    })),

    ...competitiveProfiles.map((profile, index) => ({
      id: `profile-${profile.platform}`,
      label: profile.platform,
      category: "COMPETITIVE PROGRAMMING",
      title: profile.platform,
      meta: `${profile.tier} / ${profile.rating}`,
      detail: profile.detail,
      proof: profile.best,
      tone: (index % 3 === 0
        ? "green"
        : index % 3 === 1
          ? "blue"
          : "silver") as StackOrb["tone"],
      href: profile.href,
      logo: LOGOS[profile.platform]
    }))
  ];
}

const STACK_ORBS = buildStackOrbs();

const STACK_LOGO_PRELOAD_SOURCES = Array.from(
  new Set(
    STACK_ORBS.map((item) => item.logo?.src).filter(
      (src): src is string => Boolean(src)
    )
  )
);

function StackReadoutLogo({ item }: { item: StackOrb }) {
  const [hasLogoError, setHasLogoError] = useState(false);

  const logo = item.logo;
  const logoSrc = logo?.src ?? null;

  const initials = item.title
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const logoStyle = {
    "--logo-color": `#${logo?.color ?? "f6f8fb"}`
  } as CSSProperties;

  useEffect(() => {
    setHasLogoError(false);
  }, [item.id, logoSrc]);

  return (
    <div
      className={`readout-logo ${item.tone}`}
      aria-label={logo?.label ?? `${item.title} symbol`}
      role="img"
      style={logoStyle}
    >
      {logoSrc && !hasLogoError ? (
        <img
          key={logoSrc}
          alt=""
          decoding="async"
          height={56}
          loading="eager"
          onError={() => setHasLogoError(true)}
          src={logoSrc}
          width={56}
        />
      ) : null}

      <span
        className={
          logoSrc && !hasLogoError
            ? "logo-fallback hidden"
            : "logo-fallback"
        }
      >
        {initials}
      </span>
    </div>
  );
}

const StackOrbButton = memo(function StackOrbButton({
  item,
  index,
  isHighlighted,
  onActivate,
  onDeactivate
}: {
  item: StackOrb;
  index: number;
  isHighlighted: boolean;
  onActivate: (item: StackOrb) => void;
  onDeactivate: () => void;
}) {
  const labelLength = item.label.replace(/[^a-z0-9]/gi, "").length;

  const size = Math.min(132, Math.max(84, 72 + labelLength * 5.2));
  const depth = Math.min(1.12, 0.9 + labelLength * 0.018);

  const style = {
    "--orb-index": index,
    "--orb-size": `${size}px`,
    "--orb-y": `${[-10, 18, -2, 26, 8][index % 5]}px`,
    "--orb-x": `${[-8, 10, 0, -14, 12, 4][index % 6]}px`,
    "--orb-depth": `${depth}`
  } as CSSProperties;

  return (
    <button
      className={
        isHighlighted
          ? `stack-orb ${item.tone} active`
          : `stack-orb ${item.tone}`
      }
      aria-label={`Inspect ${item.label}`}
      onBlur={onDeactivate}
      onFocus={() => onActivate(item)}
      onPointerEnter={() => onActivate(item)}
      onPointerLeave={onDeactivate}
      onClick={() => onActivate(item)}
      style={style}
      type="button"
    >
      <span>{item.label}</span>
      <i>{item.category}</i>
    </button>
  );
});

export function SkillsSection({
  setHoveredSkill
}: {
  hoveredSkill: string | null;
  setHoveredSkill: (skill: string | null) => void;
}) {
  const [activeItem, setActiveItem] = useState<StackOrb>(STACK_ORBS[0]);
  const [highlightedItemId, setHighlightedItemId] = useState<string | null>(null);
  const [readoutTilt, setReadoutTilt] = useState({ x: 0, y: 0 });

  const activeStats = useMemo(
    () =>
      [
        { label: "Layer", value: activeItem.category.split(" ")[0] },
        { label: "Signal", value: activeItem.meta },
        { label: "Proof", value: activeItem.proof }
      ].filter((stat): stat is { label: string; value: string } => Boolean(stat.value)),
    [activeItem]
  );

  const activate = useCallback(
    (item: StackOrb) => {
      setActiveItem(item);
      setHighlightedItemId(item.id);
      setHoveredSkill(item.skillName ?? item.title);
    },
    [setHoveredSkill]
  );

  const deactivate = useCallback(() => {
    setHighlightedItemId(null);
    setHoveredSkill(null);
  }, [setHoveredSkill]);

  function tiltReadout(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setReadoutTilt({
      x: Number((-y * 8).toFixed(2)),
      y: Number((x * 10).toFixed(2))
    });
  }

  return (
    <section className="story-section stack-section" id="stack">
      <div className="stack-logo-preload" aria-hidden="true">
        {STACK_LOGO_PRELOAD_SOURCES.map((src) => (
          <img
            alt=""
            decoding="async"
            height={1}
            key={src}
            src={src}
            width={1}
          />
        ))}
      </div>

      <RevealText className="copy-block">
        <SectionEyebrow>Tech Stack Explosion</SectionEyebrow>

        <h2>Systems stack, exposed.</h2>

        <p>
          Languages, backend frameworks, cloud and DevOps tooling, AI engineering and competitive programming.
          Hover any node to see where it was used.
        </p>
      </RevealText>

      <div className="stack-lab">
        <div
          className="orb-field"
          aria-label="Interactive technology and competitive programming stack"
        >
          {STACK_ORBS.map((item, index) => (
            <StackOrbButton
              index={index}
              item={item}
              isHighlighted={highlightedItemId === item.id}
              key={item.id}
              onActivate={activate}
              onDeactivate={deactivate}
            />
          ))}
        </div>

        <div
          className={`stack-readout ${activeItem.tone}`}
          aria-live="polite"
          onPointerLeave={() => setReadoutTilt({ x: 0, y: 0 })}
          onPointerMove={tiltReadout}
          style={
            {
              "--readout-rotate-x": `${readoutTilt.x}deg`,
              "--readout-rotate-y": `${readoutTilt.y}deg`
            } as CSSProperties
          }
        >
          <StackReadoutLogo item={activeItem} />

          <div className="readout-kicker">
            <span>{activeItem.category}</span>
            <i>Live node inspection</i>
          </div>

          <h3>{activeItem.title}</h3>

          <strong>{activeItem.meta}</strong>

          <p>{activeItem.detail}</p>

          <div
            className="readout-metric-grid"
            aria-label={`${activeItem.title} signal metrics`}
          >
            {activeStats.map((stat) => (
              <div key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>

          <div className="readout-spectrum" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>

          {activeItem.href ? (
            <a href={activeItem.href} rel="noreferrer" target="_blank">
              Open Profile
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}