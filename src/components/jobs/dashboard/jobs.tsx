"use client";

import React, { useState } from "react";
import axios from "axios";
import { Input } from "@headlessui/react";
import { Job } from "src/types/job";

export const EditableJob = ({
  jobs,
  setJobs,
}: {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    confidentialClient: "",
    isRemote: "",
    date: "",
  });
  const [response, setResponse] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date) {
      setResponse("Completa todos los campos requeridos.");
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
      });
      setResponse("Empleo creado con éxito.");
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      setResponse("Error en la solicitud.");
    }
  };
  return (
    <>
      <div className="border p-4 mb-4 rounded-lg shadow flex flex-col gap-3 h-fit">
        <div className="p-1">{response && <p>{response}</p>}</div>
        <div className="flex justify-between">
          <form onSubmit={handleSubmit} className="w-full">
            <Input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
            />
            <div className="flex justify-between">
              <Input
                type="text"
                name="confidentialClient"
                placeholder="Is confidential client?"
                onChange={handleChange}
                value={formData.confidentialClient}
                className="text-gray-500 text-sm"
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
                className="text-gray-500 text-sm text-end pr-1"
                onChange={handleChange}
                value={formData.date}
              />
            </div>
            <div className="w-full flex justify-end pt-2">
              <button
                type="submit"
                className="text-green-700 py-1 px-2 text-sm shadow font-bold border-1 rounded-2xl border-green-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export const CrudJobList = ({
  jobs,
  setJobs,
}: {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
}) => {
  const handleDelete = async (id: string) => {
    try {
      console.log("ID from front:", id);
      const response = await axios.delete(`/api/jobs/${id}`);
      console.log("✅ Eliminado:", response.data);
      setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error("❌ Error eliminando:", error);
    }
  };

  return (
    <div className="w-full">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="border p-4 mb-4 rounded-lg shadow flex flex-col gap-3"
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
          <div className="w-full flex justify-end pt-2">
            <button
              className="text-white py-1 px-2 text-sm shadow font-bold border-1 rounded-2xl bg-red-700"
              onClick={() => handleDelete(job._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
