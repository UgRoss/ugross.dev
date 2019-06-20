import React from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
}

const Wrapper = styled.footer`
  border-top: 1px solid var(--separatorColor);
  padding: 40px 0 20px;
  margin-top: 50px;
  text-align: center;
  font-size: 0.9em;
  color: var(--mutedColor);
  p {
    margin-bottom: 10px;
  }
`;

const currentYear = new Date().getFullYear();

/**
 * Main layout footer
 * @render react
 * @example <Footer />
 */
const Footer: React.FC<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <p>
      © Copyright
      {` ${currentYear} `}
      Rostyslav Ugryniuk
    </p>
  </Wrapper>
);

export default Footer;
