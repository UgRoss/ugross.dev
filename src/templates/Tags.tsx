import React from 'react';
import { graphql } from 'gatsby';
import { TagArticlesQuery } from '~/types/graphql';
import { siteConfig } from '~/config/site.config';
import { Layout } from '~/components/Layout';
import { PostPreview } from '~/components/PostPreview';
import { SEO } from '~/components/SEO';
import { Hero } from '~/components/Hero';

interface TagsProps {
  data: TagArticlesQuery;
  pageContext: {
    tag: string;
  };
}

const Tags: React.FC<TagsProps> = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const pageTitle = `Posts tagged: ${tag} | ${siteConfig.name}`;
  const { edges, totalCount } = data.posts;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <Hero>
        <div className="container text-center">
          <h1 className="mt-0 text-4xl font-bold">
            <span className="text-muted">Posts tagged: </span>
            <span>{tag}</span>
          </h1>
          <p className="text-muted mt-5 text-xl">{totalCount} posts found.</p>
        </div>
      </Hero>
      <div className="container">
        {edges.map(({ node }) => (
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

export default Tags;

export const query = graphql`
  query tagArticles($tag: String) {
    posts: allMdx(
      limit: 100
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
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
