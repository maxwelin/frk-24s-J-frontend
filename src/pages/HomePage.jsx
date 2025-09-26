import { Board } from "gumoku-component";

import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";

export default function HomePage() {

  return (
    <div>
      <Board
        gameConfig={gameConfig}
      />
    </div>
  );
}
