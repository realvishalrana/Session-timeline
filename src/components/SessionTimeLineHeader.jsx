import React from "react";
import ClipboardIcon from "../assets/clipboard";
import ToggleSwitch from "../widgets/ToggleSwitch";

const SessionTimeLineHeader = ({
  isTimelineVisible,
  onToggle,
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 text-sm font-bold border-b border-gray-600">
      <div className="flex justify-between items-center gap-2 sm:mr-4">
        <ClipboardIcon />
        Participants wise Session Timeline
      </div>
      <ToggleSwitch
        id="timelineVisibility"
        label="Show Participant Timeline"
        checked={isTimelineVisible}
        onChange={onToggle}
      />
    </div>
  );
};

export default SessionTimeLineHeader;
