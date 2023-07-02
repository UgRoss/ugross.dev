import { Link } from '~/components/Link';
import { ArrowLeft } from '~/components/PhosphorIcons';

export default async function LoadingPage() {
  return (
    <main role="status" className="container mt-16">
      <div className="mb-4">
        <Link href="/til" startIcon={ArrowLeft} withUnderline={false}>
          All TILs
        </Link>
      </div>
      <div className="mb-12 flex items-center justify-center">
        <div className="mb-4 h-5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div>
        <div className="mb-2.5 h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-3 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-3 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-3 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </main>
  );
}
