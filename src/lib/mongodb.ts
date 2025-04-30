import mongoose from "mongoose";
const MONGODB_uri = process.env.MONGODB_URI;

if (!MONGODB_uri) {
  throw new Error("Por favor defina la uri de mongodb");
}

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }

    await mongoose.connect(MONGODB_uri);
    console.log("✅ Conectado a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};

connectDB();
