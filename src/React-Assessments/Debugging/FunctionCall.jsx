import React, { useState, useCallback } from "react";

const functionsCounter = new Set();

const howManyFunctionCalled = (increment, decrement, incrementOtherCounter) => {
  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export default function UnnecessaryFunctionCall() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter((prevOtherCounter) => prevOtherCounter + 1);
  }, []);

  // This effect will run after each render and log the number of function calls
  React.useEffect(() => {
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
  }, [increment, decrement, incrementOtherCounter]);

  return (
    <div className="App">
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>Counter Value: {counter}</h3>
      <h3>Other Counter Value: {otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  );
}
