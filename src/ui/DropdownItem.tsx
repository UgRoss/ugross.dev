import { clsx } from 'clsx';
import { Fragment } from 'react';
import { IconType } from 'react-icons';

export interface DropdownOption {
  label: string;
  secondaryText?: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  disabled?: boolean;
  withSeparator?: boolean;
}

export interface DropdownItemProps extends DropdownOption {
  onClick: () => void;
}

export function DropdownItem({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  secondaryText,
  disabled,
  onClick,
  withSeparator = false,
}: DropdownItemProps) {
  console.log('withSeparator', withSeparator);
  return (
    <Fragment>
      {withSeparator && <div className="border-t border-t-slate-200 my-2 w-full" />}
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          'border border-transparent flex items-center w-52 px-4 py-2 text-sm text-left text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
        )}
        onClick={onClick}
      >
        {LeftIcon && <LeftIcon className="flex-shrink-0 mr-2 h-4 w-4" />}
        <span className="flex-1 truncate font-medium mr-4">{label}</span>
        {secondaryText && <span className="flex-shrink-0 text-gray-500">{secondaryText}</span>}
        {RightIcon && <RightIcon className="flex-shrink-0 ml-2 w-4 h-4" />}
      </button>
    </Fragment>
  );
}
