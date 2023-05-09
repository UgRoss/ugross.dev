import Link from 'next/link';
import { CardTitle, CardHeader } from '~/components/ui/Card';
import ArticlePreview from '../ArticlePreview';

export default function LatestPosts(): JSX.Element {
  return (
    <div>
      <div className="flex items-center justify-between">
        <CardTitle>Lastest Articles</CardTitle>
        <Link href="/stack" className="text-xs font-semibold">
          View All {`->`}
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <ArticlePreview
          title="Data Structures: Queue"
          description='A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".'
          link="#"
        />
        <ArticlePreview
          title="Data Structures: Queue"
          description='A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".'
          link="#"
        />
      </div>
    </div>
  );
}
