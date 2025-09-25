import {createContext, useState} from "react";

const MainContext = createContext(null);

export function MainProvider({children}){
    const [value, setValue] = useState("Hello Gumoku")

    return(
        <MainContext.Provider value={{value, setValue}}>
            {children}
        </MainContext.Provider>
    )
    
}
