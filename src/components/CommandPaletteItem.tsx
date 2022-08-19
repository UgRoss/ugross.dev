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
          className={`mx-2 flex cursor-pointer items-center space-x-1 rounded-md px-4 py-3 text-default transition-colors ${
            active ? 'bg-subtle' : 'bg-default'
          }`}
        >
          {Icon && <Icon className="mr-1" />}
          <span className="font-medium">{title}</span>
          {isExternalUrl && <FiArrowUpRight className="pl-1" />}
        </div>
      )}
    </Combobox.Option>
  );
};
