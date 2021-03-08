import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { Link } from '~/components/Link';

const Article = styled.article.attrs((props) => ({
  className: classNames(props.className, 'pb-md'),
}))`
  position: relative;

  & + & {
    padding-top: var(--space-md, 1rem);
    margin-top: var(--space-md, 1rem);

    &:before {
      content: '';
      border-top: 1px solid var(--color-horizontal-rule, #ccc);
      width: 10rem;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

interface PostPreviewProps {
  url: string;
  title: string;
  excerpt: string;
  className?: string;
}

export const PostPreview: React.FC<PostPreviewProps> = ({ url, title, excerpt, className = '' }) => (
  <Article className={className}>
    <header>
      <h3>
        <Link to={url} asText={true}>
          {title}
        </Link>
      </h3>
    </header>
    <section>
      <p className="mb-xs">{excerpt}</p>
    </section>
    <footer>
      <Link to={url}>Read this article →</Link>
    </footer>
  </Article>
);
