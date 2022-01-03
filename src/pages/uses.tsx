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
  const image = data.mdx?.frontmatter?.image?.childImageSharp?.resize ?? undefined;
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription} image={image} />
      <Hero>
        <div className="container text-center">
          <h1 className="text-4xl my-5 font-extrabold">Uses</h1>
          <p className="mb-0 text-md font-medium">
            All of the gear and software I use daily as of {currentYear}
          </p>
        </div>
      </Hero>
      <div className="container">
        <div className="prose dark:prose-invert">
          <MDXRenderer>{pageBody}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query usesPage {
    mdx(frontmatter: { pageName: { eq: "uses" } }) {
      body
      frontmatter {
        image {
          childImageSharp {
            resize(width: 1200) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`;

export default UsesPage;
