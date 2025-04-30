import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "src/lib/mongodb";
import Job from "src/models/job";

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const job = await Job.findById(context.params.id);

    if (!job) {
      return NextResponse.json(
        { message: "Job no encontrado" },
        { status: 404 }
      );
    }
    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    console.error("❌ Error obteniendo empleo por ID:", error);
    return NextResponse.json(
      { message: "Error obteniendo empleo" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    await connectDB();
    const body = await req.json();
    const updatedJob = await Job.findByIdAndUpdate(context.params.id, body, {
      new: true,
    });

    return NextResponse.json(updatedJob, { status: 200 });
  } catch (error) {
    console.error("❌ Error actualizando empleo:", error);
    return NextResponse.json(
      { message: "Error actualizando empleo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  console.log(context.params.id);

  try {
    await connectDB();
    await Job.findByIdAndDelete(context.params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error eliminando empleo:", error);
    return NextResponse.json(
      { message: "Error eliminando empleo" },
      { status: 500 }
    );
  }
}
