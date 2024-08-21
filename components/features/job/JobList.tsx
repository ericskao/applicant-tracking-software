import { JobInterface } from '@/app/jobs/types';
import { api } from '@/lib/api';
import Link from 'next/link';

const JobList = async () => {
  const jobs = (await api('/jobs')) as JobInterface[];
  return (
    <div>
      {jobs && (
        <ul className="flex flex-col divide-y-2">
          {jobs.map((job) => {
            return (
              <Link href={`/jobs/${job.id}`} key={job.id} className="py-4">
                <div className="flex justify-between items-center">
                  <div className="text-primary font-semibold text-xl">
                    {job.name}
                  </div>
                  <div className="text-right font-medium">
                    <div>{job.departments[0].name}</div>
                    <div className="text-sm font-light">
                      {job.offices[0].name}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default JobList;
