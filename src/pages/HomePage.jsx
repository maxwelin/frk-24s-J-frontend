import { Board } from "gumoku-component";

import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { handleCellClick, playerTurn } = useMainContext();

  return (
    <div>
      <Board
        boardTiles={80}
        gameStarted={true}
        playerTurn={playerTurn}
        largeMenu={false}
        gameEnded={false}
        handleCellClick={handleCellClick}
      />
    </div>
  );
}
