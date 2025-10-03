import { createContext  } from "react";

const ApiContext = createContext(null);

function ApiProvider({ children }) {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL

  const addGame = async () => {
    console.log(import.meta.env.VITE_API_BASE_URL + import.meta.env.VITE_CREATE_GAME_ENDPOINT)
    const res = await fetch(`${BASE_URL}${import.meta.env.VITE_CREATE_GAME_ENDPOINT}`)
    const data = await res.json()
    console.log(data)
  }

  const createPlayer = async (name) => {
    const res = await fetch(`${BASE_URL}${import.meta.env.VITE_CREATE_PLAYER_ENDPOINT}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name
      })
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <ApiContext.Provider
      value={{
        addGame,
        createPlayer
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };
