import React from 'react';
import styled from 'styled-components';

interface TagProps {
  children: string | React.ReactChild;
}

export const Tag = styled.a<TagProps>`
  background-color: var(--color-tag-background);
  padding: 0.2rem 0.5rem;
  border-radius: 0.8rem;
  border: none;
  color: var(--color-tag-text);
  font-weight: 600;
  &:hover,
  &:focus {
    color: var(--color-tag-text);
    background-color: var(--color-tag-background-hover);
  }
`;

export default Tag;
