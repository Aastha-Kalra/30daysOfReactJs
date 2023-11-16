import React, { useEffect, useState } from "react";

const BhartClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-black h-screen text-white flex justify-center items-center flex-col gap-5">
      <div className="text-5xl font-bold">Bharat Clock</div>
      <h1 className="text-4xl">the time is {time}</h1>
    </div>
  );
};

export default BhartClock;
