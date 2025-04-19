"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { JobCard } from "./job_card";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
}

export const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setJobs(response.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-xl">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="animate-pulse border p-4 mb-4 rounded-lg shadow flex flex-col gap-3"
          >
            <div className="h-6 bg-gray-200 rounded-md w-3/4" />
            <div className="h-4 bg-gray-100 rounded-md w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full px-[64px]">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};
