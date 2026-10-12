import { ExternalLink, Download } from "lucide-react";

interface LiveDemoButtonProps {
  demoUrl?: string | null;
  className?: string;
  children?: React.ReactNode;
}

export default function LiveDemoButton({ demoUrl, className, children }: LiveDemoButtonProps) {
  if (!demoUrl) return null;

  // Internal /api/download/... routes redirect to the latest release asset
  const isDownload = demoUrl.startsWith("/api/download/");

  return (
    <a
      href={demoUrl}
      target={isDownload ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={className}
    >
      {children ? (
        children
      ) : (
        <>
          {isDownload ? <Download size={16} /> : <ExternalLink size={16} />}
          {isDownload ? "Download" : "Live Demo"}
        </>
      )}
    </a>
  );
}
