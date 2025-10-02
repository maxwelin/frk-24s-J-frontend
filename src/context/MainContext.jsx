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
    setPlayerTurn((turn) => (turn === 1 ? 2 : 1));
    console.log("Clicked cell:", id);
    console.log(playerTurn);
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
