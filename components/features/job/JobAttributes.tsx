import { JobInterface } from '@/app/jobs/types';
import logo from '@/public/briefcase.png';
import Image from 'next/image';

const LIST_ITEM_CLASSNAME =
  "relative after:content-['•'] after:absolute after:right-[-12px] after:top-[2px] after:text-sm last:after:content-['']";

const JobAttributes = ({ job }: { job: JobInterface }) => {
  const department = job.departments[0]?.name;
  const office = job.offices[0]?.name;
  const employmentType = job.custom_fields?.employment_type;
  return (
    <div className="flex flex-col gap-y-2 mx-auto">
      <Image
        className="mx-auto"
        alt="logo"
        width={128}
        height={128}
        src={logo}
      />
      <h1 className="font-semibold text-lg">{job.name}</h1>
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
  );
};

export default JobAttributes;
