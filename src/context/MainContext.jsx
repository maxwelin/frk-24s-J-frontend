import { createContext, useEffect, useState, useMemo } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);

  const currentColor = playerTurn === 1 ? "black" : "white";

  const handleCellClick = () => {
    setPlayerTurn((turn) => (turn === 1 ? 2 : 1));
  };

  return (
    <MainContext.Provider value={{ handleCellClick, currentColor }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
