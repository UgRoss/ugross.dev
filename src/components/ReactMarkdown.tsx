import ReactMarkdownRender from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeExternalLinks from 'rehype-external-links';

export default function ReactMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdownRender remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeExternalLinks]}>
      {children}
    </ReactMarkdownRender>
  );
}
