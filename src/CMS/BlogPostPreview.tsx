import React from 'react';
import BlogPost from '../components/BlogPost';
import PostAuthor from '../components/PostAuthor';

interface IProps {
  entry: {
    getIn: (path: string[]) => string;
  };
  widgetFor: (widgetName: string) => string;
}

const BlogPostPreview: React.FC<IProps> = ({ entry, widgetFor }) => (
  <BlogPost html={widgetFor('body')} title={entry.getIn(['data', 'title'])} pubDate="now" date="now" timeToRead={0}>
    <PostAuthor />
  </BlogPost>
);

export default BlogPostPreview;
