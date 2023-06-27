'use client';
import { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { TILPreviewItem } from '~/components/TILPreviewItem';
import { Input } from '~/components/Input';
import { MagnifyingGlass } from '~/components/PhosphorIcons';

export default function TILsList({ allTILs, emptyMessage }: any) {
  console.log('allTiles', allTILs);
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
      <div className="mt-10 flex flex-col gap-5">
        <ul className="animated-list">
          {isSearchResultEmpty && <p className="text-center text-muted">{emptyMessage}</p>}
          {filteredTILs.map(({ slug, title, tags }: any) => (
            <TILPreviewItem key={slug} title={title} tags={tags} href={`/til/${slug}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
