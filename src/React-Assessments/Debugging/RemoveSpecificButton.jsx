import React, { useState } from "react";

function Parent() {
  const [children, setChildren] = useState([3, 1, 2]);

  function removeChild(removedId) {
    setChildren(children.filter((id) => id !== removedId));
  }
  return (
    <div>
      <h2> Hi there.... </h2>
      {children.map((id) => (
        <Child key={id} id={id} remove={removeChild} />
      ))}
    </div>
  );
}

function Child({ remove, id }) {
  return (
    <div>
      <button className="bg-yellow-700 m-4 p-4 " onClick={()=>remove(id)}>I'm the child {id}. Click to remove me!</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App flex flex-col justify-center items-center ">
      <Parent />
    </div>
  );
}
