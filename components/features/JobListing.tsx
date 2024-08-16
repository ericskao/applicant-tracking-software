import { JobInterface } from '@/app/jobs/types';
import JobContent from '@/components/features/JobContent';
import { api } from '@/lib/api';

const LIST_ITEM_CLASSNAME =
  "relative after:content-['•'] after:absolute after:right-[-12px] after:top-[2px] after:text-sm last:after:content-['']";

const JobListing = async ({ id }: { id: string }) => {
  const job = (await api(`/jobs/${id}`)) as JobInterface;
  const department = job.departments[0]?.name;
  const office = job.offices[0]?.name;
  const employmentType = job.custom_fields?.employment_type;
  return (
    <div className="text-center flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <div>ATS logo here</div>
        <h1>{job.name}</h1>
        <div>
          <div className="flex flex-col gap-x-3 justify-center items-center">
            <ul className="flex gap-x-4">
              {department && (
                <li className={LIST_ITEM_CLASSNAME}>{department}</li>
              )}
              {office && <li className={LIST_ITEM_CLASSNAME}>{office}</li>}
              {employmentType && (
                <li className={LIST_ITEM_CLASSNAME}>{employmentType}</li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <JobContent job={job} />
    </div>
  );
};

export default JobListing;
