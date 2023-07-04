import ReactMarkdownRender from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw'
import { Code } from './Code';
import { Language } from '~/types/CodeBlock';

export function ReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdownRender
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeExternalLinks, rehypeRaw]}
      components={{
        code: function codeBlock({ node, inline, className = '', children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');

          return !inline && match ? (
            <Code
              {...props}
              language={match[1] as Language}
              className={className}
              codeString={String(children).replace(/\n$/, '').trim()}
            />
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {children}
    </ReactMarkdownRender>
  );
}
