'use server';

import JobHeaderSkeleton from '@/components/features/job/JobHeaderSkeleton';
import JobListing from '@/components/features/job/JobListing';
import { Suspense } from 'react';

const JobPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="mt-4">
      <Suspense fallback={<JobHeaderSkeleton />}>
        <JobListing id={params.id} />
      </Suspense>
    </div>
  );
};

export default JobPage;
