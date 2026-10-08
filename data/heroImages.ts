// Drop your photos in public/images/hero/ and list them here (installations, team, rooftops, etc.).
// Tip: ~800px wide, compressed JPG/WebP (under ~150 KB each) so the hero loads fast on mobile data.
// Fewer than 9? They repeat. Missing files just show a blue tile.
export const heroImages: string[] = Array.from({ length: 9 }, (_, i) => `/images/hero/${i + 1}.jpg`);
