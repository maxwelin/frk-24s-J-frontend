import { Board, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { handleCellClick, playerTurn } = useMainContext();

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Menu className={true} />
      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
      />
    </div>
  );
}
