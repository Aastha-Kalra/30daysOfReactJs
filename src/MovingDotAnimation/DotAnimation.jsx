import React, { useState } from "react";
const DotAnimation = () => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      className="relative w-[100vw] h-[100vh]"
      onPointerMove={(e) => {
        setCoordinates({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <div
        className={`w-1 h-1 shadow -top-2 -left-2 shadow-red-500 bg-yellow-500 rounded-full absolute`}
        style={{
          transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default DotAnimation;
