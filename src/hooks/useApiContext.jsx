import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

export function useApiContext() {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error("useApiContext must be used inside ApiProvider");

  return ctx;
}
