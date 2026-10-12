"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Layers, Link as LinkIcon } from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/BrandIcons";
import LiveDemoButton from "@/components/LiveDemoButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.name === resolvedParams.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-canvas font-sans text-text">
        <p className="text-[24px] font-normal">Project not found</p>
        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-2 text-[14px] text-accent-2 hover:underline"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    );
  }

  // Generate screenshot list
  const screenshots = (() => {
    if (!project.screenshots) return [project.image];
    if (Array.isArray(project.screenshots)) return project.screenshots;
    const basePath = project.screenshots.replace(/\/$/, "");
    const count = (project as { screenshotCount?: number }).screenshotCount || 1;
    return Array.from(
      { length: count },
      (_, i) => `${basePath}/${project.name}-${i + 1}.png`
    );
  })();

  return (
    <div className="w-full">
      <title>{`${project.title} — Project Detail`}</title>
      <meta name="description" content={project.description} />

      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full h-16 border-b border-border bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-6 h-full">
          <div className="flex h-full items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-sans text-base font-semibold tracking-tight text-text hover:opacity-80"
            >
              <span>Andre Haliim</span>
              <span className="h-1.5 w-1.5 rounded-full bg-sig-coral" />
            </Link>

            <Link
              href="/#projects"
              className="flex items-center gap-2 font-sans text-[14px] font-medium text-text-muted hover:text-text transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-canvas">
        {/* Project Hero — white canvas header */}
        <div className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-12 w-full">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-text-muted">
              <span>PROJECT // {project.id.toUpperCase()}</span>
              {project.isPersonal && (
                <span className="rounded-sm border border-sig-coral/30 bg-sig-coral/10 px-1.5 py-0.5 text-[10px] text-sig-coral font-semibold uppercase tracking-wider">
                  Personal
                </span>
              )}
            </div>
            <h1 className="mt-3 font-sans text-[40px] font-normal leading-[1.2] text-text break-words">
              {project.title}
            </h1>
            <p className="mt-4 text-[18px] font-normal leading-[1.4] text-text-muted max-w-3xl break-words">
              {project.description}
            </p>

            {/* Primary actions */}
            {(project.demoUrl || project.repoUrl) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {project.demoUrl && (
                  <LiveDemoButton
                    demoUrl={project.demoUrl}
                    className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
                  />
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-border bg-canvas px-6 py-3.5 font-sans text-[16px] font-medium text-text transition hover:bg-surface-soft"
                  >
                    <GithubIcon size={16} /> Repository
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content grid */}
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left — Screenshot gallery (shown second on mobile) */}
            <div className="order-2 lg:order-1 lg:col-span-7 space-y-6 min-w-0">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                App Screenshots
              </h3>

              <div className="flex flex-col items-center justify-center p-6 rounded-[10px] border border-border bg-surface-soft">
                {/* Phone frame */}
                <div className="relative mx-auto w-full max-w-[260px] aspect-[9/19.5] rounded-[38px] border-[8px] border-[#181d26] shadow-xl overflow-hidden bg-canvas ring-1 ring-border">
                  <div className="relative h-full w-full overflow-hidden bg-surface-soft">
                    <Image
                      src={screenshots[activeImageIndex]}
                      alt={`Screenshot ${project.title} - ${activeImageIndex + 1}`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 25vw, 75vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-1 left-1/2 z-20 h-1 w-20 -translate-x-1/2 rounded-full bg-text/10" />
                  </div>
                </div>

                {/* Counter */}
                <div className="mt-4 rounded-full border border-border bg-canvas px-3 py-1 font-mono text-xs text-text-muted">
                  {activeImageIndex + 1} / {screenshots.length}
                </div>

                {/* Description */}
                {project.screenshotDescription?.[activeImageIndex] && (
                  <p className="mt-2 font-mono text-xs text-center text-text-muted max-w-xs">
                    {project.screenshotDescription[activeImageIndex]}
                  </p>
                )}
              </div>

              {/* Thumbnails */}
              {screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
                  {screenshots.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[9/16] w-12 flex-shrink-0 overflow-hidden rounded-[6px] border transition-all ${activeImageIndex === idx
                          ? "border-accent shadow-sm"
                          : "border-border bg-surface-soft"
                        }`}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Components / packages */}
              {project.componentsUsed && project.componentsUsed.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Components &amp; Packages
                  </h3>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.componentsUsed.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-2.5 rounded-[10px] border border-border bg-canvas p-3 hover:bg-surface-soft transition-colors min-w-0"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="rounded-[6px] border border-border bg-surface-soft p-1.5 text-text-muted flex-shrink-0">
                            <Layers size={13} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-text text-xs truncate" title={comp.name}>
                              {comp.name}
                            </p>
                            <p className="text-[10px] text-text-muted truncate" title={comp.type}>
                              {comp.type}
                            </p>
                          </div>
                        </div>
                        <a
                          href={comp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 font-mono text-[11px] text-accent-2 hover:underline flex-shrink-0"
                          title={`Docs for ${comp.name}`}
                        >
                          Docs <LinkIcon size={10} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — Details */}
            <div className="order-1 lg:order-2 lg:col-span-5 space-y-8 min-w-0">
              {/* Tech stack */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => {
                    const pastelStyles = [
                      "bg-sig-peach/20 text-sig-coral border-sig-peach/30",
                      "bg-sig-mint/25 text-sig-forest border-sig-mint/40",
                      "bg-sig-cream text-text border-border",
                      "bg-sig-yellow/25 text-[#d9a441] border-sig-yellow/40",
                    ];
                    return (
                      <span
                        key={t}
                        className={`rounded-[6px] border px-3 py-1 font-mono text-[11px] font-medium ${pastelStyles[i % pastelStyles.length]}`}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Overview
                </h3>
                <div className="space-y-3">
                  {Array.isArray(project.overview) ? (
                    project.overview.map((paragraph, index) => (
                      <p key={index} className="text-[14px] leading-relaxed text-text-muted break-words">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-[14px] leading-relaxed text-text-muted break-words">{project.overview}</p>
                  )}
                </div>
              </div>

              {/* Key features */}
              {project.descriptionPoints && project.descriptionPoints.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Key Features
                  </h3>
                  <ul className="space-y-2 list-disc pl-5">
                    {project.descriptionPoints.map((point, index) => {
                      const match = point.match(/^([^—\-:]+[\—\-:])(\s*)(.*)$/);
                      return (
                        <li key={index} className="text-[14px] leading-relaxed text-text-muted marker:text-sig-coral break-words">
                          {match ? (
                            <>
                              <strong className="font-semibold text-text">{match[1]}</strong>{match[2]}{match[3]}
                            </>
                          ) : (
                            point
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Light CTA band at bottom */}
      <div className="w-full bg-surface-strong border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[24px] font-normal text-text">Interested in more?</p>
            <p className="mt-1 text-[14px] text-text-muted">Browse all projects or get in touch.</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
