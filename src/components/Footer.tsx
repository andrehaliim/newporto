import { company, profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-[14px] text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="font-sans text-[14px] text-text-muted text-center sm:text-right">
          Operated by {company.legalName} ·{" "}
          <span className="whitespace-nowrap">{company.city}</span> ·{" "}
          <a
            href={`mailto:${company.email}`}
            className="whitespace-nowrap underline-offset-4 hover:text-text hover:underline transition-colors"
          >
            {company.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
