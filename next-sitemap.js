module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_URL,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapBaseFileName: 'sitemap',
  alternateRefs: [
    // TODO: https://github.com/iamvishnusankar/next-sitemap/issues/172
    // {
    //   href: `${process.env.NEXT_PUBLIC_URL}`,
    //   hreflang: 'en',
    // },
    // {
    //   href: `${process.env.NEXT_PUBLIC_URL}/nl`,
    //   hreflang: 'nl',
    // },
  ],
  sitemapSize: 100,
  generateRobotsTxt: true,
  autoLastmod: true,
  exclude: ['/website'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: ['/'], disallow: ['/website'] }],
  },
};
