export function HomeSkeleton() {
  return <></>;
}
export function JobsSkeleton() {
  return (
    <div className="w-154">
      <div className="border p-4 mb-4 rounded-lg shadow flex flex-col gap-3">
        <h2 className="text-xl font-bold"></h2>
        <div className="flex justify-between">
          <div className="flex w-1/2 justify-between">
            <p className="text-gray-700"></p>
            <p className="text-gray-700"></p>
          </div>
          <p className="text-gray-700"></p>
        </div>
      </div>
    </div>
  );
}
