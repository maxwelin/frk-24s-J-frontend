import { Board } from "gumoku-component";

import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";
import { useGame } from "../hooks/useGame";

export default function HomePage() {
  const { games } = useGame();
  const { handleCellClick, playerTurn } = useMainContext();

  return (
    <div>
      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
      />
    </div>
  );
}
