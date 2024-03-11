import React, { useEffect, useState } from "react";

const TimerProgress = () => {
  const [time, setTime] = useState(100);
  const [range, setRange] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
        setRange((prevRange) => prevRange + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [time, range]);

  return (
    <div className="flex flex-col justify-center items-center my-10 gap-5 text-2xl w-full">
      <p>Time Progress</p>
      <div>{time}</div>
      <div className="w-full px-4 bg-slate-700">
        <input
          type="range"
          className="h-2 bg-green-900"
          style={{ width: `${range}%` }}
        />
      </div>
    </div>
  );
};
export default TimerProgress;
