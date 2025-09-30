import { useCallback, useEffect, useState } from "react";

const BASE = "http://localhost:3001";

export function useGame() {
  const [games, setGames] = useState(null);

  const fetchGames = useCallback(async (ctrl) => {
    try {
      const res = await fetch(`${BASE}/api/gomoku/games`, {
        signal: ctrl.signal,
        method: "GET",
      });
      const data = await res.json();
      setGames(data);
      console.log("game state", data);
    } catch (e) {
      console.log("fetchGames fail:", e);
    }
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    fetchGames(ctrl);

    const time = setInterval(() => {
      const nextCtrl = new AbortController();
      fetchGames(nextCtrl);
    }, 10000);

    return () => {
      ctrl.abort();
      clearInterval(time);
    };
  }, [fetchGames]);

  return { games };
}
