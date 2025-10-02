import { createContext, useState } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameState, setGameState] = useState("playing");
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const placeMove = (cellIndex) => {
    setPlayerTurn((t) => (t === 1 ? 2 : 1));
    console.log("Brick placed on cell:", cellIndex);
  };

  return (
    <MainContext.Provider
      value={{
        placeMove,
        playerTurn,
        openModal,
        toggleModal,
        setPlayerTurn,
        gameState,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
