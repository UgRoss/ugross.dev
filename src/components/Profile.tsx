import * as React from 'react';
import styled from 'styled-components';
import avatar from '~/images/avatar.jpg';

interface IProps {
  className?: string;
}

const Wrapper = styled.div`
  padding: 0 40px;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.header`
  border-bottom: 1px solid var(--separatorColor);
  margin-bottom: 40px;
  padding-bottom: 40px;
  text-align: center;
  position: relative;
`;

const Profile: React.FunctionComponent<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <Header>
      <img src={avatar} alt="Rostyslav Ugryniuk" />
      <h1>Rostyslav Ugryniuk</h1>
      <h2>Front-end Developer</h2>
    </Header>
  </Wrapper>
);

const StyledProfile = styled(Profile)`
  padding: 0 40px;
  max-width: 600px;
  margin: 0 auto;

  img {
    display: block;
    width: 100px;
    height: 100px;
    background: var(--mutedColor);
    border-radius: 100%;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.8em;
    text-transform: capitalize;
    color: var(--titleColor);
    margin: 10px 0;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    color: var(--mutedColor);
  }
`;

export default StyledProfile;
