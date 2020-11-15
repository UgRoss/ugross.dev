import * as React from 'react';
import { Link } from 'gatsby';
import { Layout } from '~/components/Layout';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { SEO } from '~/components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout showHeader={false} showFooter={false}>
    <SEO title="404: The page could not be found" />
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
        <AccessibleEmoji
          emoji="😱"
          description="Face Screaming in Fear"
          style={{ fontSize: '3rem' }}
        />
      </div>
      <h2>Whoops! This page does not exist.</h2>
      <p>
        {'Not to worry. You can return to the '}
        <Link to="/">homepage</Link>
        <span>.</span>
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
