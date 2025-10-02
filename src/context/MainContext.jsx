import { createContext, useState } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [openModal, setOpenModal] = useState(true);
  const [brickColor, setBrickColor] = useState("");
  const [activeCell, setActiveCell] = useState(false);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const handleCellClick = (id) => {
    const placingColor = playerTurn === 1 ? "black" : "white";
    console.log("Clicked cell:", id, "color:", placingColor);
    setBrickColor(placingColor);
    setPlayerTurn((turn) => (turn === 1 ? 2 : 1));
    setActiveCell(true);
  };

  return (
    <MainContext.Provider
      value={{
        handleCellClick,
        playerTurn,
        openModal,
        toggleModal,
        brickColor,
        activeCell,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
