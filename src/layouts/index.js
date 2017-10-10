import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Helmet from 'react-helmet';

import '../styles/index.scss';

const TemplateWrapper = ({ children, location }) => [
  <Helmet
    title="Rostyslav Ugryniuk | Front-end Developer"
    meta={[
      { name: 'description', content: `Welcome to my world! I'm front-end developer and product designer currently living in Ukraine.` },
      { name: 'keywords', content: 'sample, something' },
    ]}
    key="helmet"
  />,
  <div className="content" key="content">
    <Header />
    {children()}
  </div>,
];

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
