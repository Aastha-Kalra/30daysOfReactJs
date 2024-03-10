import React, { useState, useEffect } from "react";
import Progressbar from "./Progressbar";

const MainProgress = () => {
  const [queue, setQueue] = useState([]);
  const [currentProgressIndex, setCurrentProgressIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const addBar = () => {
    setQueue((prevQueue) => [...prevQueue, Date.now()]);
  };

  const handleAnimation = () => {
    setCurrentProgressIndex((prevIndex) => {
      if (prevIndex !== null && prevIndex < queue.length - 1) {
        return prevIndex + 1;
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    if (queue.length > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentProgressIndex(0);
    }
  }, [queue, isAnimating]);

  useEffect(() => {
    let interval;
    if (currentProgressIndex !== null) {
      interval = setInterval(() => {
        handleAnimation();
      }, 3000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentProgressIndex]);

  useEffect(() => {
    if (currentProgressIndex === null) {
      setIsAnimating(false);
    }
  }, [currentProgressIndex]);

  return (
    <div className="flex flex-col justify-center items-center text-3xl gap-4 my-4">
      MainProgress
      <button className="bg-yellow-200 px-4 pt-2" onClick={addBar}>
        ADD
      </button>
      {queue.map((timestamp, index) => (
        <Progressbar
          key={timestamp}
          onAnimate={handleAnimation}
          isVisible={index === currentProgressIndex}
        />
      ))}
    </div>
  );
};

export default MainProgress;
