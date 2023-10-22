import { books } from '~/services/contentfulContent';
import { BookItem } from './components/BookItem';

export default async function BooksPage() {
  const allBooks = books.getAll();

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">📚 Books</h2>
        <p className="text-sm">My bookshelf</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {allBooks.map(({ author, img, rating, title, url }) => (
          <BookItem
            author={author}
            image={img}
            key={title}
            rating={rating}
            title={title}
            url={url}
          />
        ))}
      </div>
    </main>
  );
}
