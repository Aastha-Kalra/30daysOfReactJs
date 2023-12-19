import React, { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplaying, setXplaying] = useState(true);

  const handleClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxId) {
        return xplaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setXplaying(!xplaying);
  };

  return (
    <div className="text-white px-44 flex flex-col justify-center items-center">
      <div className="text-white">TicTacToe</div>
      <Board board={board} onClick={handleClick} />
    </div>
  );
};

export default TicTacToe;
