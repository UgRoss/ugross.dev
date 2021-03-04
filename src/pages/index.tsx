import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import HeroProfile from '~/components/HeroProfile';
import { siteConfig } from '~/config/site.config';
import IndexPageMarkdown from '../../content/pages/index.mdx';

const { name, jobTitle } = siteConfig;

const IndexPage: React.FC = () => {
  const pageTitle = `${name} - ${jobTitle}`;
  return (
    <Layout>
      <SEO title={pageTitle} />
      <HeroProfile img={siteConfig.avatar} name={siteConfig.name} jobTitle={siteConfig.jobTitle} />
      <div className="container">
        <MDXProvider>
          <IndexPageMarkdown />
        </MDXProvider>
      </div>
    </Layout>
  );
};

export default IndexPage;
