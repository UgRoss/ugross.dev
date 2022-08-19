import React, { useContext } from 'react';
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useKeyPressEvent } from 'react-use';
import { CommandPaletteContext } from '~/providers/commandPaletteContext';
import { capitalize, delay } from '~/utils';
import { useDarkMode } from '~/hooks/useDarkMode';
import { CommandPaletteItem } from '~/components/CommandPaletteItem';

export const CommandPalette = () => {
  const router = useRouter();
  const [, , toggleTheme] = useDarkMode();
  const { isOpened, isEmpty, toggle, commands, filterCommands, close } =
    useContext(CommandPaletteContext);

  useKeyPressEvent((e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.stopPropagation();
      e.preventDefault();
      toggle();
    }

    return true;
  });

  const handleCommandSelect = async (value: string) => {
    close();

    if (value === 'theme') {
      await delay(200);
      return toggleTheme();
    }

    const isExternalHref = value && value.startsWith('http');

    if (isExternalHref) {
      window.open(value, 'blank');
    } else {
      await router.push(value);
    }
  };

  return (
    <Transition.Root show={isOpened} as={Fragment} afterLeave={() => filterCommands('')}>
      <Dialog onClose={close} className="fixed inset-0 z-40 overflow-y-auto p-4 pt-[25vh]">
        <Transition.Child
          enter="duration-200 easy-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-emphasis opacity-50 transition-colors" />
        </Transition.Child>

        <Transition.Child
          enter="duration-200 easy-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="z-50 mx-auto w-full max-w-2xl">
            <Combobox
              as="div"
              className="relative w-full divide-y divide-muted overflow-hidden rounded-md bg-default shadow-2xl ring-1 ring-black/5 transition-colors"
              onChange={handleCommandSelect}
              value={null}
            >
              <div className="flex items-center px-4">
                <Combobox.Input
                  onChange={(event) => {
                    filterCommands(event.target.value);
                  }}
                  className="h-14 w-full border-0 bg-transparent text-default placeholder-muted transition-colors focus:ring-0"
                  placeholder="Search..."
                />
              </div>
              <Combobox.Options className="max-h-96 overflow-y-auto py-4" static>
                {commands.map(({ category, items }) => {
                  return (
                    <React.Fragment key={category}>
                      <p className="px-3 py-2 text-sm text-muted">{capitalize(category)}</p>

                      {items.map((command) => {
                        if (command.type === 'action') {
                          const { action, icon, title } = command;

                          return (
                            <CommandPaletteItem
                              key={title}
                              icon={icon}
                              value={action}
                              title={title}
                            />
                          );
                        } else {
                          const { href, icon, title } = command;

                          return (
                            <CommandPaletteItem key={href} icon={icon} value={href} title={title} />
                          );
                        }
                      })}
                    </React.Fragment>
                  );
                })}
                {isEmpty && <p className="p-4 text-sm text-muted">No results found</p>}
              </Combobox.Options>
            </Combobox>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};
