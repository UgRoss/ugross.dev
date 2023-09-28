import ReactMarkdownRender from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ReactMarkdownCodeBlock } from './ReactMarkdownCodeBlock';

export function ReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdownRender
      components={{
        pre: ReactMarkdownCodeBlock,
      }}
      rehypePlugins={[rehypeExternalLinks, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdownRender>
  );
}
