export const TimeLineSkeletonLoader = () => (
  <div className="animate-pulse flex space-x-2 w-full">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="h-1 bg-gray-300 rounded w-16"
        style={{ width: `${20 + index * 10}%` }}
      />
    ))}
  </div>
);

export const DetailsSkeletonLoader = () => (
  <>
    <div className="relative p-4 ml-6 mt-3 flex items-center justify-between animate-pulse">
      <div className="bg-dark-gray px-[10px] w-60">
        <div className="h-4 bg-gray-600 rounded mb-2" />
        <div className="h-3 bg-gray-500 rounded w-40" />
      </div>
      <div className="h-4 bg-primary-blue rounded w-24" />
    </div>
    <div className="flex space-x-1 mx-12">
      <TimeLineSkeletonLoader />
    </div>
  </>
);

export const HeaderSkeletonLoader = () => (
  <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-sm font-bold border-b border-gray-600 animate-pulse">
    <div className="flex justify-between items-center gap-2 sm:mr-4">
      {/* Skeleton for the clipboard icon */}
      <div className="h-5 w-5 bg-gray-600 rounded-full"></div>
      <div className="h-4 bg-gray-600 rounded w-32"></div>
    </div>
    <div className="w-44">
      {/* Skeleton for the Toggle Switch */}
      <div className="h-4 bg-gray-600 rounded w-32"></div>
    </div>
  </div>
);
