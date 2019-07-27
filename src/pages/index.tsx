import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Mailto from 'react-protected-mailto';
import styled from 'styled-components';

import Layout from '~/components/Layout';
import Profile from '~/components/Profile';
import SEO from '~/components/SEO';
import SocialLinksList from '~/components/SocialLinksList';
import Tools from '~/components/Tools';
import Emoji from '~/components/AccessibleEmoji';

const Title = styled.h3`
  margin: 30px 0 10px;
  font-size: 1.2em;
`;

/**
 * @name IndexPage
 * @description Renders index page
 */
const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Rostyslav Ugryniuk" />
      <Profile />
      <div className="wrapper">
        <section className="about">
          <Title>
            <Emoji value="👨🏼‍💻" description="Laptop Emoji" />
            {' Who the hell am I?'}
          </Title>
          <p>
            {`I'm Ross, a front-end developer, and CS degree student, currently
            Living in Ukraine 🇺🇦. On a daily basis, I work on front-end projects
            with up-to-date technologies, and I love what I do. In my free time
            I enjoy traveling and snowboarding.`}
          </p>
        </section>
        <section className="about">
          <Title>
            <Emoji value="⚒️" description="Tools Emoji" />
            {' Tools'}
          </Title>
          <p style={{ marginBottom: '10px' }}>Things I know, like and work with:</p>
          <Tools />
          <p>Emmet, Jest, Next.js, GatsbyJS, Git, GraphQL, Pug, SASS, and more...</p>
        </section>
        <section className="about">
          <Title>
            <Emoji value="📝" description="Notes Emoji" />
            {' Blog'}
          </Title>
          <p>
            {'My latest blog post can be found on '}
            <Link to="/blog" className="with-underline">
              Blog page
            </Link>
            {', you can also check my '}
            <a
              href="https://github.com/UgRoss/TIL"
              target="_blank"
              rel="noopener noreferrer"
              className="with-underline"
            >
              TIL
            </a>
            .
          </p>
        </section>
        <section className="about">
          <Title>
            <Emoji value="✉️" description="Notes Emoji" />
            {' Want to discuss something?'}
          </Title>
          <p>
            {` Don’t hesitate to drop me an email on `}
            <Mailto email="contact@ugross.dev" className="with-underline" />
            {', or contact me via my social profiles: '}
            <SocialLinksList />
            {'.'}
          </p>
        </section>
      </div>
    </Layout>
  );
};

/** Get site meta to use */
export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        socialLinks {
          facebook
          linkedin
          github
        }
      }
    }
  }
`;

export default IndexPage;
