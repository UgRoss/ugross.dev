'use client';
import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import wait from 'waait';
import { cn } from '~/utils';

type CopyProps = {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
};

export function CodeCopyButton({
  content,
  duration = 2000,
  fileName = ``,
  trim = false,
}: CopyProps) {
  const [copied, setCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const label = copied
    ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
    : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;

  const className = cn(
    `absolute right-0 top-0`,
    `text-slate-200 text-sm rounded-bl-md rounded-tr-md px-2 py-1`,
    `transition hover:bg-blue-500 hover:text-white`,
    `disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-transparent`
  );

  return (
    <button
      className={className}
      disabled={copied}
      name={label}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);
        setCopied(true);
        await wait(duration);
        setCopied(false);
      }}
      type="button"
    >
      {copied ? `Copied` : `Copy`}
      <span aria-roledescription="status" className="sr-only">
        {label}
      </span>
    </button>
  );
}
