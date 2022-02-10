import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactChildren;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
      {children}
    </button>
  );
};
