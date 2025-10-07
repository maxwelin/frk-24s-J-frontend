import { createContext, useState, useEffect } from "react";
import { useApiContext } from "../hooks/useApiContext";

const MainContext = createContext(null);
const INITIAL_PLAYERS = {
  1: { name: "Black", id: 0 },
  2: { name: "White", id: 1 },
};
function MainProvider({ children }) {
  const { playPiece, createGame, createPlayer, joinGame, setWinner } =
    useApiContext();

  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  //Could take in get localStorage instead of INITIAL_PLAYERS

  const [playerTurn, setPlayerTurn] = useState(1);
  const [gameState, setGameState] = useState("menu");
  const [openModal, setOpenModal] = useState(true);
  const [gameId, setGameId] = useState(true);
  const [resetBoard, setResetBoard] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const toggleModal = (e) => {
    e.stopPropagation();
    setOpenModal(!openModal);
  };

  const closeMenu = () => setOpenModal(false);
  const openMenu = () => setOpenModal(true);

  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  const getPlayerId = (i) => {
    return players[i].id;
  };

  const playAgain = async () => {
    setResetBoard(true);
    const gameId = await createGame();
    setGameId(gameId);

    let player1 = players[1].id;
    let player2 = players[2].id;

    await joinGame(gameId, player1);
    await joinGame(gameId, player2);

    setWinner("");
    setPlayerTurn(1);
    setGameState("playing");
    setResetBoard(false);
    closeMenu();
  };

  async function startGame({ p1, p2 }) {
    const gameId = await createGame();
    setGameId(gameId);

    const name1 = (p1 || "").trim() || "Black";
    const name2 = (p2 || "").trim() || "White";
    const player1Id = await createPlayer(name1);
    const player2Id = await createPlayer(name2);
    const players = {
      1: { name: name1, id: player1Id },
      2: { name: name2, id: player2Id },
    };
    console.log("Created players:", players);
    setPlayers(players);

    await joinGame(gameId, player1Id);
    await joinGame(gameId, player2Id);

    setPlayerTurn(1);
    setGameState("playing");
    setShowForm(false);
    closeMenu();
  }

  const placeMove = async (cellIndex) => {
    setPlayerTurn((t) => (t === 1 ? 2 : 1));
    const playerId = getPlayerId(playerTurn);
    await playPiece(gameId, playerId, cellIndex);
    console.log("Brick placed on cell:", cellIndex);
  };

  const resetGame = () => {
    setResetBoard(true);

    setWinner("");
    setGameId(null);
    setPlayers(INITIAL_PLAYERS);
    setPlayerTurn(1);

    setGameState("menu");
    setShowForm(true);
    setOpenModal(true);

    queueMicrotask(() => setResetBoard(false));
    //queueMicrotask acts like a .then in a fetch, it runs last in the callstack
    //Could or should or would have used a setTimeOut but who cares
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
        playAgain,
        resetBoard,
        setShowForm,
        showForm,
        setGameState,
        resetGame,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainProvider };
