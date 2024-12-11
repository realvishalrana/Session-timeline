import React from 'react'

const VideoIcon = (props) => {
  return  <svg
  width={23}
  height={22}
  viewBox="0 0 23 22"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <rect x={0.5} width={22} height={22} rx={9} fill="#5568FE" />
  <g clipPath="url(#clip0_1_56)">
    <path
      d="M17 8.5L13.5 11L17 13.5V8.5Z"
      stroke="white"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 7.5H7C6.44772 7.5 6 7.94772 6 8.5V13.5C6 14.0523 6.44772 14.5 7 14.5H12.5C13.0523 14.5 13.5 14.0523 13.5 13.5V8.5C13.5 7.94772 13.0523 7.5 12.5 7.5Z"
      stroke="white"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_1_56">
      <rect
        width={12}
        height={12}
        fill="white"
        transform="translate(5.5 5)"
      />
    </clipPath>
  </defs>
</svg>
}

export default VideoIcon