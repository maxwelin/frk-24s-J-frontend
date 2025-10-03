import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";
// import { useApiContext } from "../hooks/useApiContext";

export default function HomePage() {
  const {
    playerTurn,
    openModal,
    toggleModal,
    placeMove,
    gameState,
    startGame,
  } = useMainContext();
  const { boardTiles } = useConfigContext();
  // const { addGame } = useApiContext();

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Menu
        className={true}
        openModal={openModal}
        toggleModal={toggleModal}
        gameState={gameState}
        startGame={startGame}
      />
      <Board
        boardTiles={boardTiles}
        playerTurn={playerTurn}
        placeMove={placeMove}
        gameState={gameState}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={toggleModal} />
      {/*ignorera denna knapp, det är för att testa anrop mot backend :) */}
      {/* <button onClick={addGame}>Test</button> */}
    </div>
  );
}
