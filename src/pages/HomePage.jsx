import { Board } from "gumoku-component";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
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
