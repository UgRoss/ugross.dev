import React, { ReactElement, useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import wait from 'waait';
import { cn } from '@/utils';

interface CopyProps {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
}

export const CodeCopyButton = ({
  content,
  duration = 2000,
  fileName = '',
  trim = false,
}: CopyProps): ReactElement => {
  const [copied, setCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  const hasFileName = fileName !== '';
  const label = copied
    ? `${hasFileName ? `${fileName} ` : ''}copied to clipboard`
    : `${hasFileName ? `${fileName}: ` : ''}copy code to clipboard`;

  const handleCopyButtonClick = async (): Promise<void> => {
    await copyToClipboard(trim ? content.trim() : content);
    setCopied(true);
    await wait(duration);
    setCopied(false);
  };

  const className = cn(
    'absolute right-1 top-1 px-2 py-1 rounded',
    'hover:bg-blue-500 hover:text-white transition',
    'disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:text-gray-400'
  );

  return (
    <button
      type="button"
      name={label}
      disabled={copied}
      className={className}
      onClick={handleCopyButtonClick}
    >
      {copied ? 'Copied' : 'Copy'}
      <span className="sr-only" aria-roledescription="status">
        {label}
      </span>
    </button>
  );
};
