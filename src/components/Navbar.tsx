"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-canvas/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-6 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-1.5 font-sans text-base font-semibold tracking-tight text-text hover:opacity-80"
          >
            <span>Andre Haliim</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative py-1 font-sans text-[14px] font-medium text-text-muted hover:text-text transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 text-text-muted hover:bg-surface-soft hover:text-text focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out border-t border-border bg-canvas/95 backdrop-blur-lg ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
      >
        <nav className="flex flex-col px-6 py-3 gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-sans text-[14px] font-medium text-text-muted hover:bg-surface-soft hover:text-text transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
