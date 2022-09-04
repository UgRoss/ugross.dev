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
    'px-2 py-2 leading-none text-sm cursor-pointer',
    'text-primary-700 font-semibold',
    'rounded-2xl',
    'transition easy-linear duration-300',
    'border border-surface-neutral',
    {
      'bg-primary-200 hover:bg-primary-700 hover:text-default-on-dark': !active,
      'bg-primary-700 text-default-on-dark': active,
    }
  );

  return (
    <a {...props} className={tagClassName}>
      {children}
    </a>
  );
};
