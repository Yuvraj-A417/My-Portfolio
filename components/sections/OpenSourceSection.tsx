import { ArrowUpRight, GitMerge, GitPullRequest, Star } from "lucide-react";
import { openSourceProfileHref, openSourceProjects } from "@/data/portfolio";
import { RevealText } from "@/components/primitives/RevealText";
import { SectionEyebrow } from "@/components/primitives/SectionEyebrow";

const allPullRequests = openSourceProjects.flatMap((project) => project.pullRequests);
const totalAdditions = allPullRequests.reduce((sum, pr) => sum + pr.additions, 0);
const totalDeletions = allPullRequests.reduce((sum, pr) => sum + pr.deletions, 0);
const combinedStars = openSourceProjects.reduce((sum, project) => sum + Number.parseFloat(project.stars), 0);

const stats = [
  { value: String(allPullRequests.length), label: "Merged pull requests" },
  { value: String(openSourceProjects.length), label: "Projects" },
  { value: `${Math.floor(combinedStars / 10) * 10}k+`, label: "Combined GitHub stars" },
  { value: `+${totalAdditions}`, label: `Lines added · −${totalDeletions} removed` }
];

export function OpenSourceSection() {
  return (
    <section className="story-section oss-section" id="opensource">
      <RevealText className="copy-block narrow">
        <SectionEyebrow>Open Source</SectionEyebrow>
        <h2>Upstream fixes, merged and shipping.</h2>
        <p>
          {allPullRequests.length} pull requests merged into {openSourceProjects.length} widely used projects. Each one started
          from a real bug or gap: reproduce it, fix it, cover it with tests, and get it through maintainer review.
        </p>
      </RevealText>

      <RevealText className="oss-stats">
        {stats.map((stat) => (
          <div className="oss-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </RevealText>

      <div className="oss-grid">
        {openSourceProjects.map((project, index) => (
          <RevealText
            className="oss-card"
            delay={index * 0.08}
            key={project.repo}
            style={{ "--oss-accent": project.accent } as React.CSSProperties}
          >
            <header className="oss-card-head">
              <img alt="" className="oss-logo" decoding="async" height={52} loading="lazy" src={project.logo} width={52} />
              <div className="oss-card-title">
                <h3>{project.name}</h3>
                <a href={`https://github.com/${project.repo}`} rel="noreferrer" target="_blank">
                  {project.repo}
                </a>
              </div>
              <span className="oss-stars" aria-label={`${project.stars} GitHub stars`}>
                <Star aria-hidden="true" size={13} />
                {project.stars}
              </span>
            </header>

            <p className="oss-tagline">{project.tagline}</p>
            <div className="oss-meta">
              <span>{project.language}</span>
              <span>
                {project.pullRequests.length} merged PR{project.pullRequests.length > 1 ? "s" : ""}
              </span>
            </div>

            <ol className="oss-prs">
              {project.pullRequests.map((pr) => (
                <li key={pr.number}>
                  <a
                    className="oss-pr"
                    href={`https://github.com/${project.repo}/pull/${pr.number}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="oss-pr-top">
                      <code className={`oss-kind oss-kind-${pr.kind}`}>
                        {pr.kind}({pr.scope})
                      </code>
                      <span className="oss-pr-number">
                        <GitPullRequest aria-hidden="true" size={13} />#{pr.number}
                        <ArrowUpRight aria-hidden="true" className="oss-pr-arrow" size={13} />
                      </span>
                    </div>
                    <p>{pr.summary}</p>
                    <div className="oss-pr-foot">
                      <span className="oss-merged">
                        <GitMerge aria-hidden="true" size={13} />
                        Merged {pr.merged}
                      </span>
                      <span className="oss-diff" aria-label={`${pr.additions} lines added, ${pr.deletions} removed`}>
                        <ins>+{pr.additions}</ins>
                        <del>−{pr.deletions}</del>
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </RevealText>
        ))}
      </div>

      <a className="oss-all-link" href={openSourceProfileHref} rel="noreferrer" target="_blank">
        See every merged pull request on GitHub
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </section>
  );
}
