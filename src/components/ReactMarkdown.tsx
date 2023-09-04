import ReactMarkdownRender from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import type { Language } from '~/types/CodeBlock';
import { Code } from './Code';

export function ReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdownRender
      components={{
        code: function codeBlock({ children, className = '', inline, node, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <Code
              {...props}
              className={className}
              codeString={String(children).replace(/\n$/, '').trim()}
              language={match[1] as Language}
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
      rehypePlugins={[rehypeExternalLinks, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdownRender>
  );
}
