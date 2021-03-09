module.exports = {
  siteMetadata: {
    title: "PG-Clima",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "####",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
  pathPrefix: "/github.com/emas94/pg-clima",
}
