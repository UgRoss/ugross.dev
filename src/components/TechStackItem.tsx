import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

interface TechStackItemProps {
  description: string;
  imgUrl: string;
  title: string;
}

export function TechStackItem({ description, imgUrl, title }: TechStackItemProps) {
  return (
    <div>
      <TooltipProvider delayDuration={50}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              alt={title}
              className="rounded-full brightness-90 transition-all duration-500 hover:brightness-100"
              height={40}
              src={imgUrl}
              width={40}
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
