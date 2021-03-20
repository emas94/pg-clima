module.exports = {
  assetPrefix: `./`,
  siteMetadata: {
    title: "PG-Clima",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "####",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
