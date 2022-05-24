import React from 'react';
import { IconType } from 'react-icons';
import { FiArrowUpRight } from 'react-icons/fi';
import { Combobox } from '@headlessui/react';

interface CommandPaletteItemProps {
  icon?: IconType;
  value: string;
  title: string;
}

export const CommandPaletteItem: React.FC<CommandPaletteItemProps> = ({
  icon: Icon = null,
  value,
  title,
}) => {
  const isExternalUrl = value && value.startsWith('http');

  return (
    <Combobox.Option value={value}>
      {({ active }) => (
        <div
          className={`px-4 py-2 space-x-1 flex items-center cursor-pointer text-gray-900 dark:text-gray-200 ${
            active ? 'bg-gray-500/10 dark:bg-gray-700/40' : 'bg-white dark:bg-zinc-900'
          }`}
        >
          {Icon && <Icon className="mr-1" />}
          <span className="font-normal">{title}</span>
          {isExternalUrl && <FiArrowUpRight className="pl-1" />}
        </div>
      )}
    </Combobox.Option>
  );
};
