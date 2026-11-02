"use client";

import { useRef, useState } from "react";

interface ProjectTypeSwiperProps {
  labels: string[];
  children: React.ReactNode;
}

// Mobile: tabs + swipeable panels; sm+: two-column grid
export default function ProjectTypeSwiper({ labels, children }: ProjectTypeSwiperProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setActive(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-2 border-b border-border sm:hidden">
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            onClick={() => goTo(index)}
            className={`-mb-px border-b-2 pb-2 first:text-left last:text-right font-mono text-[12px] uppercase tracking-wider transition-colors ${
              active === index
                ? "border-text text-text"
                : "border-transparent text-text-muted hover:text-text"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="mt-6 flex snap-x snap-mandatory items-start gap-6 overflow-x-auto [scrollbar-width:none] sm:mt-10 sm:grid sm:grid-cols-2 sm:overflow-visible"
      >
        {children}
      </div>
    </>
  );
}
