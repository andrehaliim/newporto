import { skills } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { profile } from "@/data/portfolio";

export default function About() {
  // Let's add extra skills based on Andre's profile description if needed, or stick to the list and style them beautifully
  const extendedSkills = skills.length === 1 && skills[0] === "Flutter" 
    ? ["Flutter", "Dart", "ObjectBox", "Firebase", "State Management", "REST APIs", "iOS & Android", "Git"]
    : skills;

  // Let's map indexes to signature pastel styles to add "brand voltage"
  const pastelStyles = [
    "bg-sig-peach/20 text-[#aa2d00] border-sig-peach/30",
    "bg-sig-mint/30 text-[#0a2e0e] border-sig-mint/40",
    "bg-sig-cream text-text border-border",
    "bg-sig-yellow/25 text-[#d9a441] border-sig-yellow/40",
  ];

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 border-t border-border">
      <SectionLabel index="01" name="about.dart" />
      <h2 className="mt-4 font-sans text-[32px] font-normal leading-[1.2] text-text">
        About Me
      </h2>
      <div className="mt-8 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3 space-y-4">
          <p className="text-[14px] leading-relaxed text-text-body text-justify">
            {profile.description.paragraph1}
          </p>
          <p className="text-[14px] leading-relaxed text-text-body text-justify">
            {profile.description.paragraph2}
          </p>
          <p className="text-[14px] leading-relaxed text-text-body text-justify">
            {profile.description.paragraph3}
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            tech_stack.json
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {extendedSkills.map((skill, idx) => {
              const styleClass = pastelStyles[idx % pastelStyles.length];
              return (
                <span
                  key={skill}
                  className={`rounded-[6px] border px-3 py-1.5 font-mono text-xs font-medium transition-colors ${styleClass}`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
