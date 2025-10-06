import { Board, Button, Menu, PlayerForm } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";

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
      >
        <PlayerForm
          toggleModal={toggleModal}
          startGame={startGame}
          gameState={gameState}
        >
          {gameState === "menu" && (
            <Button type="submit" text="Play game" style={"primary"}>
              Play Game
            </Button>
          )}
          {gameState === "playing" && (
            <>
              <Button text="quit" icon="▶|" />
              <Button text="restart" icon="⟳" />
              <Button
                text="resume"
                icon="▶"
                style="primary"
                onClick={toggleModal}
              />{" "}
            </>
          )}
        </PlayerForm>
      </Menu>
      <Board
        boardRows={rows}
        boardCols={cols}
        playerTurn={playerTurn}
        placeMove={placeMove}
        gameState={gameState}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={openMenu} />
    </div>
  );
}
