import { Board, Button, Menu } from "@masewe/components";
import { BackgroundBanner } from "@masewe/components";
import "./HomePage.css";
import { gameConfig } from "../config/gameConfig";
import { useMainContext } from "../hooks/useMainContext";

export default function HomePage() {
<<<<<<< HEAD
  const { handleCellClick, playerTurn, openModal, toggleModal } = useMainContext();
=======
  const { brickColor, handleCellClick, playerTurn, openModal, closeModal } =
    useMainContext();
>>>>>>> e8d7b6d (passing props from handleCellClick in maincontext)

  return (
    <div>
      <BackgroundBanner playerTurn={playerTurn} useTurnText />
<<<<<<< HEAD
      <Menu className={true} openModal={openModal} toggleModal={toggleModal} />
=======
      {/* <Menu className={true} openModal={openModal} closeModal={closeModal} /> */}
>>>>>>> e8d7b6d (passing props from handleCellClick in maincontext)
      <Board
        {...gameConfig}
        handleCellClick={handleCellClick}
        playerTurn={playerTurn}
        brickColor={brickColor}
      />
      <Button draggable={true} icon="☰" text="menu" handleClick={toggleModal}/>
    </div>
  );
}
