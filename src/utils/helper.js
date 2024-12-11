import moment from "moment";
import { DATA_FORMAT, KEYS, STATUS } from "./constants";

/**
 * @description Function to generate 12 divisions of total meeting time
 * @param {String} start ISO 8601 start time of the meeting
 * @param {String} end ISO 8601 end time of the meeting
 * @returns {Array} Array of 12 timestamps as strings in hh:mm format
 */
export const generateTimeStamps = (start, end) => {
  const startTime = moment(start);
  const endTime = moment(end);
  const totalMinutes = endTime.diff(startTime, "minutes");
  const interval = totalMinutes / 12;

  return Array.from({ length: 13 }, (_, i) => {
    const marker = startTime.clone().add(i * interval, "minutes");
    return marker.format("HH:mm");
  });
};

/**
 * @description Function to determine the status of a meeting
 * @param {String} start ISO 8601 start time of the meeting
 * @param {String} end ISO 8601 end time of the meeting (optional)
 * @returns {String} Meeting status: "Upcoming", "In Progress", or "Over"
 */
export const getMeetingStatus = (start, end) => {
  const now = moment();
  const sessionStart = moment(start);

  if (now.isBefore(sessionStart)) {
    return STATUS.UPCOMING;
  }

  if (!end) {
    return STATUS.IN_PROGRESS;
  }

  const sessionEnd = moment(end);
  return now.isAfter(sessionEnd) ? STATUS.OVER : STATUS.IN_PROGRESS;
};

/**
 * @description Function to calculate total time spent by a user in a meeting based on time logs
 * @param {Array} timeLogs Array of objects containing "start" and "end" timestamps
 * @returns {number} Total time in minutes spent by the user in the meeting
 */
export const calculateTotalMinutes = (timeLogs = []) => {
  return timeLogs.reduce((total, log) => {
    const start = moment(log.start);
    const end = moment(log.end);
    return total + end.diff(start, "minutes");
  }, 0);
};

/**
 * @description Function to calculate total meeting duration
 * @param {String} status Meeting status: "Upcoming", "In Progress", or "Over"
 * @param {String} start ISO 8601 start time of the meeting
 * @param {String} end ISO 8601 end time of the meeting (optional)
 * @returns {String} Formatted meeting duration (e.g., "2 hr 15 min") or "-" if "Upcoming"
 */
export const calculateMeetingDuration = (status, start, end = null) => {
  if (status === STATUS.UPCOMING) {
    return "-";
  }

  const startTime = moment(start);
  const endTime = status === STATUS.IN_PROGRESS ? moment() : moment(end);
  const durationInMinutes = endTime.diff(startTime, "minutes");

  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours} ${KEYS.HOUR} ${minutes} ${KEYS.MINTUES}`;
  } else if (hours > 0) {
    return `${hours} ${KEYS.HOUR}`;
  } else {
    return `${minutes} ${KEYS.MINTUES}`;
  }
};

/**
 * @description Function to format a time string
 * @param {String} time ISO 8601 time string
 * @param {Object} options Formatting options: showSeconds (boolean), hour12 (boolean)
 * @returns {String} Formatted time string in hh:mm:ss format (if showSeconds is true)
 */
export const formatTime = (
  time,
  options = { showSeconds: true, hour12: false }
) => {
  const { showSeconds, hour12 } = options;
  const formatString = hour12
    ? `${DATA_FORMAT.HOUR_MONTH_SMALL}${showSeconds ? ":ss" : ""} A`
    : `${DATA_FORMAT.HOUR_MONTH}${showSeconds ? ":ss" : ""}`;

  return moment(time).format(formatString);
};

/**
 * @description Function to generate a tooltip message for meeting events
 * @param {Object} params Tooltip parameters: isStart (boolean), type (string), start (string), end (string)
 * @returns {String} Formatted tooltip message
 */
export const getTooltipMessage = ({ isStart = true, type, start, end }) => {
  if (type === "timelog") {
    return isStart
      ? `Participant joined the meeting on ${moment(start).format(
          DATA_FORMAT.DATE_MONTH_YEAR
        )} at ${formatTime(start)}`
      : `Participant left the meeting on ${moment(end).format(
          DATA_FORMAT.DATE_MONTH_YEAR
        )} at ${formatTime(end)}`;
  }

  const eventDuration = end
    ? `${moment(end).diff(moment(start), "minutes")} mins`
    : "N/A";

  return isStart
    ? `Event started on ${moment(start).format(
        DATA_FORMAT.DATE_MONTH_YEAR
      )} at ${formatTime(start, { showSeconds: true, hour12: true })}`
    : `Event ended on ${moment(end).format(
        DATA_FORMAT.DATE_MONTH_YEAR
      )} at ${formatTime(end, {
        showSeconds: true,
        hour12: true,
      })} (Duration: ${eventDuration})`;
};

export const formatDate = (date) => {
  const formattedDate = moment(date).format(DATA_FORMAT.DATE_MONTH_YEAR);
  const formattedTime = moment(date).format(DATA_FORMAT.HOUR_MONTH_SECOND);
  return { date: formattedDate, time: formattedTime };
};
