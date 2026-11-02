"use client";

import { use, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, motion, type Variants } from "framer-motion";
import {
  ArrowLeft,
  BellRing,
  Bluetooth,
  BookOpen,
  Braces,
  Calculator,
  CalendarDays,
  Camera,
  Car,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Code,
  Coins,
  Compass,
  Database,
  FileText,
  Flame,
  Gavel,
  Globe,
  HandHeart,
  Image as ImageIcon,
  Languages,
  LayoutDashboard,
  LayoutGrid,
  Layers,
  Link as LinkIcon,
  ListChecks,
  Lock,
  MapPin,
  Moon,
  PenLine,
  Phone,
  Printer,
  RefreshCw,
  Search,
  SearchX,
  Shirt,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tags,
  Ticket,
  TriangleAlert,
  Wallet,
  WashingMachine,
  X,
  type LucideIcon,
} from "lucide-react";
import { projects } from "@/data/portfolio";
import { GithubIcon } from "@/components/icons/BrandIcons";
import LiveDemoButton from "@/components/LiveDemoButton";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Screenshot slides in from the side it was navigated towards
const slideVariants: Variants = {
  enter: (direction: number) => ({ x: direction >= 0 ? "100%" : "-100%", opacity: 0.4 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction >= 0 ? "-100%" : "100%", opacity: 0.4 }),
};

const SWIPE_THRESHOLD = 60;

// Picks a key-feature icon from its title; first match wins, so order matters
const FEATURE_ICONS: [RegExp, LucideIcon][] = [
  [/prayer times/i, Clock],
  [/tracker|checklist/i, ListChecks],
  [/adhan|reminder|notification/i, BellRing],
  [/quran/i, BookOpen],
  [/qibla|compass/i, Compass],
  [/worship/i, HandHeart],
  [/calendar/i, CalendarDays],
  [/zakat|calculat/i, Calculator],
  [/widget/i, LayoutGrid],
  [/language/i, Languages],
  [/dark mode/i, Moon],
  [/gold|trading/i, Coins],
  [/payment|receivable/i, Wallet],
  [/pdf|document|file/i, FileText],
  [/bluetooth|print/i, Printer],
  [/dashboard|report/i, LayoutDashboard],
  [/offline|sync/i, RefreshCw],
  [/flavor|build/i, Layers],
  [/auction/i, Gavel],
  [/vehicle/i, Car],
  [/image|gallery/i, ImageIcon],
  [/signature/i, PenLine],
  [/photo|selfie/i, Camera],
  [/search|filter/i, Search],
  [/responsive|device/i, Smartphone],
  [/questionnaire/i, ClipboardList],
  [/location|check in/i, MapPin],
  [/ticket/i, Ticket],
  [/issue/i, TriangleAlert],
  [/auth/i, Lock],
  [/wardrobe/i, Shirt],
  [/laundry/i, WashingMachine],
  [/lost/i, SearchX],
  [/whatsapp|call/i, Phone],
  [/categor/i, Tags],
];

const TECH_ICONS: [RegExp, LucideIcon][] = [
  [/flutter|android|ios/i, Smartphone],
  [/dart/i, Braces],
  [/sql|objectbox|database/i, Database],
  [/firebase/i, Flame],
  [/api/i, Globe],
  [/bluetooth/i, Bluetooth],
  [/geo|location/i, MapPin],
];

const techIcon = (name: string) =>
  TECH_ICONS.find(([pattern]) => pattern.test(name))?.[1] ?? Code;

const featureIcon = (title: string) =>
  FEATURE_ICONS.find(([pattern]) => pattern.test(title))?.[1] ?? Sparkles;

export default function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.name === resolvedParams.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

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

  const showImage = (idx: number) => {
    const next = (idx + screenshots.length) % screenshots.length;
    if (next === activeImageIndex) return;
    setDirection(idx > activeImageIndex ? 1 : -1);
    setActiveImageIndex(next);
  };
  const activeCaption = project.screenshotDescription?.[activeImageIndex];
  const isStoreStyle = project.screenshotStyle === "store";

  return (
    <div className="w-full" style={{ "--tone": project.tone ?? "#0a2e0e" } as CSSProperties}>
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

            {project.privacyUrl && (
              <Link
                href={project.privacyUrl}
                className="mt-6 inline-flex items-center gap-1.5 font-sans text-[14px] text-accent-2 hover:underline"
              >
                <ShieldCheck size={16} /> Privacy Policy
              </Link>
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

              <MotionConfig reducedMotion="user">
                {isStoreStyle ? (
                <>
                  {/* Store listing strip — screenshots already carry caption & device mockup */}
                  <div className="relative">
                    <div
                      ref={stripRef}
                      className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none]"
                    >
                      {screenshots.map((src, idx) => (
                        <motion.button
                          key={src}
                          type="button"
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: Math.min(idx, 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => {
                            setActiveImageIndex(idx);
                            setLightboxOpen(true);
                          }}
                          aria-label={`Open screenshot ${idx + 1}: ${project.screenshotDescription?.[idx] ?? ""}`}
                          className="relative aspect-[9/16] w-[170px] flex-shrink-0 snap-start overflow-hidden rounded-[12px] border border-border bg-surface-soft sm:w-[190px]"
                        >
                          <Image
                            src={src}
                            alt={project.screenshotDescription?.[idx] ?? `Screenshot ${idx + 1}`}
                            fill
                            priority={idx < 3}
                            sizes="190px"
                            className="object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-text-muted">
                      {screenshots.length} screenshots · tap to preview
                    </span>
                    <div className="flex gap-2">
                      {[-1, 1].map((dir) => (
                        <motion.button
                          key={dir}
                          type="button"
                          whileTap={{ scale: 0.9 }}
                          onClick={() => stripRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" })}
                          aria-label={dir < 0 ? "Scroll screenshots left" : "Scroll screenshots right"}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-canvas text-text active:bg-surface-strong"
                        >
                          {dir < 0 ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Lightbox preview */}
                  <AnimatePresence>
                    {lightboxOpen && (
                      <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Screenshot preview"
                        tabIndex={-1}
                        ref={(el) => el?.focus()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setLightboxOpen(false)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setLightboxOpen(false);
                          if (e.key === "ArrowLeft") showImage(activeImageIndex - 1);
                          if (e.key === "ArrowRight") showImage(activeImageIndex + 1);
                        }}
                        className="fixed inset-0 z-[60] flex items-center justify-center gap-3 bg-[#0d1218]/85 p-4 outline-none sm:gap-6"
                      >
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            showImage(activeImageIndex - 1);
                          }}
                          aria-label="Previous screenshot"
                          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-canvas text-text active:bg-surface-strong sm:flex"
                        >
                          <ChevronLeft size={18} />
                        </motion.button>

                        <motion.div
                          initial={{ scale: 0.92, y: 16 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0.92, y: 16 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          onClick={(e) => e.stopPropagation()}
                          className="relative aspect-[9/16] h-[min(85vh,calc((100vw-2rem)*16/9))] overflow-hidden rounded-[16px] bg-[#0d1218]"
                        >
                          <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                              key={activeImageIndex}
                              custom={direction}
                              variants={slideVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{ type: "spring", stiffness: 260, damping: 32 }}
                              drag="x"
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0.6}
                              onDragEnd={(_, info) => {
                                if (info.offset.x < -SWIPE_THRESHOLD) showImage(activeImageIndex + 1);
                                else if (info.offset.x > SWIPE_THRESHOLD) showImage(activeImageIndex - 1);
                              }}
                              className="absolute inset-0 cursor-grab active:cursor-grabbing"
                            >
                              <Image
                                src={screenshots[activeImageIndex]}
                                alt={activeCaption ?? `Screenshot ${activeImageIndex + 1}`}
                                fill
                                draggable={false}
                                sizes="(min-width: 640px) 480px, 100vw"
                                className="pointer-events-none object-cover"
                              />
                            </motion.div>
                          </AnimatePresence>
                        </motion.div>

                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            showImage(activeImageIndex + 1);
                          }}
                          aria-label="Next screenshot"
                          className="hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-canvas text-text active:bg-surface-strong sm:flex"
                        >
                          <ChevronRight size={18} />
                        </motion.button>

                        <button
                          type="button"
                          onClick={() => setLightboxOpen(false)}
                          aria-label="Close preview"
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-text active:bg-surface-strong"
                        >
                          <X size={18} />
                        </button>
                        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-canvas px-3 py-1 font-mono text-xs text-text">
                          {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                          {String(screenshots.length).padStart(2, "0")}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
                ) : (
                <>
                <div className="rounded-[12px] border border-border bg-surface-soft px-4 py-8 sm:px-8 sm:py-10">
                  <div className="flex items-center justify-center gap-3 sm:gap-6">
                    {screenshots.length > 1 && (
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => showImage(activeImageIndex - 1)}
                        aria-label="Previous screenshot"
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-canvas text-text active:bg-surface-strong"
                      >
                        <ChevronLeft size={18} />
                      </motion.button>
                    )}

                    {/* Phone frame */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full max-w-[240px]"
                    >
                      {/* Side buttons */}
                      <span className="absolute -left-[3px] top-[18%] h-8 w-[3px] rounded-l-sm bg-[#181d26]" />
                      <span className="absolute -left-[3px] top-[28%] h-12 w-[3px] rounded-l-sm bg-[#181d26]" />
                      <span className="absolute -right-[3px] top-[24%] h-16 w-[3px] rounded-r-sm bg-[#181d26]" />

                      <div className="rounded-[44px] bg-[#181d26] p-[9px] shadow-[0_24px_48px_-16px_rgba(24,29,38,0.35)]">
                        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[36px] bg-canvas">
                          <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                              key={activeImageIndex}
                              custom={direction}
                              variants={slideVariants}
                              initial="enter"
                              animate="center"
                              exit="exit"
                              transition={{ type: "spring", stiffness: 260, damping: 32 }}
                              drag={screenshots.length > 1 ? "x" : false}
                              dragConstraints={{ left: 0, right: 0 }}
                              dragElastic={0.6}
                              onDragEnd={(_, info) => {
                                if (info.offset.x < -SWIPE_THRESHOLD) showImage(activeImageIndex + 1);
                                else if (info.offset.x > SWIPE_THRESHOLD) showImage(activeImageIndex - 1);
                              }}
                              className="absolute inset-0 cursor-grab active:cursor-grabbing"
                            >
                              <Image
                                src={screenshots[activeImageIndex]}
                                alt={`Screenshot ${project.title} - ${activeImageIndex + 1}`}
                                fill
                                priority
                                draggable={false}
                                sizes="240px"
                                className="pointer-events-none object-cover"
                              />
                            </motion.div>
                          </AnimatePresence>

                          {/* Dynamic island & home indicator */}
                          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-[#181d26]" />
                          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-10 h-1 w-20 -translate-x-1/2 rounded-full bg-[#181d26]/30" />
                        </div>
                      </div>
                    </motion.div>

                    {screenshots.length > 1 && (
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => showImage(activeImageIndex + 1)}
                        aria-label="Next screenshot"
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-border bg-canvas text-text active:bg-surface-strong"
                      >
                        <ChevronRight size={18} />
                      </motion.button>
                    )}
                  </div>

                  {/* Counter & caption */}
                  <div className="mt-8 flex flex-col items-center text-center">
                    <span className="font-mono text-xs text-text-muted">
                      {String(activeImageIndex + 1).padStart(2, "0")} /{" "}
                      {String(screenshots.length).padStart(2, "0")}
                    </span>
                    <div className="relative mt-1 h-7 w-full overflow-hidden">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={activeImageIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="block truncate font-sans text-[18px] font-medium leading-[1.4] text-text"
                        >
                          {activeCaption ?? project.title}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    {/* Progress segments */}
                    {screenshots.length > 1 && (
                      <div className="mt-4 flex w-full max-w-[240px] gap-1">
                        {screenshots.map((_, idx) => (
                          <span key={idx} className="relative h-1 flex-1 overflow-hidden rounded-full bg-surface-strong">
                            {idx <= activeImageIndex && (
                              <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 origin-left rounded-full bg-[#181d26]"
                              />
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Thumbnails */}
                {screenshots.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto px-1 py-1 pb-2 justify-center">
                    {screenshots.map((src, idx) => (
                      <motion.button
                        key={idx}
                        type="button"
                        whileTap={{ scale: 0.92 }}
                        onClick={() => showImage(idx)}
                        aria-label={`Show screenshot ${idx + 1}`}
                        aria-current={activeImageIndex === idx}
                        animate={{ opacity: activeImageIndex === idx ? 1 : 0.55, y: activeImageIndex === idx ? -2 : 0 }}
                        className="relative aspect-[9/16] w-12 flex-shrink-0 rounded-[6px]"
                      >
                        <span className="absolute inset-0 overflow-hidden rounded-[6px] border border-border bg-surface-soft">
                          <Image
                            src={src}
                            alt=""
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </span>
                        {activeImageIndex === idx && (
                          <motion.span
                            layoutId="thumb-indicator"
                            transition={{ type: "spring", stiffness: 400, damping: 34 }}
                            className="absolute -inset-[3px] rounded-[8px] border-2 border-[#181d26]"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}
                </>
                )}
              </MotionConfig>

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
                    const TechIcon = techIcon(t);
                    return (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-canvas py-1.5 pl-1.5 pr-3"
                      >
                        <span className="flex h-6 w-6 items-center justify-center rounded-[6px] bg-[color-mix(in_srgb,var(--tone)_14%,white)] text-[var(--tone)]">
                          <TechIcon size={13} strokeWidth={2.25} />
                        </span>
                        <span className="font-sans text-[13px] font-medium text-text">{t}</span>
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Overview */}
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Overview
                </h3>
                {/* div instead of p: the global p rule would override size and line-height */}
                <div className="space-y-4">
                  {(Array.isArray(project.overview) ? project.overview : [project.overview]).map(
                    (paragraph, index) =>
                      index === 0 ? (
                        <div
                          key={index}
                          className="font-sans text-[16px] leading-[1.6] text-text break-words"
                        >
                          {paragraph}
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="font-sans text-[14px] leading-[1.7] text-text-body break-words"
                        >
                          {paragraph}
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Key features */}
              {project.descriptionPoints && project.descriptionPoints.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-text-muted">
                    Key Features
                  </h3>
                  <ul className="divide-y divide-border overflow-hidden rounded-[10px] border border-border bg-canvas">
                    {project.descriptionPoints.map((point, index) => {
                      // "Title — detail" → short title row, detail revealed on tap
                      const match = point.match(/^(.+?)\s+[—–-]\s+(.+)$/);
                      const title = match ? match[1] : point;
                      const detail = match?.[2];
                      const isOpen = openFeature === index;
                      const FeatureIcon = featureIcon(title);
                      return (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => setOpenFeature(isOpen ? null : index)}
                            aria-expanded={isOpen}
                            disabled={!detail}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-surface-soft disabled:cursor-default"
                          >
                            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--tone)_14%,white)] text-[var(--tone)]">
                              <FeatureIcon size={14} strokeWidth={2.25} />
                            </span>
                            <span className="flex-1 font-sans text-[14px] font-medium leading-[1.4] text-text break-words">
                              {title}
                            </span>
                            {detail && (
                              <motion.span
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-shrink-0 text-text-muted"
                              >
                                <ChevronDown size={16} />
                              </motion.span>
                            )}
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && detail && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pb-4 pl-[52px] pr-4 font-sans text-[13px] leading-[1.6] text-text-muted break-words">
                                  {detail}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
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
