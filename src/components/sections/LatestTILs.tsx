import TodayILearnedPreview from '../TodayILearnedPreview';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import Link from 'next/link';

const tils = [
  {
    title: 'URLSearchParams',
    shortDescription: `type-safe counterpart of 'any'.`,
    emoji: '🏷️',
    url: '#',
    tags: ['typescript'],
    date: '2021-10-01',
  },
  {
    title: 'null vs undefined',
    shortDescription: `type-safe counterpart of 'any'.`,
    emoji: '⚙️',
    url: '#',
    tags: ['javascript'],
    date: '2021-10-01',
  },
];

export default function LatestTILs(): JSX.Element {
  return (
    <section className="mt-5">
      <div>
        <div className="align-center flex justify-between mb-2">
          <CardTitle>Lastest TILs</CardTitle>
          <Link href="/stack" className="text-xs font-semibold">
            View All {`->`}
          </Link>
        </div>
        <CardDescription>
          A collection of write-ups on small things I learn day to day
        </CardDescription>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {tils.map(({ title, emoji, url, tags = [], date, shortDescription }) => (
          <TodayILearnedPreview
            title={title}
            emoji={emoji}
            url={url}
            tags={tags}
            date={date}
            description={shortDescription}
          />
        ))}
      </div>
    </section>
  );
}
