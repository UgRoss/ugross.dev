import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Projects: React.FunctionComponent<{}> = () => {
  return (
    <Layout>
      <SEO title="My Projects" />
      <div style={{ textAlign: 'center' }}>
        <h2>Whoops!</h2>
        <h2>I'm sorry, content here will be soon.</h2>
        <img
          src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"
          alt="Awkward Emotion"
          style={{ marginTop: '40px', width: '100%' }}
        />
      </div>
    </Layout>
  );
};

export default Projects;
