import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 font-mono text-xs text-text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with
          Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
