"use client";

import { JobCard } from "./job_card";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
  description: string;
}

interface JobListProps {
  jobs: Job[];
  location: string;
  handleDelete: (id: string) => void;
}

export const JobList = ({ jobs, location, handleDelete }: JobListProps) => {
  if (!jobs.length) {
    return (
      <div className="flex flex-col gap-4 w-9/12">
        <p className="text-center text-gray-500">No jobs found.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          location={location}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
