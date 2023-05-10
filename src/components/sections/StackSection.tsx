import Link from 'next/link';
import StackItem from '~/components/StackItem';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/Card';

interface StackSectionProps {
  items: Array<{ title: string; description: string; imgUrl: string }>;
}

export default function StackSection({ items }: StackSectionProps): JSX.Element {
  return (
    <section>
      <div>
        <div className="align-center flex justify-between">
          <CardTitle>Stack</CardTitle>
          <Link href="/stack" className="text-xs font-semibold">
            View All {`->`}
          </Link>
        </div>
        <CardDescription>Software and tools I use regularly.</CardDescription>
      </div>
      <div className="flex gap-4 mt-4">
        {items.map(({ title, description, imgUrl }) => (
          <StackItem title={title} description={description} imgUrl={imgUrl} key={title} />
        ))}
      </div>
    </section>
  );
}
