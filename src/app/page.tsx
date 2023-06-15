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

export default function Home() {
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
        <ArticleCard
          title="Data Structures: Queue"
          description={`A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".`}
          imageSrc="/storybook/article-image-demo.avif"
        />
        <ArticleCard
          title="Data Structures: Queue"
          description={`A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".`}
          imageSrc="/storybook/article-image-demo.avif"
        />
      </ContentSection>
      <ContentSection title="Today I Learned" link="/til">
        <ul className="animated-list">
          <TILPreviewItem
            title="Using the Strava API with Next.js"
            tag={{ title: 'TypeScript', href: '#' }}
            href="#"
          />
          <TILPreviewItem
            title="URLSearchParams"
            tag={{ title: 'JavaScript', href: '#' }}
            href="#"
          />
          <TILPreviewItem
            title="Signed vs Unsigned Numbers"
            tag={{ title: 'Data Science', href: '#' }}
            href="#"
          />
        </ul>
      </ContentSection>
    </main>
  );
}
