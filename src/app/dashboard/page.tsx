"use client";

import { JobManager } from "src/components/jobs/dashboard/jobmanager";

export default function Page() {
  return (
    <main className="w-full flex">
      <div className="flex flex-col gap-2 p-4">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Panel de empleos</h1>
          <JobManager />
        </div>
      </div>
    </main>
  );
}
