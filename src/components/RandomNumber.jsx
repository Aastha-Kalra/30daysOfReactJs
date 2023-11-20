import React, { useState } from "react";
const RandomNumber = () => {
  const [number, setNumber] = useState(0);
  const getRandomNum = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    setNumber(random);
  };
  return (
    <div className="text-white flex justify-center items-center flex-col gap-24 text-4xl py-10">
      <div>Random number Generator</div>
     <div>Random number is : {number}</div>
      <div>
        <button className="bg-indigo-950 px-10 py-4" onClick={getRandomNum}>
          Get random Number
        </button>
      </div>
    </div>
  );
};

export default RandomNumber;