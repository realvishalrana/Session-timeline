import Tooltip from "./Tooltip.jsx";
import { eventDetails } from "../utils/constants";
import { getTooltipMessage } from "../utils/helper";
import useTimeLineEvent from "../hooks/useTimeLineEvent.js";

const TimelineEvent = ({
  start,
  end,
  type,
  priority,
  errorMessage,
  sessionData,
}) => {
  const { calculateTimelineBounds, calculatePosition } = useTimeLineEvent();

  const { timelineStart, timelineEnd } = calculateTimelineBounds(sessionData);
  const { left, width } = calculatePosition(
    timelineStart,
    timelineEnd,
    start,
    end
  );
  const { className: eventClass, icons } = eventDetails[type] || {};

  return (
    <div
      className={`absolute top-0 h-1 z-[${priority}]`}
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      {renderEventContent({
        type,
        eventClass,
        icons,
        priority,
        start,
        end,
        errorMessage,
      })}
    </div>
  );
};

const renderEventContent = ({
  type,
  eventClass,
  icons,
  priority,
  start,
  end,
  errorMessage,
}) => {
  if (type === "errors") {
    return (
      <ErrorIcon
        priority={priority}
        eventClass={eventClass}
        icons={icons}
        errorMessage={errorMessage}
      />
    );
  }

  return (
    <>
      <div className={`h-full rounded-md relative ${eventClass}`} />
      <EventIcon
        position="start"
        type={type}
        icons={icons}
        eventClass={eventClass}
        priority={priority}
        start={start}
        end={end}
      />
      {end && (
        <EventIcon
          position="end"
          type={type}
          icons={icons}
          eventClass={eventClass}
          priority={priority}
          start={start}
          end={end}
        />
      )}
    </>
  );
};

const EventIcon = ({
  position,
  type,
  icons,
  eventClass,
  priority,
  start,
  end,
}) => (
  <div
    className={`absolute ${
      position === "start" ? "-left-3" : "-right-3"
    } top-1/2 -translate-y-1/2`}
    style={{ zIndex: priority + 5 }}
  >
    <Tooltip
      message={getTooltipMessage({
        type,
        start,
        end,
        isStart: position === "start",
      })}
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-lg ${eventClass}`}
      >
        {position === "start" ? icons?.start : icons?.end || icons?.start}
      </div>
    </Tooltip>
  </div>
);

const ErrorIcon = ({ priority, eventClass, icons, errorMessage }) => (
  <div
    className="absolute -right-3 top-1/2 -translate-y-1/2"
    style={{ zIndex: priority + 5 }}
  >
    <Tooltip message={`Error: ${errorMessage}`}>
      <div
        className={`w-5 h-5 flex items-center justify-center rounded-lg ${eventClass}`}
      >
        {icons?.start}
      </div>
    </Tooltip>
  </div>
);

export default TimelineEvent;
