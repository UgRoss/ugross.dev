import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Prose } from '~/components/Prose';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/components/ui/Card';

interface ArticlePreviewProps {
  title: string;
  description: string;
  link: string;
}

function ArticlePreview({ title, description, link }: ArticlePreviewProps) {
  return (
    <Card className="group cursor-pointer">
      <article className="overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle>
            <Link href={link}>
              <h3 className="text-md mb-3 font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Prose as="p" className="text-sm text-muted group-hover:text-secondary transition-all duration-500">
            {description}
          </Prose>
          {/*<p className="prose mb-4 text-gray-600 dark:text-gray-400">{description}</p>*/}
        </CardContent>
        <CardFooter className="mt-0 flex">
          <span className="text-xs text-muted group-hover:text-secondary transition-all duration-500">5 mins read</span>
          <Link
            href={link}
            className="ml-auto inline-flex items-center text-sm font-semibold hover:underline group-hover:text-indigo-500"
          >
            {/* <span>Read More</span> */}
            <FiArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardFooter>
      </article>
    </Card>
  );
}

export default ArticlePreview;
