'use server';

import JobDetails from '@/components/features/JobDetails';
import { Suspense } from 'react';

const JobPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Job {params.id}
      <Suspense fallback={<div>i am a loading indicator</div>}>
        <JobDetails id={params.id} />
      </Suspense>
    </div>
  );
};

export default JobPage;
