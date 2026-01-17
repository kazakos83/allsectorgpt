// Loads CMS JSON pages from /content/pages
// Note: Vite supports import.meta.glob for build-time imports
const pages = import.meta.glob("../../content/pages/*.json", { eager: true });

export function getPageBySlug(slug) {
  const match = Object.values(pages).find((m) => m?.default?.slug === slug);
  return match?.default || null;
}

export function getAllPages() {
  return Object.values(pages).map((m) => m.default);
}
