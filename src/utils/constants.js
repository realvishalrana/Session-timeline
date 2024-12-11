import MonitorIcon from "../assets/monitor";
import OutIcon from "../assets/out";
import MicIcon from "../assets/mic";
import ErrorIcon from "../assets/error";
import VideoIcon from "../assets/video";
import ScreenShareIcon from "../assets/screenShare";

export const eventDetails = {
  timelog: {
    icons: { start: <MonitorIcon />, end: <OutIcon /> },
    className: "bg-gray-400",
  },
  mic: {
    icons: { start: <MicIcon /> },
    className: "bg-primary-blue",
  },
  webcam: {
    icons: { start: <VideoIcon /> },
    className: "bg-primary-blue",
  },
  screenShare: {
    icons: { start: <ScreenShareIcon /> },
    className: "bg-primary-blue",
  },
  screenShareAudio: {
    icons: {},
    className: "bg-primary-blue",
  },
  errors: {
    icons: { start: <ErrorIcon /> },
    className: "bg-red-500",
  },
};

export const KEYS = {
  HOUR: "hr",
  MINTUES: "min",
  SECOND: "ss",
};

export const DATA_FORMAT = {
  HOUR_MONTH: "HH:mm",
  HOUR_MONTH_SMALL: "hh:mm",
  DATE_MONTH_YEAR: "DD MMMM YYYY",
  HOUR_MONTH_SECOND: "hh:mm:ss A",
};

export const STATUS = {
  UPCOMING: "Upcoming",
  IN_PROGRESS: "In Progress",
  OVER: "Over",
};
