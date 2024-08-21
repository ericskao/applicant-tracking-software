import { JobInterface } from '@/app/jobs/types';
import JobContent from '@/components/features/job/JobContent';
import { api } from '@/lib/api';
import JobAttributes from './JobAttributes';

const JobListing = async ({ id }: { id: string }) => {
  const job = (await api(`/jobs/${id}`)) as JobInterface;
  return (
    <div className="text-center flex flex-col gap-y-4">
      <JobAttributes job={job} />
      <JobContent job={job} />
    </div>
  );
};

export default JobListing;
