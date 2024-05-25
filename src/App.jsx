import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameturns] = useState([]);
  const [activePlyer, setActivePlayer] = useState("X");
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameturns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].Player === "X") {
        currentPlayer === "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, Player: activePlyer },
        ...prevTurns,
      ];
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlyer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlyer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlyer}
        />
      </div>
      <Log />
    </main>
  );
}
export default App;
