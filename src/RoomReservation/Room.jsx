import React from "react";

const Room = React.memo(() => {
  return <div className="w-full h-full p-14">
    <div className="w-44 h-44 bg-slate-900 p-4 rounded-sm flex flex-col justify-center items-center">
        <p>R</p>
        <p>Cost: </p>
        <p>Status:</p>
    </div>
  </div>;
});

export default Room;
