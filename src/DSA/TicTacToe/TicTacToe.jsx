import React, { useState } from "react";
import Board from "./Board";
import ScoreBoard from "./ScoreBoard";
import PlayAgain from "./PlayAgain";

const TicTacToe = () => {
  const Win_CONDITIONS = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplaying, setXplaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);
  const handleClick = (boxId) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxId) {
        return xplaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    const winner = checkWin(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    console.log(scores);
    setXplaying(!xplaying);
  };
  const checkWin = (board) => {
    for (let i = 0; i < Win_CONDITIONS.length; i++) {
      const [x, y, z] = Win_CONDITIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        setWinner(board[x]);
        return board[x];
      }
    }
  };

  const playAgain = () => {
    setWinner(false);
    setGameOver(false); 
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="text-white px-44 flex flex-col justify-center items-center">
      <div className="text-white">TicTacToe</div>
      <ScoreBoard scores={scores} xplaying={xplaying} />
      {winner ? (
        <>
          <div className="text-5xl bg-gradient-to-r from-orange-500 to-green-500  bg-clip-text text-transparent font-bold my-10">
            Winner is {winner}
          </div>
          <PlayAgain playAgain={playAgain} />
        </>
      ) : (
        <Board board={board} onClick={handleClick} />
        
      )}
    </div>
  );
};

export default TicTacToe;
