import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Prose } from '@/components/Prose';

interface ArticlePreviewProps {
  title: string;
  description: string;
  link: string;
}

function ArticlePreview({ title, description, link }: ArticlePreviewProps) {
  return (
    <article className="overflow-hidden">
      <Link href={link}>
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h3>
      </Link>
      <Prose as="p">{description}</Prose>
      {/*<p className="prose mb-4 text-gray-600 dark:text-gray-400">{description}</p>*/}
      <Link
        href={link}
        className="inline-flex items-center font-semibold text-indigo-600 hover:underline dark:text-blue-500"
      >
        <span>Read More</span>
        <FiArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  );
}

export default ArticlePreview;
