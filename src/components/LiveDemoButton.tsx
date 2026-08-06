"use client";

import { useState } from "react";
import { ExternalLink, Loader2, Download } from "lucide-react";

interface LiveDemoButtonProps {
  demoUrl: string;
  className?: string;
  children?: React.ReactNode;
}

export default function LiveDemoButton({ demoUrl, className, children }: LiveDemoButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the URL points to GitHub API releases
    if (demoUrl.includes("api.github.com/repos/") && demoUrl.includes("/releases")) {
      e.preventDefault();
      if (loading) return;

      setLoading(true);
      try {
        const response = await fetch(demoUrl);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}`);
        }
        const data = await response.json();

        // Search for .apk asset in release assets, or fallback to the first available asset
        let downloadUrl = "";
        if (data.assets && Array.isArray(data.assets) && data.assets.length > 0) {
          const apkAsset = data.assets.find((asset: { name?: string; browser_download_url?: string }) =>
            asset.name?.endsWith(".apk")
          );
          downloadUrl = apkAsset?.browser_download_url || data.assets[0]?.browser_download_url;
        }

        if (downloadUrl) {
          window.location.href = downloadUrl;
        } else if (data.html_url) {
          // Fallback to GitHub release page if no assets found
          window.open(data.html_url, "_blank");
        } else {
          window.open(demoUrl, "_blank");
        }
      } catch (error) {
        console.error("Failed to fetch GitHub release download URL:", error);
        // Fallback to opening link directly
        window.open(demoUrl, "_blank");
      } finally {
        setLoading(false);
      }
    }
  };

  const isGitHubApi = demoUrl.includes("api.github.com/repos/");

  return (
    <a
      href={demoUrl}
      onClick={handleClick}
      target={isGitHubApi ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className={className}
    >
      {loading ? (
        <>
          <Loader2 size={16} className="animate-spin" /> Downloading...
        </>
      ) : children ? (
        children
      ) : (
        <>
          {isGitHubApi ? <Download size={16} /> : <ExternalLink size={16} />}
          {isGitHubApi ? "Download" : "Live Demo"}
        </>
      )}
    </a>
  );
}
