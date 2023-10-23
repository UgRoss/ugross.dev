'use client';
import React, { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { TILsList } from '~/app/til/components/TILsList';
import { Input } from '~/components/Input';
import { MagnifyingGlass } from '~/components/PhosphorIcons';

interface TILSearchProps {
  readonly allTILs: any[];
  emptyMessage: string;
}

export function TILsListWithSearch({ allTILs, emptyMessage }: Readonly<TILSearchProps>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTILs, setFilteredTILs] = useState(allTILs);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleClearButtonClick = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    setFilteredTILs(matchSorter(allTILs, searchTerm, { keys: ['title', 'category'] }));
  }, [allTILs, searchTerm]);

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
        <TILsList emptyMessage={emptyMessage} items={filteredTILs} />
      </div>
    </div>
  );
}
