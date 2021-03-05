import React from 'react';
import styled from 'styled-components';
import { Link } from '~/components/Link';
import { Avatar } from '~/components/Avatar';

interface PostAuthorProps {
  name: string;
  avatar: string;
  bio: string;
}

const PostAuthorWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 2rem auto;
  border-top: 1px solid var(--color-horizontal-rule);
  padding: 1rem 0;
  margin: 2rem 0;
  color: var(--color-text);
`;

const PostAuthorBio = styled.span`
  display: block;
  color: var(--color-text-muted);
  font-size: 0.8em;
  line-height: 1.5em;
  margin-bottom: 0;
`;

/** Author block inside blog post */
export const PostAuthor: React.FC<PostAuthorProps> = ({ name, avatar, bio }) => {
  return (
    <PostAuthorWrapper>
      <Avatar img={avatar} name={name} size={2} />
      <div>
        <Link to="/" asText>
          {name}
        </Link>
        <PostAuthorBio>{bio}</PostAuthorBio>
      </div>
    </PostAuthorWrapper>
  );
};
