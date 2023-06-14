import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

interface TechStackItemProps {
  title: string;
  description: string;
  imgUrl: string;
}

export function TechStackItem({ title, description, imgUrl }: TechStackItemProps): JSX.Element {
  return (
    <div>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={imgUrl}
              alt={title}
              width={40}
              height={40}
              className="rounded-full brightness-90 transition-all duration-500 hover:brightness-100"
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">{title}</p>
            <p className="text-xs text-gray-500">{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}