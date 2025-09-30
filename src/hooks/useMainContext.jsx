import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export function useMainContext() {
  const ctx = useContext(MainContext);
  if (!ctx) throw new Error("useMainContext must be used inside MainProvider");

  return ctx;
}
