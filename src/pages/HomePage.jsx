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
  const { playerTurn, openModal, openMenu, placeMove, gameState, startGame } =
    useMainContext();
  const { boardTiles } = useConfigContext();

  {
    /* ignorera dessa, det är för att testa anrop mot backend :) */
  }
  // const { addGame, createPlayer } = useApiContext();

  // const onCreate = () => {
  //   createPlayer("hej")
  // }

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Menu
        className={true}
        openModal={openModal}
        gameState={gameState}
        startGame={startGame}
      />
      <Board
        boardTiles={boardTiles}
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
