import React from 'react';
import { PrevNextPostLink, POST_DIRECTION } from '~/components/PrevNextPostLink';

interface SimplifiedArticle {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface PrevNextPostsProps {
  previousPost: SimplifiedArticle;
  nextPost: SimplifiedArticle;
}

/** Navigation to previous/next posts from the current post */
export const PrevNextPosts: React.FC<PrevNextPostsProps> = ({ previousPost, nextPost }) => {
  if (!previousPost && !nextPost) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-between items-center mt-3 mb-3">
      {previousPost && (
        <PrevNextPostLink
          link={previousPost.fields.slug}
          direction={POST_DIRECTION.prev}
          title={previousPost.frontmatter.title}
        />
      )}
      {nextPost && (
        <PrevNextPostLink
          link={nextPost.fields.slug}
          direction={POST_DIRECTION.next}
          title={nextPost.frontmatter.title}
        />
      )}
    </div>
  );
};
