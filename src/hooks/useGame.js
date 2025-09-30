import { useCallback, useEffect, useState } from "react";

const BASE = "http://localhost:3001/api/gomoku";

export function useGame() {
  const [games, setGames] = useState(null);
  const [creating, setCreating] = useState(false);

  const fetchGames = useCallback(async () => {
    try {
      const res = await fetch(`${BASE}/games`, {
        method: "GET",
      });
      const data = await res.json();
      setGames(data);
      console.log("game state", data);
    } catch (e) {
      console.log("fetchGames fail:", e);
    }
  }, []);

  const findGame = useCallback(async (gameId) => {
    if (!gameId) throw new Error("findGame: missing gameId");
    const res = await fetch(`${BASE}/game/${encodeURIComponent(gameId)}`);

    if (!res.ok) throw new Error(`${res.status}`);

    return res.json();
  }, []);

  const createGame = useCallback(async () => {
    try {
      setCreating(true);
      const res = await fetch(`${BASE}/games/add`, {
        method: "GET",
      });
      const newGame = await res.json();

      await fetchGames();
      return newGame;
    } catch {
      console.log("Create game error");
    } finally {
      setCreating(false);
    }
  }, [fetchGames]);

  useEffect(() => {
    fetchGames();

    const time = setInterval(() => {
      fetchGames();
    }, 10000);

    return () => {
      clearInterval(time);
    };
  }, [fetchGames]);

  return { games, createGame, creating, findGame };
}
