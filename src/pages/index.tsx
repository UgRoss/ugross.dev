import { Link } from 'gatsby';
import * as React from 'react';

import { Layout } from '~/components/Layout';
import { ProfileHeader } from '~/components/ProfileHeader/ProfileHeader';
import { SEO } from '~/components/SEO';
import { SocialLinksList } from '~/components/SocialLinksList';
import { MainTools } from '~/components/MainTools/MainTools';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { siteConfig } from '~/config/site.config';

const IndexPage: React.FC = () => {
  const pageTitle = `${siteConfig.name} - ${siteConfig.jobTitle}`;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <div className="hero">
        <div className="container">
          <ProfileHeader />
        </div>
      </div>
      <div className="container">
        <section className="about" style={{ marginBottom: '2rem' }}>
          <h3 className="text-lg">
            <AccessibleEmoji emoji="👨🏼‍💻" description="Laptop Emoji" />
            {' A little about myself...'}
          </h3>
          <p>
            {`I'm Ross, a front-end developer, and CS degree student, currently
            Living in Ukraine 🇺🇦. On a daily basis, I work on front-end projects
            with up-to-date technologies, and I love what I do. In my free time
            I enjoy traveling and snowboarding.`}
          </p>
        </section>
        <section className="about" style={{ marginBottom: '1rem' }}>
          <h3 className="text-lg">
            <AccessibleEmoji emoji="⚒️" description="Tools Emoji" />
            {' Tools'}
          </h3>
          <MainTools />
        </section>
        <section className="about" style={{ marginBottom: '2rem' }}>
          <h3 className="text-lg">
            <AccessibleEmoji emoji="📝" description="Notes Emoji" />
            {' Blog'}
          </h3>
          <p>
            {'My latest blog post can be found on '}
            <Link to="/blog" className="with-underline">
              Blog page
            </Link>
            {', you can also check my '}
            <a
              href="https://til.ugross.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="with-underline"
            >
              TIL
            </a>
            .
          </p>
        </section>
        <section className="about" style={{ marginBottom: '2rem' }}>
          <h3 className="text-lg">
            <AccessibleEmoji emoji="✉️" description="Notes Emoji" />
            {' Want to discuss something?'}
          </h3>
          <p>
            {'Don’t hesitate to drop me a message using the '}
            <Link to="/contact">contact page</Link>
            {', or contact me via my social profiles: '}
            <SocialLinksList />
            <span>.</span>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default IndexPage;
