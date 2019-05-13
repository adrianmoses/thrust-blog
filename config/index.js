module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Thrust Blog', // Navigation and Site Title
  siteTitleAlt: 'Thrust Blog - Songwriting', // Alternative Site title for SEO
  siteTitleManifest: 'Thrust Blog',
  siteUrl: 'https://blog.thrust.fm', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Thoughts On Songwriting', // Headline for schema.org JSONLD
  siteBanner: '/social/banner.png', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Songwriting Blog By Thrust', // Your site description
  author: 'MarsMoses', // Author for schemaORGJSONLD
  siteLogo: '/social/ThrustOGLogoSmall.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@marsmoses', // Twitter Username - Optional
  ogSiteName: 'minimal', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-6',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',
}
