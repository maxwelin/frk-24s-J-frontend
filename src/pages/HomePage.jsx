import { Board } from "gumoku-component";

import "./HomePage.css";

export default function HomePage() {

  return (
    <div>
      <Board
        boardTiles={80}
        gameStarted={true}
        largeMenu={false}
        gameEnded={false}
      />
    </div>
  );
}
