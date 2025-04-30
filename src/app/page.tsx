"use client";
import { JobList } from "src/components/jobs/home/jobslist";
import { useRouter } from "next/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Searchbar from "src/components/searchbar";
import { useState } from "react";
import { NavBar } from "src/components/ui/navbar";
import { JobBoard } from "src/components/jobboard";

export default function Page() {
  const router = useRouter();
  const [jobTitle, setJobTitle] = useState("");

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="bg-gradient-to-b from-purple-50 to-slate-50 via-sky-100 min-h-screen font-sans p-10">
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl text-left md:text-6xl font-bold text-gray-900">
            Find your next opportunity. Join our database and discover jobs that
            match your skills and aspirations.
          </h1>
          <p className="text-lg text-left md:text-xl text-gray-600 mt-6">
            Recruitment services for companies and job seekers. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Qui quasi nesciunt
            consequuntur nobis quod, aut eaque facilis omnis atque autem
            voluptatum impedit nisi? Veritatis voluptatum eaque, alias velit
            voluptas at. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Deserunt, recusandae. Est ipsam aut soluta provident dolore
            exercitationem natus.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => router.push("/apply")}
              className="bg-slate-100 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors border flex gap-2 px-4 py-2 font-medium shadow-md"
            >
              <span className="hidden md:block">Upload your Resume</span>
              <span className="block md:hidden">Upload Resume</span>
            </button>
            <button className="bg-slate-100 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors border flex gap-2 px-4 py-2 font-medium shadow-md">
              <span className="hidden md:block">Contact for Services</span>
              <span className="block md:hidden">Contact</span>
            </button>
          </div>
        </section>
        {/* <div className="flex gap-4 bg-transparent flex-wrap">
          <button
            className="hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full bg-gray-900 text-white transition-colors border-b flex gap-2 font-light"
            onClick={() => router.push("/apply")}
          >
            Jobs
          </button>
          <button
            className="hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full bg-gray-900 text-white transition-colors border-b flex gap-2 font-light"
            onClick={() => router.push("/company")}
          >
            Resources
          </button>
          <button
            className="hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full bg-gray-900 text-white transition-colors border-b flex gap-2 font-light"
            onClick={() => router.push("/person")}
          >
            Information
          </button>
        </div> */}
        <section className="py-20 px-6">
          <div className="flex flex-col gap-8 min-h-screen">
            <JobBoard />
          </div>
        </section>
      </div>
    </main>
  );
}
