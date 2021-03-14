import React from 'react';
import { Layout } from '~/components/Layout';
import { Hero } from '~/components/Hero';
import TypographyMarkdown from '../../../content/pages/typography.mdx';

const TypographyDemoPage: React.FC = () => {
  return (
    <Layout>
      <Hero>
        <div className="container text-center">
          <h1>🔠 Typography Demo</h1>
        </div>
      </Hero>
      <div className="container">
        <TypographyMarkdown />
      </div>
    </Layout>
  );
};

export default TypographyDemoPage;
