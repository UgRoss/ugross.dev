import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { CommandPaletteItem, commandPaletteItemsArr } from '~/configs/commandPalette.config';
import { CommandPalette } from '~/components/CommandPalette';

interface CommandPalette {
  isOpened: boolean;
  isEmpty: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  commands: CommandPaletteItem[];
  filterCommands: (query: string) => void;
}

export const CommandPaletteContext = createContext<CommandPalette>({
  isOpened: false,
  isEmpty: true,
  open: () => {},
  close: () => {},
  toggle: () => {},
  commands: [],
  filterCommands: () => {},
});

export const CommandPaletteProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [commands, setCommands] = useState(commandPaletteItemsArr);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const open = () => setIsOpened(true);
  const close = () => setIsOpened(false);
  const toggle = () => setIsOpened(!isOpened);

  useEffect(() => {
    setIsEmpty(commands.length === 0);
  }, [commands]);

  const performSearch = (query: string) =>
    commandPaletteItemsArr
      .map((commandPaletteItem) => ({
        ...commandPaletteItem,
        items: matchSorter(commandPaletteItem.items, query, { keys: ['keywords'] }),
      }))
      .filter(({ items }) => items.length > 0);

  const filterCommands = (query: string) =>
    query ? setCommands(performSearch(query)) : setCommands(commandPaletteItemsArr);

  return (
    <CommandPaletteContext.Provider
      value={{
        isOpened,
        isEmpty,
        open,
        close,
        toggle,
        commands,
        filterCommands,
      }}
    >
      {children}
    </CommandPaletteContext.Provider>
  );
};
