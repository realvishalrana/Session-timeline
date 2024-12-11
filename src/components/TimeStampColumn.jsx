import React from "react";

const TimeStampColumn = ({ timeStamps = [] }) => {
  return (
    <div className="absolute inset-0 flex">
      {timeStamps.map((_, index) => (
        <div key={index} className="flex-1 flex justify-center">
          <div className="border-r border-gray-light h-full" />
        </div>
      ))}
    </div>
  );
};

export default TimeStampColumn;
