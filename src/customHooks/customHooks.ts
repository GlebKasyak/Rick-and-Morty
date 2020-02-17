import * as React from "react";

import { IState } from "../utils/Interfsces";
import { dispatchCtx, storeCtx } from "../components/Store";

export const useFetchData = (): IState => {
    const URL = `https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes`;
    const state = React.useContext(storeCtx);
    const dispatch = React.useContext(dispatchCtx);

    const fetchDataAction = async () => {
        const response = await fetch(URL);
        const data = await response.json();

        return dispatch({
            type: "FETCH_DATA",
            payload: data._embedded.episodes
        })
    };

    React.useEffect(() => {
        fetchDataAction();
    }, []);

    return state;
};
