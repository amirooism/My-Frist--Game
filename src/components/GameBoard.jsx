import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, Player } = turn;
    const { row , col } = square;
    gameBoard[row][col] = Player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handelSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameboard) => {
  //     const updatedBoard = [
  //       ...prevGameboard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
