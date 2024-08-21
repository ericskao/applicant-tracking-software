'use server';

import ApplicationsByRole from '@/components/features/applications/ApplicationsByRole';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

const Page = async () => {
  return (
    <main className="bg-backgroundDarker px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Applications Submitted</h1>
        <div className="text-gray-700 text-sm">
          Find the perfect candidate for your open roles.
        </div>
        <Suspense
          fallback={
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
              {Array.from(Array(12)).map((_, i) => (
                <Skeleton key={i} className="h-[120px]" />
              ))}
            </ul>
          }
        >
          <ApplicationsByRole />
        </Suspense>
      </div>
    </main>
  );
};
export default Page;
