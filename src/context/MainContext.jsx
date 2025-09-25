import {createContext, useContext, useState} from "react";

const MainContext = createContext(null);

export function MainProvider({children}){
    const [value, setValue] = useState("Hello Gumoku")

    return(
        <MainContext.Provider value={{value, setValue}}>
            {children}
        </MainContext.Provider>
    )
    
}

export function useMainContext() {
    const ctx = useContext(MainContext);
    if (!ctx) throw new Error("useMainContext must be used inside MainProvider")
        
    return ctx;
}