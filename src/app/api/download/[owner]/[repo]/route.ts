import { NextResponse } from 'next/server';

type Asset = { name?: string; browser_download_url?: string };

// Redirects to the latest GitHub release asset (prefers .apk).
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ owner: string; repo: string }> }
) {
  const { owner, repo } = await params;
  const releasePage = `https://github.com/${owner}/${repo}/releases/latest`;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/releases/latest`,
      {
        headers: { Accept: 'application/vnd.github+json' },
        // Cache for an hour to stay well under GitHub's unauthenticated rate limit
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return NextResponse.redirect(releasePage);

    const data: { assets?: Asset[] } = await res.json();
    const assets = data.assets ?? [];
    const asset = assets.find((a) => a.name?.endsWith('.apk')) ?? assets[0];

    return NextResponse.redirect(asset?.browser_download_url ?? releasePage);
  } catch {
    return NextResponse.redirect(releasePage);
  }
}
