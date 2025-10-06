import { createContext  } from "react";

const ApiContext = createContext(null);

function ApiProvider({ children }) {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL

  const createGame = async () => {
    try {
      const res = await fetch(`${BASE_URL}${import.meta.env.VITE_CREATE_GAME_ENDPOINT}`)
      const data = await res.json()
      
      if(!res.ok) {
        throw new Error(`Error creating game: ${res.status}`)
      }
      
      console.log(data)
      return data.id

    } catch (error) {
      console.error(error)
    }
  }

  const createPlayer = async (name) => {
    try {
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

      if(!res.ok) {
        throw new Error(`Error creating player: ${res.status}`);
      }
      
      console.log(data)
     
      return data.id

    } catch (error) {
      console.error(error)
    }
  }

  const joinGame = async (gameId, playerId) => {
    try {
      const res = await fetch(`${BASE_URL}${import.meta.env.VITE_JOIN_GAME_ENDPOINT}/${gameId}/${playerId}`)
      const data = await res.json()
      
      if(!res.ok) {
        throw new Error(`Error joining game: ${res.status}`)
      }
      
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
  }
  
  const playPiece = async (gameId, playerId, piecePosition) => {
    try {
      const res = await fetch(`${BASE_URL}${import.meta.env.VITE_PLAY_ENDPOINT}/${gameId}/${playerId}/${piecePosition.col}/${piecePosition.row}`)
      const data = await res.json()
      
      if(!res.ok) {
        throw new Error(`Error placing piece: ${res.status}`)
      }
      
      console.log(data)
      
    } catch (error) {
      console.error(error)
    }
  }

  const gameOnDonkeyKong = async (player1Name, player2Name) => {
    const p1 = await createPlayer(player1Name)
    console.log("player one id: ", p1)
    const p2 = await createPlayer(player2Name)
    console.log("player two id: ", p2)
    const gameId = await createGame()
    console.log("game id: ", gameId)
    await joinGame(gameId, p1)
    await joinGame(gameId, p2)
    return gameId
  }

  return (
    <ApiContext.Provider
      value={{
        createGame,
        createPlayer,
        joinGame,
        playPiece,
        gameOnDonkeyKong
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export { ApiContext, ApiProvider };
