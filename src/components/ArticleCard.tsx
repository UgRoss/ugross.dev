interface ArticleCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
}

export const ArticleCard = ({
  imageSrc,
  title,
  description,
  tags,
}: ArticleCardProps): JSX.Element => {
  return (
    <div className="flex cursor-pointer rounded-lg border bg-card shadow-sm transition hover:scale-[1.01]">
      <div className="flex-shrink-0">
        <img src={imageSrc} alt="Article" className="h-full w-44 rounded-l-lg object-cover" />
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-bold text-card-foreground">{title}</h2>
        <p className="line-clamp-3 text-sm text-muted">{description}</p>
        <div className="mt-4">
          {tags.map((tag, index) => (
            <span className="mr-2 rounded px-2 py-1 text-xs text-muted" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
