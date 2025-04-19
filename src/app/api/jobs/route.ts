import { NextResponse } from "next/server";
import { connectDB } from "src/lib/mongodb";
import Job from "src/models/job";

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

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const [month, year] = body.date.split("/").map(Number);
    const validDate = new Date(year, month - 1, 1);

    const newJob = new Job({
      title: body.title,
      confidentialClient: body.confidentialClient,
      isRemote: body.isRemote,
      date: validDate,
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
