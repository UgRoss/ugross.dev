module.exports = {
  siteMetadata: {
    title: `Rostyslav Ugryniuk | Front-end developer`,
    author: 'Rostyslav Ugryniuk',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ross | Front-end Dev.',
        short_name: 'Ross - FE Dev.',
        icons: [
          {
            src: '/static/logo.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    `gatsby-plugin-offline`
  ],
};
