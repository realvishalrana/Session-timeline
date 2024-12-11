import React from "react";

const chevronRight = (props) => {
  return (
    <svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.125 10.75L5.875 6L1.125 1.25"
        stroke="#5568FE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default chevronRight;
