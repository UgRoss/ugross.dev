import * as React from 'react';
import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

const Projects: React.FC = () => {
  return (
    <Layout>
      <SEO title="My Projects" />
      <div className="hero">
        <div className="container">
          <h1 className="text-center font-jetbrains">
            <span className="text-secondary">{'<'}</span>
            <span className="text-tertiary">Projects</span>
            <span className="text-secondary">{' />'}</span>
          </h1>
        </div>
      </div>
      <div className="text-center mt-3">
        <h2>Whoops!</h2>
        <h2>I am sorry, content here will be soon.</h2>
      </div>
    </Layout>
  );
};

export default Projects;
