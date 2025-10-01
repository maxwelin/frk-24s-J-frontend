import { Board } from "gumoku-component";
import { BackgroundBanner } from "gumoku-component";
import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { handleCellClick, playerTurn } = useMainContext();

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
      />
    </div>
  );
}
