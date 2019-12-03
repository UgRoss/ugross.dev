import React from 'react';
import snarkdown from 'snarkdown';
import BlogPost from '../components/BlogPost';
import PostAuthor from '../components/PostAuthor';

interface IProps {
  entry: {
    getIn: (path: string[]) => string;
  };
  widgetFor: (widgetName: string) => any;
}

const BlogPostPreview: React.FC<IProps> = ({ entry }) => {
  return (
    <BlogPost
      html={snarkdown(entry.getIn(['data', 'body']))}
      title={entry.getIn(['data', 'title'])}
      pubDate="now"
      date="now"
      timeToRead={0}
    >
      <PostAuthor />
    </BlogPost>
  );
};

export default BlogPostPreview;
