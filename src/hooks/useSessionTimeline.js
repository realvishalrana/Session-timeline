import { useState, useEffect } from "react";
import { getTimelineData } from "../utils";

const useSessionTimeLine = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [isTimelineVisible, setIsTimelineVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleParticipantTimeline = () => {
    setIsTimelineVisible(!isTimelineVisible);
  };

  useEffect(() => {
    // Simulate a loading delay with setTimeout
    const timeoutId = setTimeout(() => {
      const data = getTimelineData(); // Fetch the data
      setTimelineData(data); // Set the fetched data
      setLoading(false); // Set loading to false after data is fetched
    }, 1000); // Simulating a 1-second delay (you can adjust this time)

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  return { timelineData, isTimelineVisible, toggleParticipantTimeline,loading };
};

export default useSessionTimeLine;
