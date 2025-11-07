import React, { createContext, useContext, useReducer, type ReactNode } from 'react';

interface State {
    theme: "light" | "dark";
}

interface Action {
    type: string;
    payload: string;
}

const initialState: State = {
    theme: "light",
};

function reducer(state: State, action: Action): State {
    switch(action.type) {
        case "CHANGE_THEME":
            return {...state, theme: state.theme === "light" ? "dark" : "light"}
        default: 
            return {...state}
    }
}

const mainContextProvider = createContext<{state: State, dispatch: React.Dispatch<Action>} | null>(null)

function MainConext({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState)
 
    return (
        <mainContextProvider.Provider value={{state, dispatch}}>
            {children}
        </mainContextProvider.Provider> 
    )
  
}

export default MainConext;

export function useMainContext() {
    const context = useContext(mainContextProvider);

    if (!context) {
        throw new Error("context noto'g'ri ishlatildi!");
    }
    return context;
}