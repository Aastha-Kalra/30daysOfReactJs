import React, { useState } from "react";
import Board from "./Board";

const TicTacToe = () => {

  const Win_CONDITIONS = [
    [0,1,2],
    [0,3,6],
    [0,4,8],   
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  ]



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
    checkWin(updatedBoard)
    setXplaying(!xplaying);
  };
  const checkWin=(board)=>{
    for(let i=0;i<Win_CONDITIONS.length;i++){
      const [x,y,z] = Win_CONDITIONS[i];
      if(board[x] && board[x]===board[y] && board[y]===board[z]){
        console.log(board[x])
        return board[x]
       
      }
    }

  }

  return (
    <div className="text-white px-44 flex flex-col justify-center items-center">
      <div className="text-white">TicTacToe</div>
      <Board board={board} onClick={handleClick} />
    </div>
  );
};

export default TicTacToe;
