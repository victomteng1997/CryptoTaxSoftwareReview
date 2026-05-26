// SITE.url is the site ORIGIN only (no path). The base path is configured in
// astro.config.mjs and applied at use time via link()/absoluteUrl() in
// src/lib/path.ts. Keep this in sync with the SITE_URL in astro.config.mjs.
export const SITE = {
  url: import.meta.env.SITE ?? 'https://victomteng1997.github.io',
  title: 'Crypto Tax Software Review',
  tagline:
    'Crypto tax software reviewed for import coverage, reports, and audit trails. / Software fiscal cripto revisado por importaciones, informes y trazabilidad.',
  description:
    'Independent crypto tax software reviews comparing exchange imports, wallet support, DeFi and NFT handling, reports, and accountant workflows. También cubrimos software de impuestos cripto en español para usuarios hispanohablantes que necesitan ordenar historiales, exportaciones y evidencia.',
  author: {
    name: 'Gelei',
    aboutPath: '/about',
    email: 'gelei@quantstamp.com',
    sameAs: [] as string[],
  },
  locale: 'es_ES',
  defaultOgImage: '/og-default.png',
  cloudflareAnalyticsToken: '',
  navLinks: [
    { label: 'Reviews / Reseñas', href: '/reviews' },
    { label: 'About / Acerca', href: '/about' },
    { label: 'RSS', href: '/rss.xml' },
  ] as const,
} as const;
