export type TIL = {
  id: string;
  title: string;
  tags: string[];
  description: string;
  date: string;
  slug: string;
};

export type TILWithContent = TIL & { blocks: any; markdown: string };
