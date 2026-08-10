import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[14px] text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[14px] text-text-muted hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[14px] text-text-muted hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[14px] text-text-muted hover:text-text transition-colors"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
