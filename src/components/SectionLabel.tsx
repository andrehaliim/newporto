export default function SectionLabel({
  index,
  name,
  light = false,
}: {
  index: string;
  name: string;
  light?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 font-mono text-xs ${light ? "text-white/50" : "text-text-muted"}`}>
      <span className={light ? "text-white/70" : "text-accent-pink"}>{index}</span>
      <span className={`h-px w-8 flex-1 max-w-8 ${light ? "bg-white/20" : "bg-border"}`} />
      <span>{name}</span>
    </div>
  );
}
