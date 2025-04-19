"use client";

import { useRouter } from "next/navigation";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
}
export const JobCard = ({ job }: { job: Job }) => {
  const router = useRouter();

  const handleClick = async () => {
    if (job._id) {
      try {
        router.push(`/jobs/${job._id}`);
      } catch (error) {
        console.error("Error en la redirección:", error);
      }
    } else {
      console.error("Error: No se encuentra el _id del trabajo.");
    }
  };

  return (
    <div
      onClick={handleClick}
      key={job._id}
      className="cursor-pointer p-4 mb-4 flex flex-col gap-3"
    >
      <h2 className="text-xl font-bold">{job.title}</h2>
      <div className="flex justify-between">
        <div className="flex w-1/2 justify-between">
          <p className="text-gray-500 text-sm">{job.confidentialClient}</p>
          <p className="text-gray-500 text-sm">{job.isRemote}</p>
        </div>
        <p className="text-gray-500 text-sm">
          {new Date(job.date).toLocaleDateString("es-AR", {
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};
