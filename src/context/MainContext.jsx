import { createContext, useState } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const handleCellClick = (id) => {
    setPlayerTurn((turn) => {
      if (turn !== 1 && turn !== 2) {
        console.error("invalid player turn value", turn);
        return 1;
      }
      return turn === 1 ? 2 : 1;
    });
    console.log("Clicked cell:", id);
  };

  return (
    <MainContext.Provider
      value={{
        handleCellClick,
        playerTurn,
        openModal,
        toggleModal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
