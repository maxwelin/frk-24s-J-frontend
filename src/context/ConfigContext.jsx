import { createContext  } from "react";

const ConfigContext = createContext(null);

function ConfigProvider({ children }) {

const boardTiles = 300

  return (
    <ConfigContext.Provider
      value={{
       boardTiles
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigContext, ConfigProvider };
