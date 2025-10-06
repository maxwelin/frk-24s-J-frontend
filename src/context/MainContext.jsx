import { createContext, useState } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [players, setPlayers] = useState({
    1: { name: "Black" },
    2: { name: "White" },
  });
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameState, setGameState] = useState("menu");
  const [openModal, setOpenModal] = useState(true);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const closeMenu = () => setOpenModal(false);
  const openMenu = () => setOpenModal(true);

  function startGame({ p1, p2 }) {
    const name1 = (p1 || "").trim() || "Black";
    const name2 = (p2 || "").trim() || "White";
    setPlayers({ 1: { name: name1 }, 2: { name: name2 } });
    setPlayerTurn(1);
    setGameState("playing");
    closeMenu();
    alert("GAME HAS STARTED");
  }

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
        openMenu,
        closeMenu,
        setPlayerTurn,
        gameState,
        startGame,
        players,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
