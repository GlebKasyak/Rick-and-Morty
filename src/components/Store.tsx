import * as React from "react";

import { IAction, IState } from "../utils/Interfsces";

const initialState: IState = {
    episodes: [],
    favourites: []
};

export const storeCtx = React.createContext<IState>(initialState);
export const dispatchCtx = React.createContext<React.Dispatch<IAction>>(() => {} );

function reducer(state: IState, action: IAction): IState {
    switch(action.type) {
        case "FETCH_DATA":
            return { ...state, episodes: action.payload };
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                favourites: state.favourites.concat(action.payload)
            };
        case "FAVORITE_EPISODES":
        case "REMOVE_FAVORITE": {
            return { ...state, favourites: action.payload }
        }
        default:
            return state
    }
}

export const StoreProvider:React.ComponentType = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        localStorage.setItem("favorite-episodes", JSON.stringify(state.favourites));
    });

    return (
        <dispatchCtx.Provider value={ dispatch }>
            <storeCtx.Provider value={ state }>
                { children }
            </storeCtx.Provider>
        </dispatchCtx.Provider>
    )
};
