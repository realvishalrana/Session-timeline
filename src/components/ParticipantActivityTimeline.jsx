import React from "react";
import TimeLineEvent from "./TimeLineEvent";
import MeetingDetails from "./MeetingDetails";

const ParticipantActivityTimeline = ({
  participant,
  isTimelineVisible,
  start,
  end,
}) => {
  const { timelog = [], events =[] } = participant || {};

  return (
    <div className="pb-3 border-b border-gray-600 bg-dark-gray">
      <MeetingDetails participant={participant} />
      {isTimelineVisible ? (
        <div className="relative mx-14 my-3">
          <div className="flex space-x-1">
            {timelog.length > 0 ? (
              timelog.map((log, index) => (
                <TimeLineEvent
                  key={`timelog-${index}`}
                  start={log.start}
                  end={log.end}
                  type="timelog"
                  priority={1}
                  sessionData={{ start, end }}
                />
              ))
            ) : (
              <div className="flex w-full">No Time Line Data Avaiable</div>
            )}

            {Object.keys(events).length > 0 ? (
              Object.keys(events)?.map((eventType) =>
                events[eventType].map((eventData, index) => (
                  <TimeLineEvent
                    key={`event-${index}`}
                    start={eventData.start}
                    end={eventData.end}
                    type={eventType}
                    errorMessage={eventData?.message}
                    priority={eventType === "errors" ? 3 : 2}
                    sessionData={{ start, end }}
                  />
                ))
              )
            ) : (
              <div className="flex w-full">No Events Data Avaiable</div>
            )}
          </div>
        </div>
      ) : (
        <div className="relative h-10 flex items-center justify-center mx-14 my-3 bg-gray-700 rounded-md border border-gray-600 animate-fade-in">
          <span className="text-gray-400 text-sm">
            Data is currently hidden
          </span>
        </div>
      )}
    </div>
  );
};

export default ParticipantActivityTimeline;
