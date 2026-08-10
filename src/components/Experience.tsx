import { Download } from "lucide-react";
import { experience, profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <SectionLabel index="03" name="experience.dart" />
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-sans text-[32px] font-normal leading-[1.2] text-text">
          Professional Experience
        </h2>
        <a
          href={profile.cvFile}
          download
          className="inline-flex items-center gap-2 rounded-[12px] border border-border bg-canvas px-5 py-3 font-sans text-[16px] font-medium text-text transition hover:bg-surface-soft"
        >
          Download CV <Download size={15} />
        </a>
      </div>

      <div className="mt-10 border-l border-border pl-6">
        {experience.map((exp) => (
          <div key={exp.id} className="relative mb-10 last:mb-0">
            {/* Timeline dot */}
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-canvas" />
            <p className="font-mono text-[13px] text-text-muted">{exp.period}</p>
            <h3 className="mt-1 font-sans text-[20px] font-normal leading-[1.5] text-text">
              {exp.role}{" "}
              <span className="text-text-muted font-normal">· {exp.company}</span>
            </h3>
            <ul className="mt-3 max-w-2xl space-y-2 list-disc pl-5">
              {exp.description.map((point, index) => (
                <li key={index} className="text-[14px] leading-relaxed text-text-muted marker:text-accent">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
