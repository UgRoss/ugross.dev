import React from 'react';
import { ContactForm } from '~/components/ContactForm';
import { Layout } from '~/components/Layout';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { siteConfig } from '~/config/site.config';
import { SEO } from '~/components/SEO';

interface NetlifyFormProps {
  location: {
    pathname: string;
  };
}

const NetlifyForm: React.FC<NetlifyFormProps> = ({ location }) => {
  const pageTitle = `${siteConfig.name} - ${siteConfig.jobTitle} | Contact Me`;

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
        <p className="text-center">
          {`If you want to say hi just go for it!! Don't be shy. I am a friendly person, you 'll
          see...😊`}
        </p>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default NetlifyForm;
