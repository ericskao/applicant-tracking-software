'use server';

import JobListing from '@/components/features/JobListing';
import { Suspense } from 'react';

const JobPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Suspense fallback={<div>i am a loading indicator</div>}>
        <JobListing id={params.id} />
      </Suspense>
    </div>
  );
};

export default JobPage;
