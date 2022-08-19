import React from 'react';
import Link from 'next/link';
import { Til } from '~/types/graphql';

interface TILsTableProps {
  items: Til[] | undefined | null;
}

const TILsTable: React.FC<TILsTableProps> = ({ items }) => {
  const headerCells = ['Name', 'Description'];
  const tdClassNames = 'mx-5 my-2 first:rounded-l last:rounded-r px-2 py-3';

  return (
    <div className="dark:prose-dark prose dark:prose-invert">
      <table className="table-auto border-separate border-spacing-y-1">
        <thead>
          <tr>
            {headerCells.map((cellName) => (
              <th className="border-b px-2 py-2" key={cellName}>
                {cellName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => {
            return (
              <tr
                key={item.createdAt}
                className="rounded-md transition-colors duration-300 hover:bg-blue-300/30"
              >
                <td className={tdClassNames}>
                  <Link href={`til/${item.slug}`}>
                    <a className="no-underline hover:border-0">{item.title}</a>
                  </Link>
                </td>
                <td className={tdClassNames}>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TILsTable;
