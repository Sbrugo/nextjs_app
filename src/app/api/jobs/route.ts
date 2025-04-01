import { NextResponse } from "next/server";
import { connectDB } from "src/lib/mongodb";
import Job from "src/models/job";

// Get all jobs
export async function GET() {
  try {
    await connectDB();
    const jobs = await Job.find();
    return NextResponse.json(jobs, { status: 200 });
  } catch (error) {
    console.error("❌ Error obteniendo empleos:", error);
    return NextResponse.json(
      { message: "Error obteniendo empleos" },
      { status: 500 }
    );
  }
}

// Create new job
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate input
    if (
      !body.title ||
      !body.confidentialClient ||
      typeof body.isRemote !== "boolean" ||
      !body.date
    ) {
      return NextResponse.json(
        { message: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Validate date format
    const jobDate = new Date(body.date);
    if (isNaN(jobDate.getTime())) {
      return NextResponse.json(
        { message: "Formato de fecha inválido" },
        { status: 400 }
      );
    }

    // Save to DB
    const newJob = new Job({
      title: body.title,
      confidentialClient: body.confidentialClient,
      isRemote: body.isRemote,
      date: jobDate,
    });

    await newJob.save();

    return NextResponse.json({ success: true, job: newJob }, { status: 201 });
  } catch (error) {
    console.error("❌ Error creando empleo:", error);
    return NextResponse.json(
      { message: "Error creando empleo" },
      { status: 500 }
    );
  }
}
