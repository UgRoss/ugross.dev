import React from 'react';
import Link from 'gatsby-link';
import WelcomeHeadline from '../components/WelcomeHeadline';

import '../styles/pages/construction.scss';

const IndexPage = () => (
  <div className="construction-content">
    <div className="welcome-text">
      <strong className="welcome-text__status">This site is currently under construction.</strong>
      <h2 style={{ fontSize: '40px' }}>👋 Hello there!</h2>
      <WelcomeHeadline />
    </div>
    <img src="/robot.svg" alt="" />
  </div>
);

export default IndexPage;
