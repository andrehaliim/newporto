import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="04" name="contact.tsx" />

      <div className="mt-3 rounded-xl border border-border bg-surface p-8 sm:p-12">
        <h2 className="font-mono text-2xl font-bold sm:text-3xl">
          Let's Connect
        </h2>
        <p className="mt-3 max-w-lg text-text-muted">
          I'm always open to new opportunities, collaborations, and interesting
          discussions. Feel free to reach out through any of the channels below.
        </p>

        <div className="mt-8 flex flex-col gap-3 font-mono text-sm sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-2 px-5 py-2.5 font-semibold text-bg transition hover:brightness-110"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
          >
            <TwitterIcon size={16} /> Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
