import { Icon, X } from '~/components/PhosphorIcons';

interface InputProps {
  beforeIcon?: Icon;
  id: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearButtonClick?: () => void;
  placeholder: string;
  required?: boolean;
  showClearButton?: boolean;
  type: string;
  value: string;
}

export function Input({
  beforeIcon: BeforeIcon,
  id,
  label,
  onChange,
  onClearButtonClick,
  placeholder,
  required,
  showClearButton,
  type,
  value,
}: InputProps) {
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <div className="relative w-full">
        {BeforeIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <BeforeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" weight="bold" />
          </div>
        )}
        <input
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 outline-0 focus:border-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
        {showClearButton && (
          <button
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            onClick={onClearButtonClick}
            type="button"
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
