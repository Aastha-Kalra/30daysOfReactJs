import React, { memo } from "react";

const Button = ({text,onClick}) => {
    console.log("Child is render",text);
  return (
    <>
      <button className="bg-yellow-700 px-4 py-4 my-4 mx-4" onClick={onClick}>{text} </button>
    </>
  );
};

export default memo(Button);
