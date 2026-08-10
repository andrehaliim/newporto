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
    <section id="contact" className="border-t border-border">
      {/* Signature dark CTA band */}
      <div className="bg-surface-dark text-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionLabel index="04" name="contact.dart" light={true} />

          <div className="mt-8 rounded-[12px] border border-white/10 bg-white/5 p-8 sm:p-12">
            <h2 className="font-sans text-[32px] font-normal leading-[1.2]" style={{ color: '#ffffff' }}>
              Let&apos;s Connect
            </h2>
            <p className="mt-3 max-w-lg text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              I&apos;m always open to new opportunities, collaborations, and interesting
              discussions. Feel free to reach out through any of the channels below.
            </p>

            <form onSubmit={handleSubmit} className="mt-8">
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 mb-6 translate-y-0"
                    : "grid-rows-[0fr] opacity-0 pointer-events-none -translate-y-4"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-4 pb-4 max-w-lg">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-mono text-xs text-white/50">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required={isOpen}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="h-11 rounded-[6px] border border-white/20 bg-white/10 px-4 py-2.5 text-white text-[14px] placeholder:text-white/30 focus:border-[#458fff] focus:outline-none transition font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-xs text-white/50">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required={isOpen}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="h-11 rounded-[6px] border border-white/20 bg-white/10 px-4 py-2.5 text-white text-[14px] placeholder:text-white/30 focus:border-[#458fff] focus:outline-none transition font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-mono text-xs text-white/50">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required={isOpen}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write your message here..."
                        rows={4}
                        className="rounded-[6px] border border-white/20 bg-white/10 px-4 py-2.5 text-white text-[14px] placeholder:text-white/30 focus:border-[#458fff] focus:outline-none transition font-sans resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap items-center">
                <button
                  type={isOpen ? "submit" : "button"}
                  disabled={status === "sending"}
                  onClick={(e) => {
                    if (!isOpen) {
                      e.preventDefault();
                      setIsOpen(true);
                    }
                  }}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-[12px] bg-white text-text px-6 py-3.5 font-sans text-[16px] font-medium transition hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed"
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
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-[12px] border border-white/20 px-6 py-3.5 text-white/70 font-sans text-[16px] font-medium transition hover:border-red-400 hover:text-red-400"
                  >
                    <X size={16} /> Cancel
                  </button>
                )}

                {isOpen && status === "sent" && (
                  <span className="text-[14px] text-[#39bf45]">Message sent!</span>
                )}
                {isOpen && status === "error" && (
                  <span className="text-[14px] text-red-400">Failed to send. Try again.</span>
                )}

                {!isOpen && (
                  <>
                    <a
                      href={profile.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-[12px] border border-white/20 px-6 py-3.5 text-white/70 font-sans text-[16px] font-medium transition hover:border-white/50 hover:text-white"
                    >
                      <GithubIcon size={16} /> GitHub
                    </a>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-[12px] border border-white/20 px-6 py-3.5 text-white/70 font-sans text-[16px] font-medium transition hover:border-white/50 hover:text-white"
                    >
                      <LinkedinIcon size={16} /> LinkedIn
                    </a>
                    <a
                      href={profile.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-[12px] border border-white/20 px-6 py-3.5 text-white/70 font-sans text-[16px] font-medium transition hover:border-white/50 hover:text-white"
                    >
                      <TwitterIcon size={16} /> Twitter
                    </a>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
