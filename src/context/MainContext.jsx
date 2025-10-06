import { createContext, useState } from "react";
import { useApiContext } from '../hooks/useApiContext'

const MainContext = createContext(null);

function MainProvider({ children }) {

  const { playPiece, createGame, createPlayer, joinGame } = useApiContext()
  
  const [players, setPlayers] = useState({
    1: { name: "Black",
         id: 0,
     },
    2: { name: "White",
         id: 1,
     },
  });
  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameState, setGameState] = useState("menu");
  const [openModal, setOpenModal] = useState(true);
  const [gameId, setGameId] = useState(true);

  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const closeMenu = () => setOpenModal(false);
  const openMenu = () => setOpenModal(true);

  const getPlayerId = (i) => {
    return players[i].id
  }
  
  async function startGame({ p1, p2 }) {
    const gameId = await createGame()
    setGameId(gameId)

    const name1 = (p1 || "").trim() || "Black";
    const name2 = (p2 || "").trim() || "White";
    const player1Id = await createPlayer(name1)
    const player2Id = await createPlayer(name2)
    setPlayers({ 1: { name: name1, id: player1Id }, 2: { name: name2, id: player2Id } });

    await joinGame(gameId, player1Id)
    await joinGame(gameId, player2Id)

    setPlayerTurn(1);
    setGameState("playing");

    closeMenu();
    alert("GAME HAS STARTED");
  }

  const placeMove = async (cellIndex) => {
    setPlayerTurn((t) => (t === 1 ? 2 : 1));
    const playerId = getPlayerId(playerTurn)
    await playPiece(gameId, playerId, cellIndex)
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
