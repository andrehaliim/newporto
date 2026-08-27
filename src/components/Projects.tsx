import Image from "next/image";
import Link from "next/link";
import { Download, Info } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { GithubIcon } from "./icons/BrandIcons";
import LiveDemoButton from "./LiveDemoButton";

// Rotate through signature demo-grid card backgrounds for brand voltage
const cardAccentStyles = [
  { bg: "bg-sig-coral", text: "text-white", label: "Personal" },
  { bg: "bg-sig-forest", text: "text-white", label: "Professional" },
  { bg: "bg-sig-peach/30", text: "text-text", label: "Personal" },
  { bg: "bg-sig-mint/30", text: "text-text", label: "Professional" },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <SectionLabel index="02" name="projects" />
      <h2 className="mt-4 font-sans text-[32px] font-normal leading-[1.2] text-text">
        Main Projects
      </h2>
      <p className="mt-3 max-w-xl text-[14px] text-text-muted leading-relaxed">
        Some of my main projects that I have worked on.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-[10px] border border-border bg-canvas transition-shadow hover:shadow-sm"
          >
            <Link href={`/projects/${project.id}`} className="block">
              {/* Card header bar */}
              <div className="flex items-center gap-2 border-b border-border bg-surface-soft px-4 py-2.5 font-mono text-[11px] text-text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-sig-coral/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-sig-yellow/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-sig-mint/60" />
                <span className="ml-2 font-medium">{project.name}</span>
                {project.isPersonal && (
                  <span className="ml-auto rounded-sm border border-sig-coral/30 bg-sig-coral/10 px-1.5 py-0.5 text-[10px] text-sig-coral font-semibold uppercase tracking-wider">
                    Personal
                  </span>
                )}
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-surface-soft border-b border-border">
                <Image
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <Link href={`/projects/${project.id}`} className="block group/title">
                <h3 className="font-sans text-[18px] font-medium leading-[1.4] text-text group-hover/title:text-accent-2 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-2 text-[14px] leading-relaxed text-text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-[6px] border border-border px-2.5 py-0.5 font-mono text-[11px] text-text-muted bg-surface-soft"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 flex items-center justify-between text-[14px] border-t border-border/40">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-sans font-medium text-text-muted hover:text-text transition-colors"
                >
                  <Info size={14} /> Detail
                </Link>
                <div className="flex items-center gap-4">
                  {project.demoUrl && (
                    <LiveDemoButton
                      demoUrl={project.demoUrl}
                      className="inline-flex items-center gap-1.5 font-sans font-medium text-text-muted hover:text-text transition-colors"
                    >
                      <Download size={14} /> Download
                    </LiveDemoButton>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-sans font-medium text-text-muted hover:text-text transition-colors"
                    >
                      <GithubIcon size={14} /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
