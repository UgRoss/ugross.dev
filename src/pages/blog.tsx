import React from 'react';
import { graphql } from 'gatsby';
import { AllPostsSortedQuery } from '~/types/graphql';
import { siteConfig } from '~/config/site.config';
import { Layout } from '~/components/Layout';
import { PostPreview } from '~/components/PostPreview';
import { SEO } from '~/components/SEO';
import { Hero } from '~/components/Hero';

interface BlogProps {
  data: AllPostsSortedQuery;
}

const Blog: React.FC<BlogProps> = ({ data: { posts } }) => {
  const pageTitle = `Blog | ${siteConfig.name}`;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Hero>
        <div className="container">
          <h1 className="text-center mt-0 text-4xl my-5 font-extrabold">
            <span className="text-secondary">{'<'}</span>
            <span className="text-tertiary font-mono">Blog</span>
            <span className="text-secondary">{' />'}</span>
          </h1>
        </div>
      </Hero>
      <div className="container">
        {posts.edges.map(({ node }) => (
          <PostPreview
            key={node.fields.slug}
            url={node.fields.slug}
            title={node.frontmatter.title}
            excerpt={node.frontmatter.spoiler || node.excerpt}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query allPostsSorted {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { collection: { eq: "posts" } } }
      limit: 1000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            pubDate: date(formatString: "YYYY-MM-DD")
            spoiler
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
