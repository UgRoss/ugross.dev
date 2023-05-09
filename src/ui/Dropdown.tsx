import { Fragment, useState } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { Button } from '@/ui/Button';
import { DropdownItem, DropdownOption } from '@/ui/DropdownItem';

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
}

export function Dropdown({ label, options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="relative">
      {({ open: isOpen }) => (
        <Fragment>
          <Menu.Button as={Fragment}>
            <Button variant="ghost" type="button" active={isOpen}>
              <span>{label}</span>
              <FiChevronDown
                className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 transform' : ''
                }`}
              />
            </Button>
          </Menu.Button>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-0 z-40 mt-2 w-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800">
              <Menu.Item
                as="div"
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {options.map((option) => (
                  <DropdownItem
                    key={option.label}
                    {...option}
                    onClick={() => handleOptionClick(option)}
                  />
                ))}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Fragment>
      )}
    </Menu>
  );
}

export default Dropdown;
