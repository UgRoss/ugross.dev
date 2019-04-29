import React from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
}

const Wrapper = styled.footer`
  box-shadow: inset 0 1px 0 #eee;
  padding: 40px 0 20px;
  margin-top: 50px;
  text-align: center;
  font-size: 0.9em;
  color: #bbb;
  p {
    margin-bottom: 10px;
  }
`;

/**
 * Main layout footer
 * @render react
 * @example <Footer />
 */
const currentYear = new Date().getFullYear();
const Footer: React.FunctionComponent<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <p>
      © Copyright
      {` ${currentYear} `}
      Rostyslav Ugryniuk
    </p>
  </Wrapper>
);

export default Footer;
