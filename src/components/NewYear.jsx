import React, { useEffect, useState } from "react";
const calculateTimeRemaining = () => {
  const nowThisYear = new Date();
  const nextYear = new Date(nowThisYear.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
  const timeRemaining = nextYear - nowThisYear;
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  return { seconds, days, hours, minutes };
};
const NewYear = () => {
  const [time, setTime] = useState(calculateTimeRemaining());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="text-pink-500 h-screen flex justify-center items-center flex-col gap-10 text-4xl py-10">
      <div className="text-purple-500 font-extrabold text-7xl animate-bounce px-5">
        Happy New Year's Countdown : 2024
      </div>
      <div className=" gap-10 justify-center items-center my-5 grid md:grid-cols-4 grid-cols-2 px-5">
        <div>
          <h1 className="text-sky-500 font-bold px-8 text-center animate-pulse">
            {time.days}
          </h1>
          <h1 className="bg-indigo-900 px-5 py-5 rounded-md mt-3">Days</h1>
        </div>
        <div>
          <h1 className="text-sky-500 font-bold px-8 text-center animate-pulse">
            {time.hours}
          </h1>
          <h1 className="bg-indigo-900 px-5 py-5 rounded-md mt-3">Hours</h1>
        </div>
        <div>
          <h1 className="text-sky-500 font-bold px-8 text-center animate-pulse">
            {time.minutes}
          </h1>
          <h1 className="bg-indigo-900 px-5 py-5 rounded-md mt-3">Minutes</h1>
        </div>
        <div>
          <h1 className="text-sky-500 font-bold px-8 text-center animate-ping">
            {time.seconds}
          </h1>
          <h1 className="bg-indigo-900 px-5 py-5 rounded-md mt-3">Seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default NewYear;
