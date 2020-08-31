module.exports = {
  siteMetadata: {
    title: `Atole Media`,
    description: `Take a sip of creativity. Movie, videogame reviews with a dash of art sprinkled in!`,
    author: `@theuncannyvalle`,
    image: `images/Atole-card.jpg`,
    url: `https://atolemedia.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `atole-media`,
        short_name: `atole`,
        start_url: `/`,
        background_color: `#3B2D60`,
        theme_color: `#3B2D60`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Titillium Web", "Roboto"],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
} 
