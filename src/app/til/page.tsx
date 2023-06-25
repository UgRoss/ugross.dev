'use client';
import { useEffect, useState } from 'react';
import { getAllTILs } from '~/contentlayer';
import { TILPreviewItem } from '~/components/TILPreviewItem';
import { Input } from '~/components/Input';
import { MagnifyingGlass } from '~/components/PhosphorIcons';
import { matchSorter } from 'match-sorter';
import { messages } from '~/config';

const allTILs = getAllTILs();

export default function TodayILearnedPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTILs, setFilteredTILs] = useState(allTILs);
  const isSearchResultEmpty = searchTerm.length > 0 && filteredTILs.length === 0;

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleClearButtonClick = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    setFilteredTILs(
      matchSorter(allTILs, searchTerm, {
        keys: ['title', 'category'],
      })
    );
  }, [searchTerm]);

  return (
    <main className="container mt-16">
      <div className="prose prose-page mb-12 text-center dark:prose-invert">
        <h2 className="mb-4 text-center text-5xl leading-[64px]">{messages.til.title}</h2>
        <p className="text-sm">{messages.til.description}</p>
        <div>
          <Input
            id="search"
            type="text"
            label="Search..."
            placeholder="Search"
            beforeIcon={MagnifyingGlass}
            onChange={handleSearchInputChange}
            showClearButton={!!searchTerm}
            onClearButtonClick={handleClearButtonClick}
            value={searchTerm}
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <ul className="animated-list">
          {isSearchResultEmpty && (
            <p className="text-center text-muted">{messages.til.emptySearch}</p>
          )}
          {filteredTILs.map(({ slug, title, category, categorySlug }) => (
            <TILPreviewItem
              key={slug}
              title={title}
              tag={{ title: category, href: `/til/category/${categorySlug}` }}
              href={`/til/${slug}`}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
