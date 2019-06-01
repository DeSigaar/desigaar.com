/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    siteUrl: "http://desigaar.com/"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "De Sigaar",
        short_name: "DeSigaar",
        start_url: "/",
        background_color: "#282828",
        theme_color: "#282828",
        display: "standalone",
        icon: "src/assets/icons/DeSigaar-Sigaar.png"
      }
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: true,
        https: false,
        www: false,
        host: "desigaar.com"
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://desigaar.com/",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp"
  ]
};
