import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Info } from "lucide-react";
import { projects } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { GithubIcon } from "./icons/BrandIcons";
import LiveDemoButton from "./LiveDemoButton";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="02" name="projects.tsx" />
      <h2 className="mt-3 font-mono text-2xl font-bold sm:text-3xl">
        Main Projects
      </h2>
      <p className="mt-3 max-w-xl text-text-muted">
        Some of my main projects that I have worked on.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent-2/60"
          >
            <Link href={`/projects/${project.id}`} className="block">
              <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-text-muted">
                <span className="h-2 w-2 rounded-full bg-accent-pink/70" />
                <span className="h-2 w-2 rounded-full bg-accent/70" />
                <span className="h-2 w-2 rounded-full bg-accent-2/70" />
                <span className="ml-2">{project.name}.dart</span>
                {project.isPersonal && (
                  <span className="ml-auto rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] text-accent font-semibold uppercase tracking-wider">
                    Personal
                  </span>
                )}
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-bg border-b border-border">
                <Image
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-102"
                />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-5">
              <Link href={`/projects/${project.id}`} className="block group/title">
                <h3 className="font-mono text-lg font-semibold text-text group-hover/title:text-accent-2 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="mt-2 text-sm text-text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-accent-2"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5 flex items-center justify-between font-mono text-sm border-t border-border/40">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-text hover:text-accent-2 transition-colors"
                >
                  <Info size={14} /> Detail
                </Link>
                <div className="flex items-center gap-4">
                  {project.demoUrl && (
                    <LiveDemoButton
                      demoUrl={project.demoUrl}
                      className="inline-flex items-center gap-1.5 text-text hover:text-accent-2 transition-colors"
                    >
                      <Download size={14} /> Download
                    </LiveDemoButton>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-text hover:text-accent-2 transition-colors"
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
