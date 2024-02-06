import React, { useReducer } from "react";

let initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-3xl px-44">
      <div>UseReducer</div>

      <div>
      The useReducer Hook is similar to the useState Hook.
<br />
It allows for custom state logic.
<br />
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
<br />
The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
<br />
The useReducer Hook returns the current stateand a dispatchmethod.
      </div>
    <div>
    {count}
    </div>
      <button onClick={() => dispatch("Increment")} className="bg-yellow-500 px-4 py-2 my-3 text-teal-900">Increment</button>
      <button onClick={() => dispatch("Decrement")} className="bg-yellow-500 px-4 py-2 my-3 text-teal-900">Decrement</button>
    </div>
  );
};

export default UseReducer;
