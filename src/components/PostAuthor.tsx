import React from 'react';
import styled from 'styled-components';

import avatar from '../images/avatar.jpg';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid var(--separatorColor);
  padding: 20px 0;
  margin: 40px 0;
  color: var(--textColor);
  border-bottom: 1px solid var(--separatorColor);
  img {
    border-radius: 100%;
    margin-right: 10px;
    width: 100%;
    max-width: 40px;
  }
`;

const AuthorName = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;

const AuthorDescription = styled(AuthorName)`
  color: var(--mutedColor);
  font-size: 0.8em;
  &:hover,
  &:active,
  &:visited {
    color: var(--mutedColor);
  }
`;

/**
 * @name PostAuthor
 * @description Block 'about author' for a blog post
 * @render React
 * @example <PostAuthor />
 */
const PostAuthor: React.FunctionComponent<{}> = () => {
  return (
    <Wrapper>
      <img src={avatar} alt="Rostyslav Ugryniuk" />
      <div>
        <AuthorName href="#">Rostyslav Ugryniuk</AuthorName>
        <AuthorDescription href="#">
          Front-end Developer, JavaScript enthusiast, and CS student. Living and
          coding in Ukraine.
        </AuthorDescription>
      </div>
    </Wrapper>
  );
};

export default PostAuthor;
