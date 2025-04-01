import { NextResponse } from "next/server";
import { connectDB } from "src/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      { message: "✅ Conexión exitosa a MongoDB" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    return NextResponse.json(
      { message: "❌ Error conectando a MongoDB" },
      { status: 500 }
    );
  }
}
