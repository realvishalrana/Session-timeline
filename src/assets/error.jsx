import React from "react";

const ErrorIcon = (props) => {
  return (
    <svg
    width={15}
    height={14}
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.5}
      width={14}
      height={14}
      rx={5}
      fill="#F17676"
      fillOpacity={0.9}
    />
    <g clipPath="url(#clip0_1_74)">
      <path
        d="M7.50001 5.66666V7M7.50001 8.33333H7.50334M10.8333 7C10.8333 8.84095 9.34095 10.3333 7.50001 10.3333C5.65906 10.3333 4.16667 8.84095 4.16667 7C4.16667 5.15905 5.65906 3.66666 7.50001 3.66666C9.34095 3.66666 10.8333 5.15905 10.8333 7Z"
        stroke="white"
        strokeWidth={0.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_74">
        <rect width={8} height={8} fill="white" transform="translate(3.5 3)" />
      </clipPath>
    </defs>
  </svg>
  );
};

export default ErrorIcon;
