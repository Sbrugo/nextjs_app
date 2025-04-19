import { Schema, model, models } from "mongoose";

import {
  countryOptions,
  englishLevelOptions,
  experienceOptions,
  jobTypeOptions,
  languageOptions,
  leadershipExperienceOptions,
  relocationOptions,
  roleOptions,
  skillOptions,
  visaSponsorshipOptions,
} from "src/types/application";

const ResumeSchema = new Schema(
  {
    full_name: { type: String, required: false },
    email: { type: String, required: false },
    phone: { type: Number, required: false },
    linkedin: { type: String, required: false },
    country: { type: Array || String, enum: countryOptions, required: false },
    city: { type: String, required: false },
    relocation: {
      type: Array || String,
      enum: relocationOptions,
      required: false,
    },
    relocationCountries: {
      type: Array || String,
      enum: countryOptions,
      required: false,
    },
    english_level: { type: String, enum: englishLevelOptions, required: false },
    languages: {
      type: Array || String,
      enum: languageOptions,
      required: false,
    },
    job_type: { type: Array || String, enum: jobTypeOptions, required: false },
    visa_sponsorship: {
      type: Array || String,
      enum: visaSponsorshipOptions,
      required: false,
    },
    consent: { type: Boolean, required: false },
    skills_description: { type: String, required: false },
    skills: { type: Array || String, enum: skillOptions, required: false },
    roles: { type: Array || String, enum: roleOptions, required: false },
    leadership_experience: {
      type: Array || String,
      enum: leadershipExperienceOptions,
      required: false,
    },
    salary: { type: Number, required: false },
    hourly_salary: { type: Number, required: false },
    experience: {
      type: Array || String,
      enum: experienceOptions,
      required: false,
    },
    share: { type: String, required: false },
    CV: { type: String, required: false },
  },
  { timestamps: false }
);

const Resume = models.Resume || model("Resume", ResumeSchema);
export default Resume;
