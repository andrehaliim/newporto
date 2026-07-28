export default function SectionLabel({
  index,
  name,
}: {
  index: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 flex-1 max-w-8 bg-border" />
      <span>{name}</span>
    </div>
  );
}
