import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";

export function useConfigContext() {
  const ctx = useContext(ConfigContext);
  if (!ctx) throw new Error("useConfigContext must be used inside ConfigProvider");

  return ctx;
}
