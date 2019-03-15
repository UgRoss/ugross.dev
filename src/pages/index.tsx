import { graphql } from 'gatsby';
import * as React from 'react';
import Mailto from 'react-protected-mailto';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Link from '../components/Link';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import SocialLinksList from '../components/SocialLinksList';
import Tools from '../components/Tools';

const Title = styled.h3`
  margin: 30px 0 10px;
  font-size: 1.2em;
`;

/**
 * @name IndexPage
 * @description Renders index page
 */
const IndexPage: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <SEO title="Rostyslav Ugryniuk" />
      <Profile />
      <div className="wrapper">
        <section className="about">
          <Title>👨🏼‍💻 Who the hell am I?</Title>
          <p>
            I'm Ross, a front-end developer, and CS degree student, currently
            Living in Ukraine 🇺🇦. On a daily basis, I work on front-end projects
            with up-to-date technologies, and I love what I do. In my free time
            I enjoy traveling and snowboarding.
          </p>
        </section>
        <section className="about">
          <Title>⚒️ Tools</Title>
          <p style={{ marginBottom: '10px' }}>
            Things I know, like and work with:
          </p>
          <Tools />
          <p>
            Emmet, Vue, GraphQL, MongoDB, Docker, Jest, Next.js, GatsbyJS, Git,
            Pug, and more...
          </p>
        </section>
        <section className="about">
          <Title>📝 Blog</Title>
          <p>
            My latest blog post can be found on{' '}
            <Link to="/blog">Blog page</Link>, you can also check my{' '}
            <Link
              href="https://github.com/UgRoss/TIL"
              target="_blank"
              rel="nofollow"
            >
              TIL
            </Link>
            .
          </p>
        </section>
        <section className="about">
          <Title>✉️ Want to discuss something?</Title>
          <p>
            Don’t hesitate to drop me an email on{' '}
            <Mailto email="contact@ugross.dev" />
            , or contact me via my social profiles: <SocialLinksList />.
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
          linkedIn
          github
        }
      }
    }
  }
`;

export default IndexPage;
