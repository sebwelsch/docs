require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://new-docs-test.criipto.com",
    title: "Criipto Documentation for Verify and Signatures",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
        ignore: [`**/*\.graphql\.tsx`],
      },
      __key: "pages",
    }
  ].concat(process.env.ALGOLIA_APP_ID ? [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries")
      },
    }
  ] : []),
};
