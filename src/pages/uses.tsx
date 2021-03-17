import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { Hero } from '~/components/Hero';
import { siteConfig } from '~/config/site.config';
import { UsesPageQuery } from '~/types/graphql';

const { name } = siteConfig;

interface UsesPageProps {
  data: UsesPageQuery;
}

const UsesPage: React.FC<UsesPageProps> = ({ data }) => {
  const pageBody = data.mdx?.body ?? '';
  const pageTitle = `Uses - ${name}`;
  const pageDescription = `The tools ${name} uses`;

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription} />
      <Hero>
        <div className="container text-center">
          <h1 className="mt-0">Uses</h1>
          <p className="mb-0 text-md font-medium">All of the gear and software I use daily as of 2021</p>
        </div>
      </Hero>
      <div className="container">
        <MDXRenderer>{pageBody}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query usesPage {
    mdx(frontmatter: { pageName: { eq: "uses" } }) {
      body
    }
  }
`;

export default UsesPage;
