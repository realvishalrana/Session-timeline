import React from "react";

const ClipboardIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="17"
      fill="none"
      viewBox="0 0 13 17"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.25"
        d="M9.333 2.833h1.417a1.417 1.417 0 0 1 1.417 1.417v9.917a1.417 1.417 0 0 1-1.417 1.416h-8.5a1.417 1.417 0 0 1-1.417-1.416V4.25A1.417 1.417 0 0 1 2.25 2.833h1.417m.708-1.416h4.25c.391 0 .708.317.708.708v1.417a.71.71 0 0 1-.708.708h-4.25a.71.71 0 0 1-.708-.708V2.125c0-.391.317-.708.708-.708"
      ></path>
    </svg>
  );
};

export default ClipboardIcon;
