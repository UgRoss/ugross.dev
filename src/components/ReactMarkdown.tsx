import ReactMarkdownRender from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ReactMarkdownCodeBlock } from './ReactMarkdownCodeBlock';
import { ReactMarkdownImage } from './ReactMarkdownImage';

export function ReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdownRender
      components={{
        img: ReactMarkdownImage,
        pre: ReactMarkdownCodeBlock,
      }}
      rehypePlugins={[rehypeExternalLinks, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdownRender>
  );
}
