import React from 'react';
import { ContactForm } from '~/components/ContactForm';
import { Layout } from '~/components/Layout';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { siteConfig } from '~/config/site.config';
import { SEO } from '~/components/SEO';

const NetlifyForm: React.FC = () => {
  const pageTitle = `Contact - ${siteConfig.name}`;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="hero">
        <div className="container text-center">
          <h1>
            <AccessibleEmoji emoji="👋" description="Wave hand" />
            {' Hey, how are you?'}
          </h1>
        </div>
      </div>
      <div className="container" style={{ maxWidth: '500px' }}>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default NetlifyForm;
