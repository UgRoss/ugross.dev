import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { NotFoundPageQuery } from '~/types/graphql';

interface NotFoundPageProps {
  data: NotFoundPageQuery;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
  const pageBody = data.mdx?.body ?? '';

  return (
    <Layout showHeader={false} showFooter={false}>
      <SEO title="404: The page could not be found" />
      <div className="text-center flex flex-col items-center justify-center h-screen">
        <MDXRenderer>{pageBody}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query notFoundPage {
    mdx(frontmatter: { pageName: { eq: "404" } }) {
      body
    }
  }
`;

export default NotFoundPage;
