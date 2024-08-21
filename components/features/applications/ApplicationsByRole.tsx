import { ApplicationInterface } from '@/app/jobs/types';
import { fetchAllApplications } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';

const ApplicationsByRole = async () => {
  // this continues fetching applications until we've fetched last page, fetch by applications instead of jobs so we only get jobs that have applications
  const allApplications = await fetchAllApplications();

  const groupedByRole = allApplications.reduce((acc, app) => {
    const name = app.jobs?.[0]?.name;
    if (!name) return acc;
    if (!acc[name]) {
      acc[name] = [app];
    } else {
      acc[name].push(app);
    }
    return acc;
  }, {} as Record<string, ApplicationInterface[]>);

  return (
    <section className={clsx('w-screen overflow-x-hidden mt-6 px-12')}>
      {groupedByRole && (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.entries(groupedByRole).map(([role, apps]) => {
            const jobId = apps[0].jobs[0].id;
            return (
              <li key={role} className="group block">
                <Link
                  href={`/jobs/${jobId}/applications`}
                  className="flex items-center justify-between rounded-lg bg-primary/50 p-4 transition-colors hover:bg-primary hover:text-white min-h-[120px]"
                >
                  <div className="flex flex-col gap-y-1">
                    <span className="font-medium">{role}</span>
                    <span className="text-xs font-light">
                      {apps.length} candidate{apps.length === 1 ? '' : 's'}{' '}
                      applied
                    </span>
                  </div>
                  <span className="min-w-[70px] text-right text-3xl font-extrabold">
                    {apps.length}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default ApplicationsByRole;
