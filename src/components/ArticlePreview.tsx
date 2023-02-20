import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface ArticlePreviewProps {
  title: string;
  description: string;
  link: string;
}

function ArticlePreview({ title, description, link }: ArticlePreviewProps) {
  return (
    <article className="overflow-hidden">
      <Link href={link}>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      </Link>
      <p className="text-gray-600 mb-4 prose">{description}</p>
      <Link href={link} className="text-indigo-600 flex items-center font-semibold">
        <span>Read More</span>
        <FiArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </article>
  );
}

export default ArticlePreview;
