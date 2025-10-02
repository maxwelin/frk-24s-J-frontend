import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";

export default function HomePage() {
  const {
    handleCellClick,
    playerTurn,
    openModal,
    toggleModal,
    placeMove,
    gameState,
  } = useMainContext();
  const { gameConfig } = useConfigContext();

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Menu className={true} openModal={openModal} toggleModal={toggleModal} />
      <Board
        {...gameConfig}
        playerTurn={playerTurn}
        placeMove={placeMove}
        gameState={gameState}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={toggleModal} />
    </div>
  );
}
