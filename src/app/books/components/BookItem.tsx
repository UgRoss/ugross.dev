import { LinkUnstyled } from '~/components/LinkUnstyled';
import { Rating } from './Rating';

interface BookItemProps {
  author: string;
  image?: string;
  rating: number;
  title: string;
  url: string;
}

export function BookItem({ author, image, rating, title, url }: BookItemProps) {
  return (
    <LinkUnstyled
      className="group border rounded-lg p-4 px-3 flex gap-4 relative shadow-sm hover:scale-[1.01] hover:shadow-md transition-all"
      href={url}
    >
      <div className="w-20 flex-shrink-0">
        <div className="w-20 h-[120px] group-hover:-rotate-3 group-hover:scale-[1.05] transition duration-300 shadow-md border overflow-hidden">
          {image && <img alt="Book Preview" className=" w-full object-cover h-full" src={image} />}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-base line-clamp-3">{title}</p>
        <p className="text-muted text-sm line-clamp-1">{author}</p>

        <Rating className="mt-auto" value={rating} />
      </div>
    </LinkUnstyled>
  );
}
