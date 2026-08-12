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
        <span className="text-text">Developer</span>{" "}
        <span className="text-accent-pink">extends</span>{" "}
        <span className="text-text font-medium">StatelessWidget</span> {"{"}
      </span>
    ),
  },
  {
    n: 4,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> name ={" "}
        <span className="text-text-muted">&quot;{profile.name}&quot;</span>;
      </span>
    ),
  },
  {
    n: 5,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> role ={" "}
        <span className="text-text-muted">&quot;{profile.role}&quot;</span>;
      </span>
    ),
  },
  {
    n: 6,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> location ={" "}
        <span className="text-text-muted">&quot;{profile.location}&quot;</span>;
      </span>
    ),
  },
  {
    n: 7,
    content: (
      <span className="pl-6 block">
        <span className="text-accent-pink">final</span> status ={" "}
        <span className="text-text-muted">&quot;open to work&quot;</span>;
      </span>
    ),
  },
  { n: 8, content: <span>{"}"}</span> },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col-reverse gap-12 px-6 py-24 md:flex-row md:items-stretch"
    >
      <div className="flex-1">
        <div className="overflow-hidden rounded-[12px] border border-border bg-surface-soft">
          <div className="flex items-center gap-2 border-b border-border bg-surface-strong/30 px-4 py-2 font-mono text-[11px] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-sig-coral/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-sig-yellow/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-sig-mint/60" />
            <span className="ml-2 font-medium">portfolio.dart</span>
          </div>
          <div className="flex px-4 py-5 font-mono text-[13px] leading-6">
            <div className="select-none pr-4 text-right text-text-muted/40">
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

        <h1 className="mt-8 font-sans text-[40px] font-normal leading-[1.2] tracking-tight text-text">
          Hello, I'm {profile.name.split(" ")[0]}.{" "}
          <span className="text-accent-pink font-medium">{profile.role}.</span>
        </h1>
        <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-text-muted">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-[12px] bg-accent px-6 py-3.5 font-sans text-[16px] font-medium text-white transition hover:bg-accent/90"
          >
            See Projects <ArrowDown size={16} />
          </a>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-[12px] border border-border bg-canvas px-6 py-3.5 font-sans text-[16px] font-medium text-text transition hover:bg-surface-soft"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </div>

      <div className="w-full shrink-0 md:w-75 md:-my-24">
    <div className="h-full w-full overflow-hidden rounded-[12px]">
      <picture className="block h-full w-full">
        <source
          media="(max-width: 767px)"
          srcSet={profile.photo2}
        />

        <img
          src={profile.photo}
          alt={profile.name}
          className="h-full w-full object-cover object-[100%_top]"
        />
      </picture>
    </div>
  </div>
    </section>
  );
}
