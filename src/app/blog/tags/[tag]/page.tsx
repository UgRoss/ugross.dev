import { notFound } from 'next/navigation';
import { ArticleCard } from '~/components/ArticleCard';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { posts } from '~/services/contentfulContent';

interface BlogByTagPageProps {
  params: {
    tag: string;
  };
}

export default async function BlogByTagPage({ params }: BlogByTagPageProps) {
  const tag = params.tag;
  const postsByTag = posts.getByTag(tag);

  if (postsByTag.length <= 0) {
    return notFound();
  }

  return (
    <main className="container mt-16">
      <div className="mb-8">
        <Link className="text-sm" href="/blog" startIcon={ArrowLeft} withUnderline={false}>
          Back to all posts
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-extrabold flex gap-2 items-center">
          Posts tagged:
          <code>{tag}</code>
        </h1>

        <p className="text-sm mt-2">{postsByTag.length} post(s) found</p>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {postsByTag.map((article) => (
          <ArticleCard
            description={article.description}
            imageSrc={article.img}
            key={article.slug}
            tags={article.tagsWithLinks}
            title={article.title}
            url={`/blog/${article.slug}`}
          />
        ))}
      </div>
    </main>
  );
}
