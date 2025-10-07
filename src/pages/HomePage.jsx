import {
  Board,
  Button,
  Menu,
  PlayerForm,
  CustomPointer,
  VictoryScreen,
  Spinner,
} from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";
import { useConfigContext } from "../hooks/useConfigContext";
import { useApiContext } from "../hooks/useApiContext";

import { useState, useEffect } from "react";

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
    resetGame,
  } = useMainContext();

  const { rows, cols } = useConfigContext();
  const { winner } = useApiContext();

  const [hidePointer, setHidePointer] = useState(false);
  const [loading, setLoading] = useState(true); // ← new loading state

  // Show spinner for 1.7 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  // Show spinner while loading
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spinner />
      </div>
    );
  }

  // Original content after spinner
  return (
    <div>
      {gameState === "playing" && !openModal && !hidePointer && (
        <CustomPointer playerTurn={playerTurn} />
      )}

      {winner && (
        <>
          <VictoryScreen player={winner}>
            <>
              <Button type="button" text="Quit" handleClick={resetGame} />
              <Button
                type="button"
                text="Play again?"
                style="primary"
                handleClick={playAgain}
              />
            </>
          </VictoryScreen>
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
              <Button text="quit" icon="▶|" handleClick={resetGame} />
              <Button
                type="button"
                text="restart"
                icon="⟳"
                handleClick={playAgain}
              />
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
