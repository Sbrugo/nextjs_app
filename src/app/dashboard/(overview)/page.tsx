"use client";

import { useState } from "react";
import { lusitana } from "src/ui/fonts";
import axios from "axios";

export default function Page() {
  const [job, setJob] = useState({
    title: "",
    confidentialClient: "",
    isRemote: false,
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setJob((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("/api/jobs", job);

      if (response.status === 200) {
        setMessage("✅ Empleo creado exitosamente");
        setJob({
          title: "",
          confidentialClient: "",
          isRemote: false,
          date: "",
        });
      } else {
        setMessage("❌ Error al crear el empleo");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("❌ Error al enviar el formulario");
    }
  };

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Create Job</h2>
        {message && <p className="mb-4">{message}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            placeholder="Título del empleo"
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="confidentialClient"
            value={job.confidentialClient}
            onChange={handleChange}
            placeholder="Cliente"
            required
            className="border p-2 rounded"
          />
          <select
            name="isRemote"
            value={job.isRemote ? "true" : "false"}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="false">Presencial</option>
            <option value="true">Remoto</option>
          </select>
          <input
            type="date"
            name="date"
            value={job.date}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Create Job
          </button>
        </form>
      </div>
    </main>
  );
}
