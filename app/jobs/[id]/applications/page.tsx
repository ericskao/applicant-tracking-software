import ApplicationsForJob from '@/components/features/applications/ApplicationsForJob';

const ApplicationsByJobId = ({ params }: { params: { id: string } }) => {
  return (
    <main className="mt-4">
      <ApplicationsForJob id={params.id} />
    </main>
  );
};

export default ApplicationsByJobId;
