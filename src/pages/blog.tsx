import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '~/components/Layout';
import { PostPreview } from '~/components/PostPreview';
import { SEO } from '~/components/SEO';
import { siteConfig } from '~/config/site.config';

interface BlogProps {
  data: {
    posts: IGraphQL.AllMdx;
  };
}

export const Blog: React.FC<BlogProps> = ({ data: { posts } }) => {
  const pageTitle = `Blog - ${siteConfig.name}`;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="hero mb-0">
        <div className="container">
          <h1 className="text-center font-jetbrains">
            <span className="text-secondary">{'<'}</span>
            <span className="text-tertiary">Blog</span>
            <span className="text-secondary">{' />'}</span>
          </h1>
        </div>
      </div>
      {posts.edges.map(({ node }) => (
        <PostPreview
          key={node.fields.slug}
          url={node.fields.slug}
          title={node.frontmatter.title}
          excerpt={node.frontmatter.spoiler || node.excerpt}
          date={node.frontmatter.date}
          pubDate={node.frontmatter.pubDate}
          timeToRead={node.timeToRead}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    posts: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
          timeToRead
          excerpt
        }
      }
    }
  }
`;

export default Blog;
