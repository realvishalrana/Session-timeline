import React from "react";

const MonitorIcon = ({ width = 25, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={1} y={0.5} width={23} height={23} rx={9.5} fill="#777777" />
      <rect x={1} y={0.5} width={23} height={23} rx={9.5} stroke="#777777" />
      <path
        d="M10.5 16.5H14.5M12.5 14.5V16.5M8.5 7.5H16.5C17.0523 7.5 17.5 7.94772 17.5 8.5V13.5C17.5 14.0523 17.0523 14.5 16.5 14.5H8.5C7.94772 14.5 7.5 14.0523 7.5 13.5V8.5C7.5 7.94772 7.94772 7.5 8.5 7.5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MonitorIcon;
