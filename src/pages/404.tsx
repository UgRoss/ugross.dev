import React from 'react';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';
import NotFoundPageMarkdown from '../../content/pages/404.mdx';

const NotFoundPage: React.FC = () => (
  <Layout showHeader={false} showFooter={false}>
    <SEO title="404: The page could not be found" />
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <NotFoundPageMarkdown />
    </div>
  </Layout>
);

export default NotFoundPage;
