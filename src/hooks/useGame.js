import { useCallback, useEffect, useState } from "react";

const BASE = "http://localhost:3000";

export function useGame() {
  const [state, setState] = useState(null);

  const fetchState = useCallback(async () => {
    try {
      const res = await fetch(`${BASE}/api/games`);
      const data = res.json();
      setState(data);
      console.log("Game state:", data);
    } catch (err) {
      console.log(err);
    }
  });
}
