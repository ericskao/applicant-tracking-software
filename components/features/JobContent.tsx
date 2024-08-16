'use client';

import { JobInterface } from '@/app/jobs/types';
import JobApplication from '@/components/features/JobApplication';
import JobDescription from '@/components/features/JobDescription';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const JOB_TAB_CONTENT_CLASSNAME = 'm-auto bg-backgroundDarker px-4 py-8';

const JobContent = ({ job }: { job: JobInterface }) => {
  const [viewState, setViewState] = useState<'overview' | 'application'>(
    'overview'
  );
  return (
    <Tabs value={viewState} className="">
      <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-center rounded-none border-b bg-transparent p-0">
        <TabsTrigger onClick={() => setViewState('overview')} value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger
          onClick={() => setViewState('application')}
          value="application"
        >
          Application
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className={JOB_TAB_CONTENT_CLASSNAME}>
        <JobDescription job={job} setViewState={setViewState} />
      </TabsContent>
      <TabsContent value="application" className={JOB_TAB_CONTENT_CLASSNAME}>
        <JobApplication job={job} />
      </TabsContent>
    </Tabs>
  );
};

export default JobContent;
