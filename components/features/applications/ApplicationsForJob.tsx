import {
  ApplicationInterface,
  CandidateInterface,
  JobInterface,
} from '@/app/jobs/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { api } from '@/lib/api';
import Link from 'next/link';
import JobAttributes from '../job/JobAttributes';

const ApplicationsForJob = async ({ id }: { id: string }) => {
  const fetchApplications = async () => {
    return (await api(`/applications?job_id=${id}`)) as ApplicationInterface[];
  };
  const fetchCandidates = async () => {
    return await api(`/candidates?job_id=${id}`);
  };
  const fetchJob = async () => {
    return await api(`/jobs/${id}`);
  };

  const [applications, candidates, job] = await Promise.all([
    fetchApplications(),
    fetchCandidates() as Promise<CandidateInterface[]>,
    fetchJob() as Promise<JobInterface>,
  ]);

  return (
    <section className="overflow-x-hidden">
      <div className="text-center flex flex-col gap-y-4">
        <JobAttributes job={job} />
        <Table className="mt-5">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">ID</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Stage</TableHead>
              <TableHead className="text-center">Last Updated</TableHead>
              <TableHead className="text-center">Email</TableHead>
              <TableHead className="text-center">Phone</TableHead>
              <TableHead className="text-center">Attachment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((application) => {
              const candidate = candidates.find(
                (candidate) => candidate.id === application.candidate_id
              );
              const attachment = candidate?.attachments?.[0];
              return (
                <TableRow key={application.id}>
                  <TableCell className="text-center">
                    {application.id}
                  </TableCell>
                  <TableCell className="text-center">
                    {candidate?.first_name} {candidate?.last_name}
                  </TableCell>
                  <TableCell className="text-center">
                    {application.status}
                  </TableCell>
                  <TableCell className="text-center">
                    {application.current_stage?.name}
                  </TableCell>
                  <TableCell className="text-center">
                    {candidate && new Date(candidate.updated_at).toDateString()}
                  </TableCell>

                  <TableCell className="text-center">
                    {candidate?.email_addresses[0] && (
                      <div>{candidate.email_addresses[0].value}</div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {(candidate?.phone_numbers?.length || 0) > 0 && (
                      <div className="truncate w-[80px]">
                        {candidate?.phone_numbers[0]?.value}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {attachment && (
                      <div className="truncate w-[150px]">
                        <Link
                          className="text-blue-400"
                          href={attachment.url}
                          target="_blank"
                        >
                          {attachment.filename}
                        </Link>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* <ul className="flex flex-wrap">
          {applications.map((application) => {
            const candidate = candidates.find(
              (candidate) => candidate.id === application.candidate_id
            );
            return (
              <li key={application.id}>
                <SubmittedApplication
                  application={application}
                  candidate={candidate}
                />
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  );
};

export default ApplicationsForJob;
