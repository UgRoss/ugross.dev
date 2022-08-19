import React from 'react';
import classNames from 'classnames';

enum AlertTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
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
    `relative w-full my-4 mx-0 p-4 rounded-r border-l-[3px]`,
    {
      'bg-info border-info': type === AlertTypes.INFO,
      'bg-success border-success': type === AlertTypes.SUCCESS,
      'bg-warning border-warning': type === AlertTypes.WARNING,
      'bg-error border-error': type === AlertTypes.ERROR,
    }
  );
  return <div className={alertClassName}>{children}</div>;
};
