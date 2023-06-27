export type Post = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
  img?: string | null;
};

export type PostWithContent = Post & { blocks: any; markdown: string };
