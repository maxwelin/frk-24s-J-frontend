import { createContext, useState } from "react";
const BASE = "http://localhost:3001/api/gomoku";
const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const handleCellClick = () => {
    setPlayerTurn((turn) => (turn === 1 ? 2 : 1));
  };

  return (
    <MainContext.Provider value={{ 
      handleCellClick, 
      playerTurn,
      openModal,
      toggleModal
      }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
