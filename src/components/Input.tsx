import { X, Icon } from '~/components/PhosphorIcons';

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  showClearButton?: boolean;
  onClearButtonClick?: () => void;
  beforeIcon?: Icon;
}

export function Input({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  required,
  showClearButton,
  onClearButtonClick,
  beforeIcon: BeforeIcon,
}: InputProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="relative w-full">
        {BeforeIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <BeforeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" weight="bold" />
          </div>
        )}
        <input
          value={value}
          onChange={onChange}
          type={type}
          id={id}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={placeholder}
          required={required}
        />
        {showClearButton && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={onClearButtonClick}
          >
            <X
              className="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              weight="bold"
            />
          </button>
        )}
      </div>
    </>
  );
}
