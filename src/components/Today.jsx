import { useEffect, useState } from 'react';

export default function Today() {
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const getAll = () => {
      const now = new Date();
      
      // Format day in full text format (e.g., 'Monday')
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      
      // Format date as 'Month DD, YYYY' (e.g., 'January 2, 2021')
      const formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      
      // Format time in 'HH:MM:SS' format
      const formattedTime = now.toLocaleTimeString();

      setCurrentDay(dayOfWeek);
      setCurrentDate(formattedDate);
      setCurrentTime(formattedTime);
    };

    // Call getAll initially
    getAll();

    // Update time every second
    const intervalId = setInterval(getAll, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1>Simple Clock !!</h1>
      <div id="day"> 'Day: {currentDay}'</div>
      <div id="date">'Date: {currentDate}'</div>
      <div id="time">'Time: {currentTime}'</div>
    </>
  );
}
