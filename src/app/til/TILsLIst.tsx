'use client';
import { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { Input } from '~/components/Input';
import { MagnifyingGlass } from '~/components/PhosphorIcons';
import { TILPreviewItem } from '~/components/TILPreviewItem';

export default function TILsList({ allTILs, emptyMessage }: any) {
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
    <div>
      <div>
        <Input
          beforeIcon={MagnifyingGlass}
          id="search"
          label="Search..."
          onChange={handleSearchInputChange}
          onClearButtonClick={handleClearButtonClick}
          placeholder="Search"
          showClearButton={!!searchTerm}
          type="text"
          value={searchTerm}
        />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <ul className="animated-list">
          {isSearchResultEmpty && <p className="text-center text-muted">{emptyMessage}</p>}
          {filteredTILs.map(({ slug, tags, title }: any) => (
            <TILPreviewItem href={`/til/${slug}`} key={slug} tags={tags} title={title} />
          ))}
        </ul>
      </div>
    </div>
  );
}
