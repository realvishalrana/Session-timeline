import React from "react";

const HeaderTimeStamp = ({ timeStamps = [] }) => {
  return (
    <div className="flex py-4 text-sm font-bold bg-dark-gray text-gray-500 border-b border-gray-600">
      {timeStamps.length ? (
        timeStamps.map((timestamp, index) => (
          <div
            key={index}
            className="text-center flex-none min-w-[80px] sm:flex-1"
          >
            {timestamp}
          </div>
        ))
      ) : (
        <div className="text-center flex-none min-w-[80px] sm:flex-1">
          No Time Step Data Available
        </div>
      )}
    </div>
  );
};

export default HeaderTimeStamp;
