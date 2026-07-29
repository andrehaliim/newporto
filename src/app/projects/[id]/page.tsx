"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Layers, Link as LinkIcon } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon, DartIcon } from "@/components/icons/BrandIcons";
import ThemeToggle from "@/components/ThemeToggle";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-bg font-mono text-text">
        <p className="text-xl">Project tidak ditemukan</p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 text-accent hover:underline"
        >
          <ArrowLeft size={16} /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Fallback to project.image if screenshots are not defined or empty
  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [project.image];

  return (
    <>
      <title>{`${project.title} — Project Detail`}</title>
      <meta name="description" content={project.description} />

      <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border px-4 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
          <span className="ml-3 font-mono text-xs text-text-muted">
            //project_detail — {project.name}.md
          </span>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>

        {/* tab */}
        <nav className="flex font-mono text-sm">
          <Link
            href="/#projects"
            className="flex items-center gap-2 border-r border-border px-4 py-2.5 text-text-muted hover:text-text hover:bg-surface-2 md:border-b-0 md:border-r"
          >
            <ArrowLeft size={14} />
            Kembali
          </Link>
          <div className="flex items-center gap-2 border-r border-border bg-surface px-4 py-2.5 text-accent-2">
            <DartIcon size={14} />
            {project.name}.md
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* Project Header */}
        <div className="border-b border-border pb-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-accent-pink">
            <span>PROJECT // {project.id.toUpperCase()}</span>
          </div>
          <h1 className="mt-2 font-mono text-3xl font-bold sm:text-4xl text-text">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Left Column: Interactive Screenshot Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-text-muted">
              App Screenshots
            </h3>
            
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-surface-2/30">
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19.5] rounded-[38px] border-[10px] border-[#0d1527] shadow-2xl overflow-hidden bg-bg ring-1 ring-border">
                              
                {/* Content Area */}
                <div className="relative h-full w-full overflow-hidden bg-surface">
                  <Image
                    src={screenshots[activeImageIndex]}
                    alt={`Screenshot ${project.title} - ${activeImageIndex + 1}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 25vw, 75vw"
                    className="object-cover"
                  />
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-1 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Counter Indicator */}
              <div className="mt-4 rounded-full bg-surface-2 px-3 py-1 font-mono text-xs text-text border border-border">
                {activeImageIndex + 1} / {screenshots.length}
              </div>
            </div>

            {/* Thumbnails */}
            {screenshots.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin justify-center">
                {screenshots.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative aspect-[9/16] w-14 flex-shrink-0 overflow-hidden rounded border transition-all ${
                      activeImageIndex === idx
                        ? "border-accent-2 scale-[0.95] ring-1 ring-accent-2"
                        : "border-border hover:border-text-muted bg-surface-2"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Project Details & Meta */}
          <div className="lg:col-span-5 space-y-8">
            {/* Action Links */}
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-center font-semibold text-bg transition hover:bg-accent/90"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-center font-semibold text-text transition hover:border-text-muted"
              >
                <GithubIcon size={16} /> Repository
              </a>
            </div>

            {/* Description Bullet Points */}
            {project.descriptionPoints && project.descriptionPoints.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Key Features & Implementation
                </h3>
                <ul className="space-y-2 text-sm text-text-muted list-disc pl-5 leading-relaxed">
                  {project.descriptionPoints.map((point, index) => (
                    <li key={index} className="marker:text-accent-pink">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Components Used */}
            {project.componentsUsed && project.componentsUsed.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Components & Packages
                </h3>
                <div className="divide-y divide-border rounded-xl border border-border bg-surface overflow-hidden">
                  {project.componentsUsed.map((comp, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 text-sm transition hover:bg-surface-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="rounded bg-bg p-1.5 text-accent-pink">
                          <Layers size={14} />
                        </div>
                        <div>
                          <p className="font-medium text-text">{comp.name}</p>
                          <p className="text-xs text-text-muted">{comp.type}</p>
                        </div>
                      </div>
                      <a
                        href={comp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-accent-2 hover:underline"
                        title={`Buka pub.dev / dokumentasi ${comp.name}`}
                      >
                        Docs <LinkIcon size={10} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-text-muted">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1 font-mono text-xs text-accent-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
