"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {
  const jobsList = [
    {
      title: "Software Engineer",
      confidentialClient: "Confidential client",
      isRemote: "Remote",
      date: "Mar 27, 2025",
    },
    {
      title: "Data Scientist",
      confidentialClient: "Confidential client",
      isRemote: "Remote",
      date: "Mar 27, 2025",
    },
    {
      title: "Product Manager",
      confidentialClient: "Confidential client",
      isRemote: "Remote",
      date: "Mar 27, 2025",
    },
  ];

  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("/api/jobs");
        setFetchedJobs(response.data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="w-154">
      {loading && <p>Loading jobs...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {[...jobsList, ...fetchedJobs].map((job, index) => (
        <div
          key={index}
          className="border p-4 mb-4 rounded-lg shadow flex flex-col gap-3"
        >
          <h2 className="text-xl font-bold">{job.title}</h2>
          <div className="flex justify-between">
            <div className="flex w-1/2 justify-between">
              <p className="text-gray-500 text-sm">{job.confidentialClient}</p>
              <p className="text-gray-500 text-sm">
                {job.isRemote || (job.isRemote ? "Remote" : "On-site")}
              </p>
            </div>
            <p className="text-gray-500 text-sm">{job.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
