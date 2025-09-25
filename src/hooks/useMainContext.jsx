import { useContext } from "react";

export function useMainContext() {
    const ctx = useContext(useMainContext);
    if (!ctx) throw new Error("useMainContext must be used inside MainProvider")
        
    return ctx;
}