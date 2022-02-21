import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { Hero } from '~/components/Hero';

interface HeroProfileProps {
  img: string;
  name: string;
  jobTitle: string;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ img, name, jobTitle }) => (
  <Hero>
    <div className="container pb-8">
      <div className="flex sm:flex-row items-center gap-8 flex-col">
        <div>
          <img src={img} alt={name} className="w-32 rounded-full" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="mb-1 mt-1 text-4xl">
            <AccessibleEmoji emoji="👋" description="Hello" />
          </h3>
          <h1 className="text-2xl sm:text-3xl font-bold text-tertiary mb-1 mt-1">
            <span className="text-secondary">Hi,</span>
            {` I am ${name}`}
          </h1>
          <h2 className="font-medium mt-2 text-lg sm:text-xl dark:text-gray-200">{jobTitle}</h2>
        </div>
      </div>
    </div>
  </Hero>
);
