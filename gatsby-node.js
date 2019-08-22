/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { kebabCase, get } = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

// tslint:disable:object-literal-sort-keys
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    let slug;
    if (get(node, 'frontmatter.slug', false)) {
      slug = `/${kebabCase(node.frontmatter.slug)}`;
    } else if (get(node, 'frontmatter.title', false)) {
      slug = `/blog/${kebabCase(node.frontmatter.title)}`;
    } else {
      slug = createFilePath({ node, getNode, basePath: `posts` });
    }

    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          component: path.resolve('./src/templates/Post.tsx'),
          path: node.fields.slug,
          context: {
            // Previous/Next posts
            previous,
            next,
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
  });
};
