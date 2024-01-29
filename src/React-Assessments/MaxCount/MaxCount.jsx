import React, { useEffect, useState } from "react";
const MaxCount = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    setIntervalId(interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [time, intervalId]);

  return (
    <div className="flex flex-col justify-center p-4 items-center gap-4">
      <div>MaxCount</div>
      <div>
        Implement a button and timer that will start from 10 and ends at 0 and
        tracks the counter until the timer expires, and the button should
        disappear once the timer expires.
      </div>

      <div className="text-5xl">No. of clicks until timer expires: {count}</div>
      <div className="text-4xl">Time left: {time}</div>
      {time > 0 && (
        <div>
          <button
            onClick={handleCount}
            className="bg-sky-500 px-4 py-2 text-white my-4"
          >
            Increment
          </button>
        </div>
      )}
    </div>
  );
};

export default MaxCount;
