module.exports = {
  siteMetadata: {
    siteLanguage: 'en',
    siteUrl: 'https://ugross.dev',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~': 'src',
          '@ui': 'src/ui',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/static/uploads/` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/content/posts/` },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          { resolve: `gatsby-remark-relative-images` },
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 800 },
          },
          { resolve: 'gatsby-remark-responsive-iframe' },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-external-links',
            options: { target: '_blank' },
          },
        ],
      },
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
        short_name: 'Ross Blog',
        start_url: '/',
        background_color: '#222',
        theme_color: '#2691ff',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.edges.map((edge) => ({
                ...edge.node.frontmatter,
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
              })),
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'ugRoss.dev RSS Feed',
          },
        ],
      },
    },
  ],
};
