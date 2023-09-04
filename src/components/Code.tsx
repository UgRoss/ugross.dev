'use client';
import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { siteConfig } from '~/config';
import { Language } from '~/types/CodeBlock';
import { CodeCopyButton } from './CodeCopyButton';

type CodeProps = {
  className: string;
  codeString: string;
  language: Language;
  metastring?: string;
  noLineNumbers?: boolean;
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
  className: blockClassName,
  codeString,
  metastring = ``,
  noLineNumbers = false,
}) => {
  const { showCopyButton, showLineNumbers } = siteConfig.codeBlocks;
  const [language, { title = `` }] = getLangAndParams(blockClassName);
  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const hasLineNumbers = !noLineNumbers && language !== `noLineNumbers` && showLineNumbers;

  return (
    <Highlight code={codeString} language={language as Language} theme={themes.oceanicNext}>
      {({ className, getLineProps, getTokenProps, style, tokens }) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="code-highlight" data-language={language}>
            <pre className={className} data-linenumber={true} style={style}>
              {showCopyButton && <CodeCopyButton content={codeString} fileName={title} />}
              <code className={`language-${language}`}>
                {tokens.map((line, i) => {
                  const lineProps = getLineProps({ key: i, line });

                  if (shouldHighlightLine(i)) {
                    lineProps.className = `${lineProps.className} highlight-line`;
                  }

                  return (
                    <div {...lineProps} key={`line-${i}`}>
                      {hasLineNumbers && <span className="line-number-style">{i + 1}</span>}
                      {line.map((token, key) => (
                        <span {...getTokenProps({ key, token })} key={`token-${key}`} />
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
