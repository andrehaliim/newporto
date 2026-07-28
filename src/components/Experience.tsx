import { Download } from "lucide-react";
import { experience, profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="03" name="experience.tsx" />
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-mono text-2xl font-bold sm:text-3xl">
          Professional Experience
        </h2>
        <a
          href={profile.cvFile}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 font-mono text-sm text-text-muted transition hover:border-accent-2 hover:text-accent-2"
        >
          Download CV <Download size={15} />
        </a>
      </div>

      <div className="mt-10 border-l border-border pl-6">
        {experience.map((exp) => (
          <div key={exp.id} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-accent-2 bg-bg" />
            <p className="font-mono text-xs text-text-muted">{exp.period}</p>
            <h3 className="mt-1 font-mono text-lg font-semibold text-text">
              {exp.role} <span className="text-text-muted">· {exp.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-text-muted">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
