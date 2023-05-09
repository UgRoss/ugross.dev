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
      {withSeparator && (
        <div className="my-2 w-full border-t border-t-slate-200 dark:border-t-zinc-700" />
      )}
      <button
        type="button"
        disabled={disabled}
        className={clsx(
          'flex w-52 items-center border border-transparent px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-slate-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:text-gray-200 dark:hover:bg-zinc-700 dark:hover:text-white'
        )}
        onClick={onClick}
      >
        {LeftIcon && <LeftIcon className="mr-2 h-4 w-4 flex-shrink-0" />}
        <span className="mr-4 flex-1 truncate font-medium">{label}</span>
        {secondaryText && (
          <span className="flex-shrink-0 text-gray-500 dark:text-gray-400">{secondaryText}</span>
        )}
        {RightIcon && <RightIcon className="ml-2 h-4 w-4 flex-shrink-0" />}
      </button>
    </Fragment>
  );
}
