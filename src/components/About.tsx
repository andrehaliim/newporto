import { skills } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="01" name="about.dart" />
      <h2 className="mt-3 font-mono text-2xl font-bold sm:text-3xl">
        About Me
      </h2>
      <div className="mt-8 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-text-muted leading-relaxed">
            I am a dedicated Software Engineer with over 5 years of experience specializing in mobile app development using Flutter for both Android and iOS. While Flutter is my primary tool, I also have experience coding in Kotlin and Swift for native app development.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            Beyond mobile development, I have contributed to backend development using PHP Laravel and Node.js (JavaScript), collaborating with teams to build robust applications. My ability to adapt quickly allows me to seamlessly switch between frontend and backend tasks, ensuring high-quality solutions in dynamic environments.
          </p>
          <p className="mt-4 text-text-muted leading-relaxed">
            I am a flexible professional, comfortable working both independently and within a team, always eager to learn new technologies and enhance my skill set.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            tech_stack.json
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

