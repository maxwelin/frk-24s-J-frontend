import { Board } from "gumoku-component";

import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";
import { useGame } from "../hooks/useGame";
import { useEffect } from "react";

export default function HomePage() {
  const { games, createGame, creating, findGame } = useGame();
  const { handleCellClick, playerTurn } = useMainContext();

  useEffect(() => {
    if (!Array.isArray(games) || games.length === 0) return;
    (async () => {
      try {
        const game = await findGame("015cdc04-4d22-46f7-8d8e-f1879bb9bf1b");
        console.log("findGame", game);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [games, findGame]);

  return (
    <div>
      <div>
        <button onClick={createGame} disabled={creating}>
          {creating ? "Creating..." : "New Game"}
        </button>
      </div>

      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
      />
    </div>
  );
}
