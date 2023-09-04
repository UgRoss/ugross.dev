export type Post = {
  date: string;
  description: string;
  id: string;
  img?: null | string;
  lastUpdateDate?: string;
  slug: string;
  tags: string[];
  title: string;
};

export type PostWithContent = Post & { blocks: any; markdown: string };
