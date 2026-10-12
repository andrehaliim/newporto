import { NextResponse } from 'next/server';

type Asset = { name?: string; browser_download_url?: string };

// Redirects to the latest GitHub release asset (prefers arm64-v8a .apk).
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
    const apks = assets.filter((a) => a.name?.endsWith('.apk'));
    // Prefer arm64-v8a for split-per-abi builds (covers most modern phones)
    const asset = apks.find((a) => a.name?.includes('arm64-v8a')) ?? apks[0] ?? assets[0];

    return NextResponse.redirect(asset?.browser_download_url ?? releasePage);
  } catch {
    return NextResponse.redirect(releasePage);
  }
}
