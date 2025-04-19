import JobDetail from "src/components/jobs/home/job_detail";

type Props = {
  params: {
    id: string;
  };
};

export default async function JobDetailsPage({ params }: Props) {
  return <JobDetail params={params} />;
}
