import React from 'react';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import { Avatar } from '~/components/Avatar';
import { Hero } from '~/components/Hero';

interface HeroProfileProps {
  img: string;
  name: string;
  jobTitle: string;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ img, name, jobTitle }) => (
  <Hero>
    <div className="container">
      <div className="flex sm:flex-row items-center gap-8 flex-col">
        <div>
          <Avatar img={img} name={name} size={6} />
        </div>
        <div>
          <h3 className="mb-1 mt-1 text-2xl">
            <AccessibleEmoji emoji="👋" description="Hello" />
          </h3>
          <h1 className="text-2xl font-bold text-tertiary mb-1 mt-1">
            <span className="text-secondary">Hi,</span>
            {` I am ${name}`}
          </h1>
          <h2 className="font-medium mt-1 text-lg">{jobTitle}</h2>
        </div>
      </div>
    </div>
  </Hero>
);
