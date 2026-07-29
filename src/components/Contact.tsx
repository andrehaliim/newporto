"use client";
import { useState } from "react";
import { Mail, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons/BrandIcons";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");

      // Tutup form otomatis setelah beberapa detik
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
      }, 2500);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionLabel index="04" name="contact.tsx" />

      <div className="mt-3 rounded-xl border border-border bg-surface p-8 sm:p-12 transition-all duration-500">
        <h2 className="font-mono text-2xl font-bold sm:text-3xl">
          Let's Connect
        </h2>
        <p className="mt-3 max-w-lg text-text-muted">
          I'm always open to new opportunities, collaborations, and interesting
          discussions. Feel free to reach out through any of the channels below.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div
            className={`grid transition-all duration-500 ease-in-out ${isOpen
                ? "grid-rows-[1fr] opacity-100 mb-6 translate-y-0"
                : "grid-rows-[0fr] opacity-0 pointer-events-none -translate-y-4"
              }`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col gap-4 pb-4 max-w-lg">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-mono text-xs text-text-muted">
                    Nama
                  </label>
                  <input
                    id="name"
                    type="text"
                    required={isOpen}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:border-accent-2 focus:outline-none transition font-mono text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-mono text-xs text-text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required={isOpen}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:border-accent-2 focus:outline-none transition font-mono text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-mono text-xs text-text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required={isOpen}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={4}
                    className="rounded-lg border border-border bg-bg px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:border-accent-2 focus:outline-none transition font-mono text-sm resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-mono text-sm sm:flex-row sm:flex-wrap items-center">
            <button
              type={isOpen ? "submit" : "button"}
              disabled={status === "sending"}
              onClick={(e) => {
                if (!isOpen) {
                  e.preventDefault();
                  setIsOpen(true);
                }
              }}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-accent-2 px-5 py-2.5 font-semibold text-bg transition hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Mail size={16} />{" "}
              {!isOpen
                ? profile.email
                : status === "sending"
                  ? "Sending..."
                  : "Send"}
            </button>

            {isOpen && (
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-red-500 hover:text-red-500"
              >
                <X size={16} /> Cancel
              </button>
            )}



            {isOpen && status === "sent" && (
              <span className="text-green-500">Message sent!</span>
            )}
            {isOpen && status === "error" && (
              <span className="text-red-500">Failed to send. Try again.</span>
            )}

            {!isOpen && (
              <>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-text transition hover:border-accent-2 hover:text-accent-2"
                >
                  <TwitterIcon size={16} /> Twitter
                </a>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
