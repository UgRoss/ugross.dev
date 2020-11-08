import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonProps = React.DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: 'md' | 'lg';
  block?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  className,
  block = false,
  disabled,
  type = 'button',
  ...props
}) => {
  const buttonClass = classNames('Button Button--primary', className, {
    'Button--block': block,
    'Button--disabled': disabled,
  });
  return <button className={buttonClass} disabled={disabled} type={type} {...props} />;
};
