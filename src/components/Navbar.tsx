"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-1.5 font-sans text-lg font-semibold tracking-tight text-text hover:opacity-90"
          >
            <span>Andre Haliim</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative py-1 font-sans text-sm font-medium text-text-muted transition-colors hover:text-text after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
            <div className="h-4 w-px bg-border" />
            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-text-muted hover:bg-surface hover:text-text focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-t border-border bg-bg/95 backdrop-blur-lg ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 font-sans text-base font-medium text-text-muted transition-colors hover:bg-surface hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
