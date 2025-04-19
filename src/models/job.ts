import { Schema, model, models } from "mongoose";

const JobSchema = new Schema(
  {
    title: { type: String, required: true },
    confidentialClient: { type: String, required: true },
    isRemote: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Job = models.Job || model("Job", JobSchema);

export default Job;
