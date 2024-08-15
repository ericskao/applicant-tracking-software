import { api } from '@/lib/api';

const JobDetails = async ({ id }: { id: string }) => {
  const job = (await api(`/jobs/${id}`)) as any;
  return <div>{job.name}</div>;
};

export default JobDetails;
