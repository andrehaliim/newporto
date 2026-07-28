import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const lines = [
  { n: 1, content: <span className="text-text-muted">// developer_profile.dart</span> },
  { n: 2, content: <span></span> },
  {
    n: 3,
    content: (
      <span>
        <span className="text-accent-pink">class</span>{" "}
        <span className="text-accent">Developer</span>{" "}
        <span className="text-accent-pink">extends</span>{" "}
        <span className="text-accent">StatelessWidget</span> {"{"}
      </span>
    ),
  },
  {
    n: 4,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> name ={" "}
        <span className="text-accent">&quot;{profile.name}&quot;</span>;
      </span>
    ),
  },
  {
    n: 5,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> role ={" "}
        <span className="text-accent">&quot;{profile.role}&quot;</span>;
      </span>
    ),
  },
  {
    n: 6,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> location ={" "}
        <span className="text-accent">&quot;{profile.location}&quot;</span>;
      </span>
    ),
  },
  {
    n: 7,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> status ={" "}
        <span className="text-accent">&quot;open to work&quot;</span>;
      </span>
    ),
  },
  { n: 8, content: <span>{"}"}</span> },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col-reverse gap-10 px-6 py-20 md:flex-row md:items-center md:py-28"
    >
      <div className="flex-1">
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2 font-mono text-xs text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-pink/70" />
            <span className="h-2 w-2 rounded-full bg-accent/70" />
            <span className="h-2 w-2 rounded-full bg-accent-2/70" />
            <span className="ml-2">portfolio.tsx</span>
          </div>
          <div className="flex px-2 py-5 font-mono text-sm leading-7 sm:text-base">
            <div className="select-none pr-4 text-right text-text-muted/60">
              {lines.map((l) => (
                <div key={l.n}>{l.n}</div>
              ))}
            </div>
            <div className="flex-1 border-l border-border pl-4">
              {lines.map((l) => (
                <div key={l.n}>{l.content}</div>
              ))}
            </div>
          </div>
        </div>

        <h1 className="mt-8 font-mono text-3xl font-bold leading-tight sm:text-4xl">
          Hello, I'm {profile.name.split(" ")[0]}.{" "}
          <span className="text-accent-2">{profile.role}.</span>
        </h1>
        <p className="mt-4 max-w-xl text-text-muted">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-2 px-5 py-2.5 font-mono text-sm font-semibold text-bg transition hover:brightness-110"
          >
            See Projects <ArrowDown size={16} />
          </a>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-mono text-sm font-semibold text-text transition hover:border-accent-2 hover:text-accent-2"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </div>

      <div className="mx-auto md:mx-0">
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-border bg-surface sm:h-52 sm:w-52">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="208px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
