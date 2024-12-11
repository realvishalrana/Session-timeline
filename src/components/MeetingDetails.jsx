import { calculateTotalMinutes, formatDate } from "../utils/helper";
import ChevronRight from "../assets/chevronRight";

const MeetingDetails = ({ participant }) => {
  const { timelog = [], name, participantId } = participant || {};

  const totalDuration = calculateTotalMinutes(timelog);

  const { date, time } = formatDate(timelog[0]?.start);

  return (
    <div className="relative p-4 ml-6 mt-3 flex items-center justify-between">
      {participant ? (
        <>
          <div className="bg-dark-gray px-[10px]">
            <div className="text-white font-semibold text-base">
              {name} ({participantId})
            </div>
            <div className="text-xs font-medium text-gray-300 my-1">
              {date}, {time} | Duration {Math.round(totalDuration)} Mins
            </div>
          </div>
          <button className="text-primary-blue text-sm flex items-center gap-2 relative group">
            View Details
            <ChevronRight />
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-blue transform scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:translate-y-1"></span>
          </button>
        </>
      ) : (
        <p>No Participant</p>
      )}
    </div>
  );
};

export default MeetingDetails;
