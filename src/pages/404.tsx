import * as React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from '../components/Link';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    display: inline-block;
    width: 100%;
    max-width: 300px;
    margin-bottom: 50px;
  }
  a {
    font-weight: bold;
  }
`;

const NotFoundPage = () => (
  <Layout header={false} footer={false}>
    <Helmet title="404: The page could not be found" />
    <Wrapper>
      <img src="/404.webp" alt="Shock reaction gif" />
      <h1>Whoops! This page doesn't exist.</h1>
      <p>
        Not to worry. You can return to the <Link to="/">homepage</Link> or to
        my <Link to="/blog">blog</Link>.
      </p>
    </Wrapper>
  </Layout>
);

export default NotFoundPage;
