"use client";

import { ArrowUpRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

interface Job {
  _id?: string;
  title: string;
  confidentialClient: string;
  isRemote: string;
  date: string;
  description: string;
}

interface JobCardProps {
  job: Job;
  location: string;
  handleDelete: (id: string) => void;
}

export const JobCard = ({ job, location, handleDelete }: JobCardProps) => {
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
    <div key={job._id} className="rounded-3xl p-6 bg-slate-100 mb-6 border-b">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg text-gray-900">{job.title}</h3>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <p className="text-gray-700 text-sm min-w-fit">
              {job.confidentialClient}
            </p>
            <p className="text-gray-700 text-sm">{job.isRemote}</p>
            <p className="text-gray-700 text-sm">
              {new Date(job.date).toLocaleDateString("es-AR", {
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="text-gray-700 text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            atque alias aut beatae ad adipisci, deserunt, natus architecto
            dolores nobis ut aperiam fugiat id illo quas facere sequi
            consequuntur sint.
          </p>
        </div>
        {location === "home" && (
          <div className="flex-shrink-0 self-center">
            <button
              aria-label="Apply to job"
              onClick={handleClick}
              className="px-4 py-2 flex gap-2 font-light md:w-fit"
            >
              Apply <ArrowUpRightIcon className="w-5" />
            </button>
          </div>
        )}

        {location === "dashboard" && (
          <div className="flex-shrink-0">
            <button
              aria-label="Delete job"
              onClick={(e) => handleDelete(job._id!)}
              className="hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full bg-gray-900 text-white transition-colors flex gap-2 font-light md:w-fit"
            >
              Delete <TrashIcon className="w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
