import { Job } from "src/types/job";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function JobDetail({ params }: Props) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/${params.id}`
    );

    if (!res.ok) throw new Error("No se pudo obtener el job");

    const job: Job = await res.json();

    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600">
          Fecha: {new Date(job.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600">¿Remoto?: {job.isRemote ? "Sí" : "No"}</p>
      </div>
    );
  } catch (error) {
    console.error("Error al obtener el trabajo:", error);
    return notFound();
  }
}
