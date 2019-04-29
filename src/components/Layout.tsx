import * as React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';

import '../styles/index.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Keep showing footer
   * @default true
   */
  footer?: boolean;
  /**
   * Show header
   * @default true
   */
  header?: boolean;
}

/**
 * @name Layout
 * @description Main Layout component
 * @render react
 * @example <Layout>Hello</Layout>
 */
class Layout extends React.PureComponent<IProps> {
  public static defaultProps: Partial<IProps> = {
    footer: true,
    header: true,
  };

  public render = () => {
    const { className, header, children, footer } = this.props;

    return (
      <div className={className}>
        {header && <Nav />}
        <div style={{ paddingTop: '100px' }}>{children}</div>
        {footer && <Footer />}
      </div>
    );
  };
}

const StyledLayout = styled(Layout)`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 20px 10px;
  @media (min-width: 500px) {
    padding: 0 40px 20px;
  }
`;

export default StyledLayout;
