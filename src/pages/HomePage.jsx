import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
  const { handleCellClick, playerTurn, openModal, toggleModal } = useMainContext();

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
      <Menu className={true} openModal={openModal} toggleModal={toggleModal} />
      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={toggleModal}/>
    </div>
  );
}
