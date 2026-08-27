"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { profile, skills } from "@/data/portfolio";

const CATEGORY_LABELS: Record<keyof typeof skills, string> = {
  languages: "languages",
  frameworks: "frameworks",
  databases: "storage",
  tools: "tools",
  practices: "practices",
  aiTools: "ai_tools",
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const badgeVariant: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <SectionLabel index="01" name="about" />
      <h2 className="mt-4 font-sans text-[32px] font-normal leading-[1.2] text-text">
        About Me
      </h2>
      <div className="mt-8 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4">
          {Object.values(profile.description).map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-[14px] leading-relaxed text-text-body text-justify"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            tech_stack.json
          </p>

          <motion.div
            className="mt-4 space-y-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={container}
          >
            {(Object.keys(skills) as (keyof typeof skills)[]).map((category) => (
              <div key={category}>
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted/60">
                  // {CATEGORY_LABELS[category]}
                </p>
                <motion.div
                  className="mt-2 flex flex-wrap gap-2"
                  variants={container}
                >
                  {skills[category].map((skill) => (
                    <motion.span
                      key={skill}
                      variants={badgeVariant}
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        transition: { duration: 0.15 },
                      }}
                      className="rounded-[6px] border border-border bg-surface px-3 py-1.5 font-mono text-xs font-medium text-text-body cursor-default transition-colors duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_0_1px] hover:shadow-accent/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}