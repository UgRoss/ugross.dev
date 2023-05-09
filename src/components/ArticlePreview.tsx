import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Prose } from '~/components/Prose';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card';

interface ArticlePreviewProps {
  title: string;
  description: string;
  link: string;
}

function ArticlePreview({ title, description, link }: ArticlePreviewProps) {
  return (
    <Card>
      <article className="overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle>
            <Link href={link}>
              <h3 className="text-md mb-3 font-bold text-gray-900 dark:text-gray-100">{title}</h3>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Prose as="p" className="text-sm">
            {description}
          </Prose>
          {/*<p className="prose mb-4 text-gray-600 dark:text-gray-400">{description}</p>*/}
          <Link
            href={link}
            className="mt-3 inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline dark:text-blue-500"
          >
            <span>Read More</span>
            <FiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardContent>
      </article>
    </Card>
  );
}

export default ArticlePreview;
