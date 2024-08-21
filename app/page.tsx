'use server';

import JobList from '@/components/features/job/JobList';
import { Skeleton } from '@/components/ui/skeleton';
import { SettingsProvider } from '@/context/SettingsContext';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <SettingsProvider>
      <main className="bg-backgroundDarker px-4 py-8">
        <div className="max-w-[640px] mx-auto">
          <h1 className="text-4xl font-semibold text-center pb-10">
            Job Openings
          </h1>
          <Suspense
            fallback={
              <div className="min-h-screen overflow-y-hidden max-w-[640px] flex flex-col gap-y-2">
                {Array.from(Array(10)).map((_, i) => (
                  <Skeleton key={i} className="w-full h-[40px] my-4" />
                ))}
              </div>
            }
          >
            <JobList />
          </Suspense>
        </div>
      </main>
    </SettingsProvider>
  );
}
