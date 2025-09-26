import { createContext, useState } from "react";

const MainContext = createContext(null);

function MainProvider({ children }) {
  const [playerTurn, setPlayerTurn] = useState(1);

  const handleCellClick = () => {
    setPlayerTurn((turn) => (turn === 1 ? 2 : 1));
  };

  return (
    <MainContext.Provider value={{ handleCellClick, playerTurn }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
