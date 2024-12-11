import React from "react";


const Tooltip = ({ message, children }) => {
  return (
    <div className="relative group">
      {children}
      <div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 whitespace-normal max-w-xs z-10"
      >
        {message}
      </div>
    </div>
  );
};

export default Tooltip;
