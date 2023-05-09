import { getPostByUrl } from '@/lib/posts';
import { MDXContent } from '@/components/MDXContent';

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const blogPost = getPostByUrl(`/blog/${slug}`);

  return (
    <main className="container mt-32">
      <div>{slug || 'No Slug??'}</div>
      <div className="prose dark:prose-invert">
        <MDXContent content={blogPost?.body.code} />
      </div>
    </main>
  );
};

export default ArticlePage;
