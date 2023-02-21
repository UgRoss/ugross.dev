import { getPostByUrl } from '@/lib/posts';
import { MDXContent } from '@/components/MDXContent';

const ArticlePage = (props: any) => {
  const slug = props.params.slug;
  const blogPost = getPostByUrl(`/blog/${slug}`);

  return (
    <main className="mt-32 container">
      <div>{slug || 'No Slug??'}</div>
      <div className="prose">
        <MDXContent content={blogPost?.body.code} />
      </div>
    </main>
  );
};

export default ArticlePage;
