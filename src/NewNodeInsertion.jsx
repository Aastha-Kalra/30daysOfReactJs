import React from "react";

const NewNodeInsertion = () => {
  const NewNode = (title) => {
    let html = `<div className="box">${title}</div>`;
    document.querySelector(".container").innerHTML =
      document.querySelector(".container").innerHTML + html;
  };
  
  return (
    <div className="container">
      <button onClick={() => NewNode("hello")}>Click</button>
    </div>
  );
};

export default NewNodeInsertion;
