import { getRecentPostsFromNotion } from '~/services/posts';
import { getRecentTILsFromNotion } from '~/services/tils';
import { Avatar } from '~/components/Avatar';
import { ContentSection } from '~/components/ContentSection';
import { ArticleCard } from '~/components/ArticleCard';
import { TILPreviewItem } from '~/components/TILPreviewItem';
import { Link } from '~/components/Link';

const stack = [
  { title: 'TypeScript', href: '#', description: 'Typed JavaScript' },
  { title: 'React', href: '#', description: 'JavaScript UI Library' },
  { title: 'Next.js', href: '#', description: 'Framework for React apps' },
  { title: 'GraphQL', href: '#', description: 'Query language for APIs' },
];

export default async function Home() {
  const recentArticles = await getRecentPostsFromNotion(2);
  const recentTILs = await getRecentTILsFromNotion(3);

  return (
    <main className="container mt-16 flex flex-col gap-16">
      <section>
        <Avatar large className="mb-6" src="/memoji-avatar.png" alt="My Avatar" />
        <div className="prose prose-page dark:prose-invert">
          <h1>{`Hi, I'm Rostyslav Ugryniuk`}</h1>
          <p>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
            <br />
            <br />
            {`This is my digital garden. 🌱`}
          </p>
        </div>
      </section>
      <ContentSection title="Stack" link="/uses">
        <div className="prose prose-page dark:prose-invert">
          <ul>
            {stack.map(({ title, description, href }) => (
              <li key={href}>
                <Link href={href} className="m-0">
                  {title}
                </Link>{' '}
                - {description}
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection title="Recent Articles" link="/blog">
        {recentArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            url={`/blog/${article.slug}`}
            title={article.title}
            description={article.description}
            imageSrc={article.img || '/storybook/article-image-demo.avif'}
          />
        ))}
      </ContentSection>
      <ContentSection title="Today I Learned" link="/til">
        <ul className="animated-list">
          {recentTILs.map(({ slug, title, tags }) => (
            <TILPreviewItem
              key={slug}
              title={title}
              tags={tags.map((tag) => ({ title: tag, href: `/til/category/${tag}` }))}
              href={`/til/${slug}`}
            />
          ))}
        </ul>
      </ContentSection>
    </main>
  );
}
