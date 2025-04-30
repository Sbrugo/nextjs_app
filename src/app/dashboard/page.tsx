"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AddJob } from "src/components/jobs/dashboard/addJob";
import { JobList } from "src/components/jobs/home/jobslist";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
  description: string;
}

export default function Page() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        setJobs(res.data);
        // setFilteredJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`/api/jobs/${id}`);
      console.log("✅ Eliminado:", res.data);
      const updated = jobs.filter((job) => job._id !== id);
      setJobs(updated);
      // setFilteredJobs(
      //   updated.filter((job) =>
      //     job.title.toLowerCase().includes(jobTitle.toLowerCase())
      //   )
      // );
    } catch (error) {
      console.error("❌ Error eliminando:", error);
    }
  };

  return (
    <main className="flex flex-col gap-2">
      <div className="space-y-4">
        <AddJob />
        <JobList location="dashboard" jobs={jobs} handleDelete={handleDelete} />
      </div>
    </main>
  );
}
