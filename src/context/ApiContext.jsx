import { createContext  } from "react";

const ApiContext = createContext(null);

function ApiProvider({ children }) {

  const addGame = async () => {
    console.log(import.meta.env.VITE_API_BASE_URL)
    console.log("hej")
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/games/add`)
    const data = await res.json()
    console.log(data)
  }

  return (
    <ApiContext.Provider
      value={{
        addGame
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };
