import React, { useState } from "react";
import usePrevious from "./CustomPreviousHook";

const UsePrevious = () => {
  const [count, setCount] = useState(0);
  // using custom hook
  const preValue = usePrevious(count);
  const handlePrev = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // without custom hook
  // const handlePrev = (prev) => {
  //     setPreValue(count);
  //     setCount(prev + 1);
  // };

  return (
    <>
      <h1>UsePrevious Hook</h1>
      <p>
        So, in this question, you need to create a custom hook usePrevious that
        provides us with the previous value.
      </p>
      <p>Current Value {count}</p>
      <p>Previous Value {preValue}</p>
      <p>
        <button onClick={handlePrev}>Click</button>
      </p>
    </>
  );
};

export default UsePrevious;
