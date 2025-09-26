import { Board } from "gumoku-component";
import { useState } from "react";
import "./HomePage.css";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { handleCellClick } = useMainContext();

  return (
    <div onClick={handleCellClick}>
      <Board
        boardTiles={80}
        gameStarted={true}
        playerOrder={"Player 1"}
        largeMenu={false}
        gameEnded={false}
        handleCellClick={handleCellClick}
      />
    </div>
  );
}
