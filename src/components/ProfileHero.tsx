import { Avatar } from './Avatar';

export default function ProfileHero(): JSX.Element {
  return (
    <div>
      <div className="container text-center">
        <Avatar imgUrl="/avatar-new.png" initials="R" size="lg" />
        <div className="mt-5">
          <h1 className="mb-3 text-3xl font-bold sm:tracking-wide">Rostyslav Ugryniuk</h1>
          <p className="text-base leading-6">
            {`I'm a software developer who creates open-source projects.`}
            {`I like accordions, board games, and stand-up comedy.`}
            <br />
            {`This is my digital garden. 🌱`}
          </p>
        </div>
      </div>
    </div>
  );
}
