import React from 'react';
import Image from 'next/image';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { Hero } from '~/components/Hero';

interface HeroProfileProps {
  imgUrl: string;
  name: string;
  jobTitle: string;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ imgUrl, name, jobTitle }) => (
  <Hero>
    <div className="container pb-8">
      <div className="flex sm:flex-row items-center gap-8 flex-col">
        <div>
          <Image
            alt="My photo"
            src={imgUrl}
            width="128px"
            height="128px"
            className="rounded-full"
          />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="mb-1 mt-1 text-4xl">
            <AccessibleEmoji emoji="👋" description="Hello" />
          </h3>
          <h1 className="mb-1 mt-1 text-2xl sm:text-3xl font-bold">Hi, I am {name}</h1>
          <h2 className="font-medium mt-2 text-lg sm:text-xl text-muted dark:text-muted-dark">
            {jobTitle}
          </h2>
        </div>
      </div>
    </div>
  </Hero>
);
