import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";
import { useApiContext } from "../hooks/useApiContext";


export default function HomePage() {
  const {
    playerTurn,
    openModal,
    openMenu,
    placeMove,
    gameState,
    startGame,
    toggleModal,
  } = useMainContext();

  const { rows, cols } = useConfigContext();
  const { gameOnDonkeyKong } = useApiContext()

  const handleClick = () => {
    gameOnDonkeyKong("sean", "banan")
  }

  return (
    <div>
      <BackgroundBanner
        text="GOMOKU"
        playerTurn={gameState === "playing" ? playerTurn : undefined}
        useTurnText={gameState === "playing"}
      />
      <Menu
        className={true}
        openModal={openModal}
        gameState={gameState}
        startGame={startGame}
        toggleModal={toggleModal}
      />
      <Board
        boardRows={rows}
        boardCols={cols}
        playerTurn={playerTurn}
        placeMove={placeMove}
        gameState={gameState}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={openMenu} />
      <button onClick={handleClick}>test</button>
    </div>
  );
}
