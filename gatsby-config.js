module.exports = {
  siteMetadata: {
    siteUrl: "https://criipto-document-signatures-docs.netlify.app",
    title: "Criipto Document Signatures Docs",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
        ignore: [`**/*\.graphql\.tsx`],
      },
      __key: "pages",
    },
  ],
};
