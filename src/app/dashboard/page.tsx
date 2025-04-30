"use client";

import { AddJob } from "src/components/jobs/dashboard/addJob";
import { JobList } from "src/components/jobs/home/jobslist";

export default function Page() {
  return (
    <main className="flex flex-col gap-2">
      <div className="space-y-4">
        <AddJob />
        <JobList location="dashboard" />
      </div>
    </main>
  );
}
