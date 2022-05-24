import React from 'react';
import classNames from 'classnames';

enum AlertTypes {
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
    `relative w-full my-4 mx-0 py-2 px-4 rounded border-l-4 bg-gray-50 dark:bg-zinc-700`,
    {
      'border-blue-400': type === AlertTypes.INFO,
      'border-emerald-400': type === AlertTypes.SUCCESS,
      'border-amber-500': type === AlertTypes.WARNING,
      'border-red-400': type === AlertTypes.DANGER,
    }
  );
  return <div className={alertClassName}>{children}</div>;
};
