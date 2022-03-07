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
    'px-2 text-sm font-medium leading-loose cursor-pointer',
    'bg-sky-100 hover:bg-sky-200 dark:bg-slate-600 dark:hover:bg-slate-700',
    'text-gray-900 dark:text-gray-200',
    'border border-solid border-transparent hover:border-transparent rounded-lg',
    'transition easy-linear duration-300'
  );

  return (
    <a {...props} className={tagClassName}>
      {children}
    </a>
  );
};
