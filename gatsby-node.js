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
  const isNodeMarkdown = node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx';

  if (isNodeMarkdown) {
    const postSlug = get(node, 'frontmatter.slug', null);
    const postTitle = get(node, 'frontmatter.title', null);

    let slug;
    if (postSlug) {
      slug = `/${kebabCase(postSlug)}`;
    } else if (postTitle) {
      slug = `/blog/${kebabCase(postTitle)}`;
    } else {
      slug = createFilePath({ node, getNode, basePath: `posts` });
    }

    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const MARKDOWN_FRAGMENT = `
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
    `;

    graphql(`
      {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          ${MARKDOWN_FRAGMENT}
        }
      }
    `).then((result) => {
      const { data, errors } = result;

      if (errors) {
        reject(errors);
      }

      const posts = data.allMdx.edges;

      posts.forEach(({ node }, index) => {
        const previous = index === posts.length - 1 ? null : posts[index + 1].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          component: path.resolve('./src/templates/Post.tsx'),
          path: node.fields.slug,
          context: {
            previous,
            next,
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};
