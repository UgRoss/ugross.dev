import React from 'react';
import classNames from 'classnames';

interface TagProps {
  children: string | React.ReactChild;
}

export const Tag: React.FC<TagProps & React.HTMLProps<HTMLAnchorElement>> = ({
  className,
  children,
  ...props
}) => {
  const tagClassName = classNames(
    className,
    'm-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer',
    'border-0'
  );
  return (
    <a {...props} className={tagClassName}>
      {children}
    </a>
  );
};

export default Tag;
