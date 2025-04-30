import BacktojobsButton from "src/components/buttons/back_to_jobs_button";
import ApplicationForm from "src/components/jobs/home/application_form";

export default function Page() {
  return (
    <>
      <div className="flex shrink-0 p-4 mx-20 flex-col justify-center gap-2">
        <div className="h-80 flex flex-col gap-4 justify-center">
          <h2 className="text-3xl font-light flex items-center">
            Hello, please feel free to apply to any jobs sending your
            information
          </h2>
          <BacktojobsButton />
        </div>
        <ApplicationForm />
      </div>
    </>
  );
}
