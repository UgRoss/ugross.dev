// tslint:disable:object-literal-sort-keys
module.exports = {
  siteMetadata: {
    author: 'Rostyslav Ugryniuk',
    description:
      'Front-end Developer, JavaScript enthusiast and CS student. Living and coding in Ukraine.',
    logo: '',
    siteLanguage: 'en',
    siteUrl: 'https://ugross.space', // No trailing slash!
    social: {
      twitter: '@ug_ross',
    },
    socialLinks: {
      facebook: 'https://www.facebook.com/ugr.ross',
      github: 'https://github.com/UgRoss',
      linkedin: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
    },
    title: '',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 710 },
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-external-links',
            options: { target: '_blank' },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/content/posts/` },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      options: { files: ['**/*.tsx*'] },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-135374915-1` },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ross Blog',
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: 'Ross Blog',
        start_url: '/',
        background_color: '##222',
        theme_color: '#2691ff',
        /* eslint-enable @typescript-eslint/camelcase */
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
