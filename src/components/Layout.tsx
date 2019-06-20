import * as React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';

import '../styles/index.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Display footer
   * @default true
   */
  footer?: boolean;
  /**
   * Display header
   * @default true
   */
  header?: boolean;
}

/** Layout Wrapper */
const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px 10px;
  @media (min-width: 500px) {
    padding: 0 40px 20px;
  }
`;

/**
 * @name Layout
 * @description Main Layout component
 * @render react
 * @example <Layout>Hello</Layout>
 */
const Layout: React.FunctionComponent<IProps> = ({
  footer = true,
  header = true,
  className,
  children,
}) => (
  <Wrapper className={className}>
    {header && <Nav />}
    <div style={{ paddingTop: '100px' }}>{children}</div>
    {footer && <Footer />}
  </Wrapper>
);

export default Layout;
