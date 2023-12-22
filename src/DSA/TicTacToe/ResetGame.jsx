import React from "react";

const ResetGame = ({ resetGame }) => {
  return (
    <div>
      <button
        className=" bg-gradient-to-r from-orange-500 to-green-500 px-10 py-4 font-bold  rounded-2xl mt-10"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
};

export default ResetGame;
