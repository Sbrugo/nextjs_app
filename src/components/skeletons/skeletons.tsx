export function HomeSkeleton() {
  return <></>;
}
export function JobsSkeleton() {
  return (
    <div className="rounded-3xl p-6 bg-white mb-6 border-b animate-pulse">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-4 w-full">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <div className="h-4 w-24 bg-gray-300 rounded"></div>{" "}
            <div className="h-4 w-20 bg-gray-300 rounded"></div>{" "}
            <div className="h-4 w-16 bg-gray-300 rounded"></div> {/* Date */}
          </div>

          <div className="h-20 w-full bg-gray-300 rounded"></div>
        </div>

        <div className="flex-shrink-0">
          <div className="h-10 w-28 bg-gray-300 rounded-full"></div>{" "}
        </div>
      </div>
    </div>
  );
}
