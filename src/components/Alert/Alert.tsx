import React from 'react';
import classNames from 'classnames';
import { AlertTriangle, AlertCircle, CheckCircle, Info } from 'react-feather';
import './Alert.scss';

export enum AlertTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}

interface AlertProps {
  type: AlertTypes;
}

export const Alert: React.FC<AlertProps> = ({ children, type = AlertTypes.INFO }) => {
  const alertClass = classNames('Alert', `Alert--${type}`);
  const iconsMap = {
    [AlertTypes.INFO]: Info,
    [AlertTypes.SUCCESS]: CheckCircle,
    [AlertTypes.WARNING]: AlertCircle,
    [AlertTypes.DANGER]: AlertTriangle,
  };
  const AlertIcon: React.FC = iconsMap[type];

  return (
    <div className={alertClass}>
      <div className="Alert__icon">
        <AlertIcon />
      </div>
      {children}
    </div>
  );
};
