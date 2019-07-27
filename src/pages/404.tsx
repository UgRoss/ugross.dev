import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '~/components/Layout';
import Emoji from '~/components/AccessibleEmoji';

const Wrapper = styled.div`
  text-align: center;
  a {
    font-weight: bold;
  }
`;

const NotFoundPage = () => (
  <Layout header={false} footer={false}>
    <Helmet title="404: The page could not be found" />
    <Wrapper>
      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>
        <Emoji value="😱" description="Face Screaming in Fear" style={{ fontSize: '3rem' }} />
      </div>
      <h2>Whoops! This page doesn&rsquo;t exist.</h2>
      <p>
        {'Not to worry. You can return to the '}
        <Link to="/">homepage</Link>
        {' or to my '}
        <Link to="/blog">blog</Link>
        {'.'}
      </p>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
