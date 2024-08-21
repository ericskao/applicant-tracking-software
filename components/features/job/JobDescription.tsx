'use client';

import { JobInterface } from '@/app/jobs/types';
import { Button } from '@/components/ui/button';
import { Dispatch, SetStateAction } from 'react';

export const JOB_CONTENT_VIEW_CLASSNAME = 'mx-auto text-left max-w-[640px]';

const JobDescription = ({
  job,
  setViewState,
}: {
  job: JobInterface;
  setViewState: Dispatch<SetStateAction<'overview' | 'application'>>;
}) => {
  return (
    <section className={JOB_CONTENT_VIEW_CLASSNAME}>
      <h2 className="text-xl font-semibold mb-2">Description</h2>
      <div className="flex flex-col gap-y-4">
        <p>
          Lorem Ipsum is a multidisciplinary firm specializing in the planning,
          design, and production of experiences. Our work includes museums,
          exhibits, immersive shows, visitor attractions, as well as all types
          of filmed and interactive media.
        </p>
        <p>
          We are seeking a <span className="font-bold">{job.name}</span> at
          Lorem Ipsum,where you will play a pivotal role in shaping our company
          and providing a positive experience for our customers.
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-2 mt-6">Key Responsibilities</h2>
      <ul className="list-disc">
        <li>Be a team player</li>
        <li>Be a problem solver</li>
        <li>Help build a positive and inclusive work culture.</li>
      </ul>
      <div className="mt-6">
        <Button
          onClick={() => setViewState('application')}
          variant="default"
          className="w-full"
        >
          Apply
        </Button>
      </div>
    </section>
  );
};

export default JobDescription;
