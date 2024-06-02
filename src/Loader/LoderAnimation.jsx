// In this Frontend coding challenge, the candidate needs to build a custom loading animation i.e. a Loader component that can be used anywhere inside a React web-app.

import React from "react";
import './Loader.css'

const LoderAnimation = () => {
  return (
    <div className="loader">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default LoderAnimation;
