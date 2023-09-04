export type TIL = {
  date: string;
  description: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
};

export type TILWithContent = TIL & { blocks: any; markdown: string };
