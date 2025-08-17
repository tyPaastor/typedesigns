/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://typedesigns.com.au",
  generateRobotsTxt: true,             // also creates /robots.txt
  sitemapSize: 7000,                    // sensible default
  transform: async (config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
    alternateRefs: [],
  }),
  // Add or exclude routes as needed:
  // exclude: ["/drafts/*"],
  // additionalPaths: async (config) => {
  //   const projects = ["gallaghers"]; // fetch from your source if needed
  //   return projects.map((slug) => ({ loc: `/projects/${slug}` }));
  // },
};
