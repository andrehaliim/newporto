"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DartIcon } from "./icons/BrandIcons";

const tabs = [
  { id: "home", label: "home.dart" },
  { id: "about", label: "about.dart" },
  { id: "projects", label: "projects.dart" },
  { id: "experience", label: "experience.dart" },
  { id: "contact", label: "contact.dart" },
];

export default function EditorNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
        <span className="ml-3 font-mono text-xs text-text-muted">
          //portfolio — Andre Haliim Kurniawan
        </span>
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto text-text-muted hover:text-text md:hidden"
          aria-label="Buka menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* tabs */}
      <nav
        className={`${
          open ? "flex" : "hidden"
        } flex-col font-mono text-sm md:flex md:flex-row`}
      >
        {tabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2 border-b border-border px-4 py-2.5 text-text-muted hover:text-text hover:bg-surface md:border-b-0 md:border-r"
          >
            <DartIcon size={16} />
            {tab.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
