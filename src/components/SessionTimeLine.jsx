import React from "react";
import { generateTimeStamps } from "../utils/helper";
import ParticipantActivityTimeline from "./ParticipantActivityTimeline";
import useSessionTimeLine from "../hooks/useSessionTimeline";
import HeaderTimeStamp from "./HeaderTimeStamp";
import SessionTimeLineHeader from "./SessionTimeLineHeader";
import TimeStampColumn from "./TimeStampColumn";
import {
  DetailsSkeletonLoader,
  HeaderSkeletonLoader,
} from "../widgets/Loader/SkeletonLoader";

const SessionTimeLine = () => {
  const {
    timelineData,
    isTimelineVisible,
    toggleParticipantTimeline,
    loading,
  } = useSessionTimeLine();

  const { start, end, participantArray = [] } = timelineData || {};
  const timeStamps = generateTimeStamps(start, end);

  return (
    <div className="bg-dark-red text-white min-h-screen">
      {loading ? (
        <>
          <HeaderSkeletonLoader />
          {new Array(5).fill(null).map((_, index) => (
            <DetailsSkeletonLoader key={index} />
          ))}
        </>
      ) : (
        <>
          {!participantArray.length > 0 ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-all duration-500 opacity-100">
              <div className="text-white text-lg sm:text-2xl font-semibold animate-fadeIn">
                No participants available
              </div>
            </div>
          ) : (
            <>
              <SessionTimeLineHeader
                isTimelineVisible={isTimelineVisible}
                onToggle={toggleParticipantTimeline}
              />
              <div className="overflow-x-auto">
                <div className="min-w-[1100px]">
                  <HeaderTimeStamp timeStamps={timeStamps} />
                  <div className="relative border border-gray-light bg-dark-gray">
                    <TimeStampColumn timeStamps={timeStamps} />
                    {participantArray.map((participant) => (
                      <ParticipantActivityTimeline
                        key={participant.participantId}
                        participant={participant}
                        start={start}
                        end={end}
                        isTimelineVisible={isTimelineVisible}
                        loading={loading}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SessionTimeLine;
