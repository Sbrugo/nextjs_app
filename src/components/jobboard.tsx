"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { JobList } from "./jobs/home/jobslist";
import Searchbar from "./searchbar";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
  description: string;
}

export const JobBoard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [jobTitle, setJobTitle] = useState(""); // nuevo estado para el título de búsqueda

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobs");
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleJobTitleChange = (value: string) => {
    setJobTitle(value);
  };

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(`/api/jobs/${id}`);
      console.log("✅ Eliminado:", res.data);
      const updated = jobs.filter((job) => job._id !== id);
      setJobs(updated);
      setFilteredJobs(
        updated.filter((job) =>
          job.title.toLowerCase().includes(jobTitle.toLowerCase())
        )
      );
    } catch (error) {
      console.error("❌ Error eliminando:", error);
    }
  };

  return (
    <div className="w-full px-[64px] flex flex-col gap-8">
      <Searchbar
        jobTitle={jobTitle}
        onJobTitleChange={handleJobTitleChange}
        onSearch={handleSearch}
      />
      <JobList
        jobs={filteredJobs}
        location="home"
        handleDelete={handleDelete}
      />
    </div>
  );
};
