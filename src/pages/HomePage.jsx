import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";
{
  /* ignorera dessa imports, det är för att testa anrop mot backend :) */
}
// import { useApiContext } from "../hooks/useApiContext";

export default function HomePage() {
<<<<<<< HEAD
  const {
    playerTurn,
    openModal,
    openMenu,
    placeMove,
    gameState,
    startGame,
    toggleModal,
  } = useMainContext();
  const { boardTiles } = useConfigContext();
=======
  const { playerTurn, openModal, openMenu, placeMove, gameState, startGame, toggleModal } =
    useMainContext();
  const { boardTiles, rows, cols } = useConfigContext();
>>>>>>> 32c4b59 (added playPiece func in apiContext. Rows and Cols injected in homePage.jsx and passed to board as props)

  {
    /* ignorera dessa, det är för att testa anrop mot backend :) */
  }
  // const { addGame, createPlayer } = useApiContext();

  // const onCreate = () => {
  //   createPlayer("hej")
  // }

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
        boardTiles={boardTiles}
        boardRows={rows}
        boardCols={cols}
        playerTurn={playerTurn}
        placeMove={placeMove}
        gameState={gameState}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={openMenu} />
      {/* ignorera dessa knappar, det är för att testa anrop mot backend :) */}
      {/* <button onClick={addGame}>create game</button>
      <button onClick={onCreate}>create player</button> */}
    </div>
  );
}
