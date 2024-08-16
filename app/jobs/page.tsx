'use server';

import { api } from '@/lib/api';
import { filterJobs } from '@/lib/utils';
import Link from 'next/link';
import { JobInterface } from './types';

// to-do write test for filter job if it contains Founding Engineer

const Jobs = async () => {
  const jobs = (await api('/jobs')) as JobInterface[];
  return (
    <main>
      <div>Latest jobs near you</div>
      {jobs && (
        <ul>
          {filterJobs(jobs).map((job) => {
            return (
              <Link href={`/jobs/${job.id}`} key={job.id}>
                <div>{job.name}</div>
              </Link>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default Jobs;
