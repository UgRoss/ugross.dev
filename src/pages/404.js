import React from 'react';
import Link from 'gatsby-link';

import '../styles/pages/notfound.scss';

const NotFoundPage = () => (
  <div className="not-found-wrapper">
    <h1>404</h1>
    <p>
      This page could not be found. <Link to="/">Return to homepage.</Link>
    </p>
  </div>
);

export default NotFoundPage;
