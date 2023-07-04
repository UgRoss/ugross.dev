'use client';
import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

import { siteConfig } from '~/config';
import { Language } from '~/types/CodeBlock';
import { CodeCopyButton } from './CodeCopyButton';

type CodeProps = {
  codeString: string;
  language: Language;
  noLineNumbers?: boolean;
  metastring?: string;
  className: string;
};

function getLangAndParams(className = ``): [string, { [key: string]: string }] {
  const [langStr = ``, paramsStr = ``] = className.split(`:`);
  const language = langStr.split('language-').pop() || '';
  const paramsObj = Object.fromEntries(new URLSearchParams(paramsStr));

  return [language, paramsObj];
}

const numbersBetweenBracketsRegExp = new RegExp('(?<={)[\\d,-]+?(?=})');

const calculateLinesToHighlight = (meta: string) => {
  if (!numbersBetweenBracketsRegExp.test(meta)) {
    return () => false;
  }

  const lineNumbers =
    numbersBetweenBracketsRegExp
      .exec(meta)?.[0]
      .split(`,`)
      .map((v) => v.split(`-`).map((x) => parseInt(x, 10))) ?? [];
  return (index: number) => {
    const lineNumber = index + 1;

    return lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start
    );
  };
};

export const Code: React.FC<CodeProps> = ({
  codeString,
  noLineNumbers = false,
  className: blockClassName,
  metastring = ``,
}) => {
  const { showLineNumbers, showCopyButton } = siteConfig.codeBlocks;
  const [language, { title = `` }] = getLangAndParams(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers` && showLineNumbers;

  return (
    <Highlight
      // {...defaultProps}
      code={codeString}
      language={language as Language}
      theme={themes.oceanicNext}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="code-highlight" data-language={language}>
            <pre className={className} style={style} data-linenumber={true}>
              {showCopyButton && <CodeCopyButton content={codeString} fileName={title} />}
              <code className={`language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ line, key: i });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div {...lineProps} key={`line-${i}`}>
                      {hasLineNumbers && <span className="line-number-style">{i + 1}</span>}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={`token-${key}`} />
                      ))}
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </React.Fragment>
      )}
    </Highlight>
  );
};
