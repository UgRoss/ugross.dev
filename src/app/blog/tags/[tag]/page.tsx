import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleCard } from '~/components/ArticleCard';
import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';
import { posts } from '~/services/contentfulContent';

interface Props {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: Readonly<Props>): Promise<Metadata> {
  const postsByTag = posts.getByTag(params.tag);

  if (postsByTag.length <= 0) {
    return {};
  }

  return {
    description: 'Blog posts tagged with ' + params.tag,
    openGraph: {
      images: ['/default/page.jpg'],
    },
    title: `Blog`,
  };
}

export default async function BlogByTagPage({ params }: Readonly<Props>) {
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
          Posts tagged: <code>{tag}</code>
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
