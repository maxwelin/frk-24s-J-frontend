import {
  Board,
  Button,
  Menu,
  PlayerForm,
  CustomPointer,
  VictoryScreen,
} from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";

import { useState } from "react";
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
    players,
    playAgain,
    resetBoard,
    showForm,
    setShowForm,
  } = useMainContext();

  const { rows, cols } = useConfigContext();
  const { winner } = useApiContext();

  const [hidePointer, setHidePointer] = useState(false);

  return (
    <div>
      {gameState === "playing" && !openModal && !hidePointer && (
        <CustomPointer playerTurn={playerTurn} />
      )}

      {winner && (
        <>
          <VictoryScreen
            player={winner}
            onEnter={setHidePointer}
            playAgain={playAgain}
          />
        </>
      )}

      <BackgroundBanner
        text="GOMOKU"
        playerTurn={gameState === "playing" ? playerTurn : undefined}
        useTurnText={gameState === "playing"}
        players={players}
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
          players={players}
          showForm={showForm}
          setShowForm={setShowForm}
        >
          {gameState === "menu" && (
            <Button type="submit" icon="▶" text="Play game" style={"primary"}>
              Play Game
            </Button>
          )}
          {gameState === "playing" && (
            <>
              <Button text="quit" icon="▶|" />
              <Button text="restart" icon="⟳" />
              <Button
                type="button"
                text="resume"
                icon="▶"
                style="primary"
                handleClick={toggleModal}
              />{" "}
            </>
          )}
        </PlayerForm>
      </Menu>
      {!resetBoard && (
        <Board
          boardRows={rows}
          boardCols={cols}
          playerTurn={playerTurn}
          placeMove={placeMove}
          gameState={gameState}
        />
      )}
      {!winner && (
        <div
          onPointerEnter={() => setHidePointer(true)}
          onPointerLeave={() => setHidePointer(false)}
        >
          <Button
            draggable={true}
            icon="☰"
            text="menu"
            handleClick={openMenu}
          />
        </div>
      )}
    </div>
  );
}
