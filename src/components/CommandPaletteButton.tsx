import React, { SyntheticEvent, useContext } from 'react';
import { Button } from '@vechaiui/react';
import { FiCommand } from 'react-icons/fi';
import { Tooltip } from '~/components/Tooltip';
import { CommandPaletteContext } from '~/providers/commandPaletteContext';

interface DarkModeToggleProps {
  className?: string;
}

export const CommandPaletteButton: React.FC<DarkModeToggleProps> = () => {
  const { toggle } = useContext(CommandPaletteContext);
  const buttonLabel = 'Open command palette';

  const handleButtonClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    toggle();
  };

  return (
    <Tooltip content="Command Palette (Cmd + K)" className="after:hidden lg:after:block">
      <Button
        onClick={handleButtonClick}
        className="select-none focus:shadow-none focus-visible:shadow"
        aria-label={buttonLabel}
        title={buttonLabel}
        variant="ghost"
      >
        <FiCommand size="20px" />
      </Button>
    </Tooltip>
  );
};
