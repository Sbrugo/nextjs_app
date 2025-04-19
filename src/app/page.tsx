"use client";
import { JobList } from "src/components/jobs/home/jobslist";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex shrink-0 py-4 h-80 mx-20 flex-col w-fit justify-center gap-2">
        <button
          className="border-2 rounded-2xl border-gray-700 px-2 py-0.5 w-fit bg-white"
          onClick={() => {
            router.push("/apply");
          }}
        >
          Apply now
        </button>
        <h2 className="text-8xl">Be part of the mission</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <JobList />
      </div>
    </main>
  );
}
