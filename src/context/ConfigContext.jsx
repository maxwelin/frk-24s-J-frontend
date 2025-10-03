import { createContext  } from "react";

const ConfigContext = createContext(null);

function ConfigProvider({ children }) {

const boardTiles = 300
const rows = 15
const cols = 20

  return (
    <ConfigContext.Provider
      value={{
       boardTiles,
       rows,
       cols,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigContext, ConfigProvider };
