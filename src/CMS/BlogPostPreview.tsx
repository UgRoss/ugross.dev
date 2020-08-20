import React from 'react';
// import snarkdown from 'snarkdown';
// import { Post } from '~/components/Post';
import { PostAuthor } from '~/components/PostAuthor';
import { CatchError } from './CatchError';

interface BlogPostPreviewProps {
  entry: {
    getIn: (path: string[]) => string;
  };
  widgetFor: (widgetName: string) => any;
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ entry }) => {
  console.log('entr', entry);
  return (
    <CatchError>
      <PostAuthor />
    </CatchError>
    // <Post
    //   body={snarkdown(entry.getIn(['data', 'body']))}
    //   title={entry.getIn(['data', 'title'])}
    //   pubDate="now"
    //   date="now"
    //   timeToRead={0}
    // >
    //   <PostAuthor />
    // </Post>
  );
};

export default BlogPostPreview;
