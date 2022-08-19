import React from 'react';
import classNames from 'classnames';

interface TagProps {
  children: string | React.ReactElement;
  active?: boolean;
}

export const Tag: React.FC<TagProps & React.HTMLProps<HTMLAnchorElement>> = ({
  className,
  children,
  active = false,
  ...props
}) => {
  const tagClassName = classNames(
    className,
    'px-2 py-1 leading-4 text-sm leading-loose cursor-pointer',
    'text-default',
    // 'border border-solid border-gray-300 rounded-md',
    'rounded-lg',
    // 'dark:bg-gray-800 dark:border-gray-700 ',
    'transition easy-linear duration-300',
    'border border-surface-neutral',
    {
      'bg-surface-neutral-subdued hover:bg-surface-neutral': !active,
      // 'bg-gray-200/80 dark:bg-stone-800 border-gray-400 dark:border-gray-400': active,
      'bg-surface-neutral-hovered': active,
    }
  );

  return (
    <a {...props} className={tagClassName}>
      {children}
    </a>
  );
};
