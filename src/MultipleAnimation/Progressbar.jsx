import React, { useEffect, useState } from "react";

const Progressbar = ({ onAnimate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(timer);
          onAnimate();
          return 100;
        }
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onAnimate]);

  return (
    <>
      <div className="w-full bg-slate-900">
        <div
          className="h-2 bg-green-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </>
  );
};

export default Progressbar;
