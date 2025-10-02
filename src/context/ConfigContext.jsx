import { createContext  } from "react";

const ConfigContext = createContext(null);

function ConfigProvider({ children }) {

  const gameConfig = {
  boardTiles: 300,
  gameStarted: false,
  largeMenu: true,
  gameEnded: false,
  className: "",
};

  return (
    <ConfigContext.Provider
      value={{
       gameConfig
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigContext, ConfigProvider };
