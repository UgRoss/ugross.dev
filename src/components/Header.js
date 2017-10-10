import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  a {
    color: currentColor;
  }
  > div:first-child {
    margin-right: 30px;
    font-weight: bold;
  }
  @media (min-width: 400px) {
    flex-direction: row;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <div className="header__name">
        Rostyslav <small>(Ross)</small> Ugryniuk
      </div>
      <a href="mailto:me@ugross.space">me@ugross.space</a>
    </Header>
  );
};

HeaderComponent.propTypes = {};

export default HeaderComponent;
