import { createContext  } from "react";

const ConfigContext = createContext(null);

function ConfigProvider({ children }) {

  const rows = 15
  const cols = 20
  const boardTiles = rows * cols

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
