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
    </div>
  );
};

export default DotAnimation;
