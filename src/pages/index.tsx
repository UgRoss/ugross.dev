import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import { HeroProfile } from '~/components/HeroProfile';
import { siteConfig } from '~/config/site.config';
import { IndexPageQuery } from '~/types/graphql';

const { name, jobTitle, avatar } = siteConfig;

interface IndexPageProps {
  data: IndexPageQuery;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const pageTitle = `${name} - ${jobTitle}`;
  const pageBody = data.mdx?.body ?? '';

  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroProfile img={avatar} name={name} jobTitle={jobTitle} />
      <div className="container">
        <div className="prose dark:prose-invert max-w-none">
          <MDXRenderer>{pageBody}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexPage {
    mdx(frontmatter: { pageName: { eq: "index" } }) {
      id
      body
    }
  }
`;

export default IndexPage;
