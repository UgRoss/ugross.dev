import { ArticleCard } from '~/components/ArticleCard';
import { Avatar } from '~/components/Avatar';
import { ContentSection } from '~/components/ContentSection';
import { Link } from '~/components/Link';
import { posts, tilPosts } from '~/services/contentfulContent';
import { TILsList } from './til/components/TILsList';

const stack = [
  { description: 'Typed JavaScript', href: '#', title: 'TypeScript' },
  { description: 'JavaScript UI Library', href: '#', title: 'React' },
  { description: 'Framework for React apps', href: '#', title: 'Next.js' },
  { description: 'Query language for APIs', href: '#', title: 'GraphQL' },
];

export default async function Home() {
  const recentArticles = posts.getLastItems(2);
  const recentTILs = tilPosts.getLastItems(3);

  return (
    <main className="container mt-16 flex flex-col gap-16">
      <section>
        <Avatar alt="My Avatar" className="mb-6" size="lg" src="/memoji-avatar.png" />
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
      <ContentSection link="/uses" title="Stack">
        <div className="prose prose-page dark:prose-invert">
          <ul>
            {stack.map(({ description, href, title }) => (
              <li key={href}>
                <Link className="m-0" href={href}>
                  {title}
                </Link>{' '}
                - {description}
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection link="/blog" title="Recent Articles">
        {recentArticles.map((article) => (
          <ArticleCard
            description={article.description}
            imageSrc={article.img}
            key={article.slug}
            title={article.title}
            url={`/blog/${article.slug}`}
          />
        ))}
      </ContentSection>
      <ContentSection link="/til" title="Today I Learned">
        <TILsList items={recentTILs} />
      </ContentSection>
    </main>
  );
}
