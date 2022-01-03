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
    'px-2 text-sm font-normal leading-loose cursor-pointer',
    'text-gray-700 bg-gray-100 border border-solid border-gray-200 rounded',
    'hover:bg-gray-200 hover:border-transparent transition easy-linear duration-300',
  );
  return (
    <a {...props} className={tagClassName}>
      {children}
    </a>
  );
};

export default Tag;
