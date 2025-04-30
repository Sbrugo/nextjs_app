"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input, Textarea } from "@headlessui/react";
import { Job } from "src/types/job";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export const AddJob = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get("/api/jobs");
      setJobs(response.data);
    };
    fetchJobs();
  }, []);
  const [formData, setFormData] = useState({
    title: "",
    confidentialClient: "",
    isRemote: "",
    date: "",
    description: "",
  });
  const [response, setResponse] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date) {
      setResponse("Please complete all fields.");
      return;
    }
    try {
      const res = await axios.post("/api/jobs", formData);
      const newJob = res.data.job;
      setJobs((prevJobs) => [...prevJobs, newJob]);
      setFormData({
        title: "",
        confidentialClient: "",
        isRemote: "",
        date: "",
        description: "",
      });
      setResponse("Empleo creado con éxito.");
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      setResponse("Error en la solicitud.");
    }
  };
  return (
    <>
      <div className="rounded-3xl p-6 bg-white hover:shadow-lg transition-shadow duration-300 mb-6 border-b gap-1 w-fit px-[64px">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <Input
            type="text"
            name="title"
            placeholder="Software Developer"
            onChange={handleChange}
            value={formData.title}
            className="text-lg text-gray-800"
          />
          <div className="flex gap-3 justify-between items-start w-fit">
            <Input
              type="text"
              name="confidentialClient"
              placeholder="Is confidential client?"
              onChange={handleChange}
              value={formData.confidentialClient}
              className="text-gray-500 text-sm min-w-fit"
            />

            <Input
              type="text"
              name="isRemote"
              placeholder="Is Remote?"
              className="text-gray-500 text-sm"
              onChange={handleChange}
              value={formData.isRemote}
            />
            <Input
              type="text"
              name="date"
              placeholder="Date?"
              className="text-gray-500 text-sm pr-1"
              onChange={handleChange}
              value={formData.date}
            />
            <Textarea
              name="description"
              placeholder="Description"
              className="text-gray-500 text-md"
              onChange={handleChange}
              value={formData.description}
            />
            <button
              type="submit"
              className="group hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full bg-gray-900 text-white transition-colors border-b flex gap-2 font-light w-fit items-center"
            >
              Add
              <PlusCircleIcon className="w-5 h-5 text-white group-hover:text-green-900 transition-colors" />
            </button>
          </div>
        </form>
        <div className="p-1 flex flex-col text-lg">
          {response && <p>{response}</p>}
        </div>
      </div>
    </>
  );
};
