import React, { useEffect, useState } from "react";

const useWindow = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, [size]);
  return size;
};

const UseWindowDimensions = () => {
  const resize = useWindow();
  return (
    <div className="flex flex-col justify-center items-center text-2xl">
      <div>UseWindowDimensions Hook </div>
      <p>
        Create a custom hook to track the dimensions of users window while
        resizing.
      </p>
      <p>width : {resize.width}</p>
      <p>Height : {resize.height}</p>
    </div>
  );
};

export default UseWindowDimensions;
