import type { HTMLProps, ReactNode } from 'react';
import { Children } from 'react';
import type { Language } from '~/types/CodeBlock';
import { isReactElement } from '~/utils';
import { Code } from './Code';

interface ReactMarkdownCodeBlockProps extends HTMLProps<HTMLPreElement> {
  children?: ReactNode;
}

export function ReactMarkdownCodeBlock({ children }: ReactMarkdownCodeBlockProps) {
  const childElement = Children.only(children);
  if (!isReactElement(childElement)) return null;

  const className = childElement.props.className || '';
  const codeString = childElement.props.children;
  const match = /language-(\w+)/.exec(className);
  const language: Language = Array.isArray(match) ? (match[1] as Language) : 'text';

  return (
    <Code
      className={className}
      codeString={String(codeString).replace(/\n$/, '').trim()}
      language={language}
    />
  );
}
