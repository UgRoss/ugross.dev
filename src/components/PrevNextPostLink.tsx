import React from 'react';
import { Link } from 'gatsby';

export enum POST_DIRECTION {
  prev = 'prev',
  next = 'next',
}

interface PrevNextPostLinkProps {
  link: string;
  title: string;
  direction: POST_DIRECTION;
}

export const PrevNextPostLink: React.FC<PrevNextPostLinkProps> = ({ link, title, direction }) => {
  const titleWithDirectionSymbol = direction === POST_DIRECTION.prev ? `← ${title}` : `${title} →`;

  return (
    <Link to={link} rel={direction} className="button button--tint button--with-active-color">
      {titleWithDirectionSymbol}
    </Link>
  );
};
