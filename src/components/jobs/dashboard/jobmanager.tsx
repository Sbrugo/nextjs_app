import axios from "axios";
import { useEffect, useState } from "react";
import { CrudJobList, EditableJob } from "./jobs";
import { Job } from "src/types/job";

export const JobManager = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("/api/jobs");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);

  return (
    <>
      <EditableJob jobs={jobs} setJobs={setJobs} />
      <CrudJobList jobs={jobs} setJobs={setJobs} />
    </>
  );
};
