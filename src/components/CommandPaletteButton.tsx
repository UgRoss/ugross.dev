import React, { useContext } from 'react';
import classNames from 'classnames';
import { Tooltip } from '~/components/Tooltip';
import { FiCommand } from 'react-icons/fi';
import { CommandPaletteContext } from '~/providers/commandPaletteContext';

interface DarkModeToggleProps {
  className?: string;
}

export const CommandPaletteButton: React.FC<DarkModeToggleProps> = ({ className }) => {
  const { toggle } = useContext(CommandPaletteContext);
  const buttonLabel = 'Open command palette';
  const buttonClassName = classNames(
    className,
    `text-gray-500 dark:text-amber-400 rounded-md select-none font-medium`,
    `px-2 py-2 mr-2`,
    `transition duration-500 ease`,
    `hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-gray-700 focus:outline-none`
  );

  return (
    <Tooltip content="Command Palette (⌘ + K)" className="after:hidden lg:after:block">
      <button
        onClick={toggle}
        className={buttonClassName}
        aria-label={buttonLabel}
        title={buttonLabel}
      >
        <FiCommand size="20px" />
      </button>
    </Tooltip>
  );
};
