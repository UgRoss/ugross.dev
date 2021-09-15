/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { kebabCase } = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

const MARKDOWN_COLLECTION_TYPES = {
  posts: 'posts',
  pages: 'pages',
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const isMarkdownNode = node.internal.type === 'MarkdownRemark' || node.internal.type === 'Mdx';

  if (isMarkdownNode) {
    const slug = node.frontmatter?.slug ?? null;
    const title = node.frontmatter?.title ?? null;
    const parent = getNode(node.parent);
    const collectionName = parent.sourceInstanceName; // 'name' option in `gatsby-source-filesystem` configuration
    const isPostsCollection = collectionName === MARKDOWN_COLLECTION_TYPES.posts;

    let postSlug;
    if (postSlug) {
      postSlug = `/${kebabCase(slug)}`;
    } else if (title && isPostsCollection) {
      postSlug = `/blog/${kebabCase(title)}`;
    } else {
      postSlug = createFilePath({ node, getNode, basePath: `posts` });
    }

    createNodeField({ node, name: `slug`, value: postSlug });
    createNodeField({ node, name: 'collection', value: collectionName });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
      {
        allPosts: allMdx(
          sort: {fields: [frontmatter___date], order: DESC}
          filter: { fields: { collection: { eq: "${MARKDOWN_COLLECTION_TYPES.posts}" } } }
          limit: 1000
        ) {
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
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allPosts.edges;
  const tags = result.data.tagsGroup.group;

  posts.forEach(({ node }) =>
    createPage({
      component: path.resolve('./src/templates/Post.tsx'),
      path: node.fields.slug,
      context: {
        slug: node.fields.slug,
      },
    })
  );

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: path.resolve('./src/templates/Tags.tsx'),
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
      fields: MdxFields!
    }

    type MdxFrontmatter {
      date: Date! @dateformat
      title: String!
      image: File @fileByRelativePath
      spoiler: String
      tags: [String!]
    }

    type MdxFields {
      slug: String!
    }
  `;

  createTypes(typeDefs);
};
