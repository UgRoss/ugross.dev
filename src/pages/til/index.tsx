import type { GetStaticProps, NextPage } from 'next';
import { Hero } from '~/components/Hero';
import { getAllTils, getPageBySlug, getTilCategories } from '~/lib/graphcms';
import { GetAllTilsQuery, GetPageBySlugQuery, Til } from '~/types/graphql';
import { Tag } from '~/components/Tag';
import TILsTable from '~/components/TILsTable';
import { useState } from 'react';
import { tag } from 'postcss-selector-parser';

interface TilPageProps {
  categories: string[];
  tils: Til[];
}

const TilPage: NextPage<TilPageProps> = ({ categories, tils }) => {
  const [filteredTils, setFilteredTils] = useState(tils);
  const [selectedTag, setSelectedTag] = useState<string | null>('All');
  const allCategories = ['All', ...categories];

  const handleTagSelect = (tagName: string | null): void => {
    setSelectedTag(tagName);

    if (tagName === null || tagName === 'All') {
      return setFilteredTils(tils);
    }

    setFilteredTils(tils.filter((til) => til.categories.includes(tagName)));
  };

  const handleTilSearch = (val: string): void => {
    if (selectedTag) {
      setSelectedTag(null);
    }

    setFilteredTils(tils.filter((til) => til.title.includes(val) || til.description.includes(val)));
  };

  return (
    <>
      {/*<SEO title={seoTitle} description={description} image={image} keywords={keywords} />*/}

      <main>
        <div className="container pt-14 pb-5">
          <h2 className="text-2xl font-bold">TILs</h2>
          <h3 className="text-md my-2 mb-5">
            A collection of concise write-ups on small things I learn day to day across a variety of
            languages and technologies.
          </h3>
        </div>
        <div className="container">
          <section>
            <div>
              <div className="my-5 space-x-2">
                {/*<span className="text-muted">Categories: </span>*/}
                {allCategories.map((category) => (
                  <Tag
                    key={category}
                    onClick={() => handleTagSelect(category)}
                    active={category === selectedTag}
                  >
                    {category}
                  </Tag>
                ))}
              </div>
              <TILsTable items={filteredTils} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tilCategories: string[] = await getTilCategories();
  const allTils = await getAllTils();

  return {
    props: {
      categories: tilCategories,
      tils: allTils,
    },
  };
};

export default TilPage;
