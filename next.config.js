module.exports = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN:
      process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};
