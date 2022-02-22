import React, { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import wait from 'waait';

type CopyProps = {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
};

export const CodeCopyButton = ({
  content,
  duration = 2000,
  fileName = ``,
  trim = false,
}: CopyProps) => {
  const [copied, setCopied] = useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const label = copied
    ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
    : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;

  return (
    <button
      type="button"
      name={label}
      disabled={copied}
      className="code-copy-button"
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);
        setCopied(true);
        await wait(duration);
        setCopied(false);
      }}
    >
      {copied ? `Copied` : `Copy`}
      <span className="sr-only" aria-roledescription="status">
        {label}
      </span>
    </button>
  );
};
