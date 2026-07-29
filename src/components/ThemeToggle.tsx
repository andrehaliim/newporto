"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read initial theme on mount
    const savedTheme = localStorage.getItem("theme");
    const currentTheme = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    
    if (savedTheme === "light" || (!savedTheme && currentTheme === "light")) {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.removeAttribute("data-theme");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!mounted) {
    // Render placeholder with same layout size to prevent layout shifts
    return (
      <div className="w-8 h-8 rounded-lg border border-border bg-surface-2/30" />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className="relative w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-surface-2/30 text-text-muted hover:text-text hover:bg-surface-2 hover:border-text-muted transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute transition-all duration-500 ease-out transform ${
          isLight 
            ? "rotate-0 scale-100 opacity-100" 
            : "rotate-90 scale-0 opacity-0"
        }`}
      >
        <Sun size={16} className="text-accent" />
      </div>
      <div
        className={`absolute transition-all duration-500 ease-out transform ${
          isLight 
            ? "-rotate-90 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <Moon size={16} className="text-accent-2" />
      </div>
    </button>
  );
}
