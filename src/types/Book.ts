export type Book = {
  author: string;
  id: string;
  img?: string;
  rating: number;
  title: string;
  url: string;
};

export type BookWithContent = Book & { blocks: any; markdown: string };
