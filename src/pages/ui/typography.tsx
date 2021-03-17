import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '~/components/Layout';
import { Hero } from '~/components/Hero';
import { TypographyPageQuery } from '~/types/graphql';

interface TypographyDemoPageProps {
  data: TypographyPageQuery;
}

const TypographyDemoPage: React.FC<TypographyDemoPageProps> = ({ data }) => {
  const pageBody = data.mdx?.body ?? '';

  return (
    <Layout>
      <Hero>
        <div className="container text-center">
          <h1>🔠 Typography Demo</h1>
        </div>
      </Hero>
      <div className="container">
        <MDXRenderer>{pageBody}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query typographyPage {
    mdx(frontmatter: { pageName: { eq: "typography" } }) {
      body
    }
  }
`;

export default TypographyDemoPage;
