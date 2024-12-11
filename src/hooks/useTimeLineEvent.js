import moment from "moment";

const useTimeLineEvent = () => {
  const calculateTimelineBounds = (sessionData) => {
    // Use moment.js to get the start and end time in milliseconds
    const timelineStart = moment(sessionData.start).valueOf();
    const timelineEnd = moment(sessionData.end).valueOf();
    return { timelineStart, timelineEnd };
  };

  const calculatePosition = (timelineStart, timelineEnd, start, end) => {
    // Use moment.js to convert start and end to milliseconds
    const eventStart = moment(start).valueOf();
    const eventEnd = end ? moment(end).valueOf() : eventStart;

    // Calculate left position and width percentage
    const left =
      ((eventStart - timelineStart) / (timelineEnd - timelineStart)) * 100;
    const width = end
      ? ((eventEnd - timelineStart) / (timelineEnd - timelineStart)) * 100 -
        left
      : 0.1;

    return { left, width };
  };

  return { calculateTimelineBounds, calculatePosition };
};

export default useTimeLineEvent;
