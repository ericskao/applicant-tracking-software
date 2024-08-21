'use client';

import { useJobViewContext } from '@/components/features/job/JobContent';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

const JobSubmittedView = ({
  setSubmitted,
  id,
}: {
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  id: number;
}) => {
  const { setViewState } = useJobViewContext();
  return (
    <div className="flex flex-col gap-y-8">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold">Thank you for applying!</span>
        <Link
          className="text-sm text-primary font-light"
          href={`/jobs/${id}/applications`}
        >
          View all applications for this role
        </Link>
      </div>
      <p className="text-sm">
        Your application has been received. If there is a fit, someone will be
        getting back to you.
      </p>
      <Link
        href="#"
        className="text-primary pt-8 font-bold"
        onClick={() => {
          setViewState('overview');
          setSubmitted(false);
        }}
      >
        Back to application
      </Link>
    </div>
  );
};
export default JobSubmittedView;
