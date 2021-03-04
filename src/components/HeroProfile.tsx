import React from 'react';
import styled from 'styled-components';
import { AccessibleEmoji } from '~/components/AccessibleEmoji';
import Avatar from '~/components/Avatar';
import Hero from '~/components/Hero';

const HeroProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

interface HeroProfileProps {
  img: string;
  name: string;
  jobTitle: string;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({ img, name, jobTitle }) => (
  <Hero>
    <div className="container">
      <HeroProfileWrapper>
        <div>
          <Avatar img={img} name={name} size={6} />
        </div>
        <div>
          <h3 className="mb-xxs mt-xxs">
            <AccessibleEmoji emoji="👋" description="Hello" />
          </h3>
          <h1 className="text-xxxl text-tertiary mb-xs mt-xs">
            <span className="text-secondary">Hi,</span>
            {` I am ${name}`}
          </h1>
          <h2 className="text-md mt-0 font-medium">{jobTitle}</h2>
        </div>
      </HeroProfileWrapper>
    </div>
  </Hero>
);

export default HeroProfile;
