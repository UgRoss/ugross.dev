import React from 'react';
import classNames from 'classnames';

export enum AlertTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'error',
}

interface AlertProps {
  type: AlertTypes;
  className: string;
  children: string | React.ReactElement;
}

export const Alert: React.FC<AlertProps> = ({ type, className, children }) => {
  const alertClassName = classNames(
    className,
    'Alert',
    `relative w-full my-4 mx-0 py-2 px-4 rounded border-l-4 bg-gray-50`,
    {
      'border-blue-400': type === 'info',
      'border-green-400': type === 'success',
      'border-yellow-500': type === 'warning',
      'border-red-400': type === 'error',
    }
  );
  return <div className={alertClassName}>{children}</div>;
};
