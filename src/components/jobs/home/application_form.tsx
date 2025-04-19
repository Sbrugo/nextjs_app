"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { RadioGroup, RadioGroupItem } from "src/components/ui/radio-group";
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
import axios from "axios";
import { SelectField } from "src/components/form-fields/select_field";
import { TextField } from "src/components/form-fields/text_field";
import { MultiSelectField } from "src/components/form-fields/multi_select_field";

export default function ApplicationForm() {
  const form = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      linkedin: "",
      country: "",
      city: "",
      relocation: "",
      relocation_countries: [],
      english_level: "",
      other_language: "",
      job_type: "",
      visa_sponsorship: "",
      consent: false,
      skills_description: "",
      skills: [],
      roles: "",
      leadership_experience: "",
      salary: 0,
      hourly_salary: 0,
      experience: "",
      share: "",
      CV: "",
    },
  });

  const { control, handleSubmit, setValue } = form;
  const [step, setStep] = useState(1);

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "CV" && value instanceof File) {
        formData.append("CV", value);
      } else if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      ) {
        formData.append(key, value.toString());
      } else if (Array.isArray(value)) {
        value.forEach((item) => {
          formData.append(`${key}[]`, item.toString());
        });
      }
    });

    try {
      const response = await axios.post("/api/resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("Submitted!");
      }
    } catch (error: any) {
      console.error("Submission error:", error.response || error.message);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 py-6 bg-transparent gap-4 w-1/2 mt-5"
      >
        {step === 1 && (
          <>
            <TextField
              name="full_name"
              label="Name and Last Name"
              placeholder={""}
              control={control}
            />
            <TextField
              name="email"
              label="E-mail"
              placeholder={""}
              type="email"
              control={control}
            />
            <TextField
              name="phone"
              label="Phone Number"
              placeholder={""}
              type="tel"
              control={control}
            />
            <TextField
              name="linkedin"
              label="LinkedIn Link"
              placeholder={""}
              control={control}
            />
            <SelectField
              name="country"
              label="Country of Residence"
              options={countryOptions}
              placeholder="Select country"
              control={control}
            />
            <TextField
              name="city"
              label="In which city are you currently based?"
              placeholder={""}
              control={control}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="border-2 rounded-2xl border-gray-900 bg-gray-900 text-white font-semibold px-2 py-0.5 w-fit flex self-end"
                onClick={() => setStep(2)}
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <SelectField
              name="relocation"
              label="Are you willing to relocate?"
              options={relocationOptions}
              placeholder="Select answer"
              control={control}
            />
            <MultiSelectField
              name="relocation_countries"
              label="If you are open to relocation, please select all the countries where you would be willing to relocate."
              options={countryOptions}
            />
            <SelectField
              name="english_level"
              label="What is your level of English?"
              options={englishLevelOptions}
              placeholder="Select level"
              control={control}
            />
            <MultiSelectField
              name="other_language"
              label="What other languages do you speak fluently or at an intermediate level?"
              options={languageOptions}
            />
            <SelectField
              name="job_type"
              label="What type of job are you looking for?"
              options={jobTypeOptions}
              placeholder="Select job type"
              control={control}
            />
            <SelectField
              name="visa_sponsorship"
              label="Do you need visa sponsorship to work in the European Union?"
              options={visaSponsorshipOptions}
              placeholder="Select answer"
              control={control}
            />
            <FormField
              control={control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Do you consent to the storage of your contact information
                    for 2 years?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => field.onChange(value === "yes")}
                      defaultValue={field.value ? "yes" : "no"}
                      className="flex gap-2 flex-col"
                    >
                      <FormItem className="flex items-center flex-row space-x-2 shadow-none border-none p-0 m-0">
                        <FormControl>
                          <RadioGroupItem value="yes" id="yes" />
                        </FormControl>
                        <FormLabel htmlFor="yes" className="text-md">
                          Yes
                        </FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center flex-row space-x-2 shadow-none border-none p-0 m-0">
                        <FormControl>
                          <RadioGroupItem value="no" id="no" />
                        </FormControl>
                        <FormLabel htmlFor="no" className="text-md">
                          No
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormDescription>
                    Accept terms and conditions.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <button
                type="button"
                className="border-2 rounded-2xl border-gray-900 bg-gray-900 text-white font-semibold px-2 py-0.5 w-fit flex self-end"
                onClick={() => setStep(3)}
              >
                Next
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <TextField
              name="skills_description"
              label="Skills and Experience"
              placeholder="Description"
              type="text"
              control={control}
            />
            <MultiSelectField
              name="skills"
              label="Please select all the skills from the list below that you have knowledge or experience with:"
              options={skillOptions}
            />
            <MultiSelectField
              name="roles"
              label="Which type of roles are you looking for?"
              options={roleOptions}
            />
            <SelectField
              name="leadership_experience"
              label="Do you have leadership experience or have you managed teams?"
              placeholder="Select experience"
              options={leadershipExperienceOptions}
            />
            <TextField
              name="salary"
              label="Please specify your expected NET monthly salary in USD"
              type="number"
              placeholder="NET monthly salary"
            />
            <TextField
              name="hourly_salary"
              label="Indicate your expected hourly salary in USD"
              type="number"
              placeholder="Salary"
            />
            <SelectField
              name="experience"
              label="How many years of work experience in IT do you have?"
              options={experienceOptions}
              placeholder="Experience"
            />
            <TextField
              name="share"
              label="Is there anything else you would like to share with us about your job search?"
              type="text"
              placeholder=""
            />
            <input
              type="file"
              name="CV"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                console.log("Archivo seleccionado:", file);
                setValue("CV", file);
              }}
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="border-2 rounded-2xl border-gray-900 bg-gray-900 text-white font-semibold px-2 py-0.5 w-fit flex self-end"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </FormProvider>
  );
}
