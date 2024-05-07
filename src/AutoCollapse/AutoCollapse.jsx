import React, { useState, useEffect } from "react";
import data from "./text";

const AutoCollapse = () => {
  const [text] = useState(data);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    if (progress === 100) {
      if (activeSlide === 2) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [progress, activeSlide]);



  return (
    <div className="text-white flex flex-col gap-5 justify-center items-center">
      <div className="font-extrabold text-4xl text-sky-600">AutoCollapse</div>
      <div className="w-full border-2 border-sky-500 bg-sky-400">
        <input
          type="range"
          name=""
          className="w-full border-2 border-sky-500 bg-sky-400"
          value={progress}
          id=""
        />
        {text.map((d, index) => (
            <div key={index} className=" w-96 p-5">
              <div
                className="flex justify-between items-center bg-white/70 text-yellow-400"
                onClick={() => handleToggleSlide(index)}
              >
                <div
                  className={`flex flex-col gap-5 p-4 justify-center w-full ${
                    activeSlide === index ? "bg-black/90" : "bg-white"
                  }`}
                >
                  <span>{d.h1}</span>
                  {activeSlide === index && <span>{d.p1}</span>}
                </div>
                <button>{activeSlide === index ? "⬆️" : `⬇️`}</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AutoCollapse;
