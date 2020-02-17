import * as React from 'react'
import { useFetchData } from "../customHooks/customHooks";
import { dispatchCtx } from "../components/Store";
import { CardComponent } from "../components";

import { IEpisode } from "../utils/Interfsces";
import { handleToggle, getFavoriteEpisodesFromLocalStorage } from "../utils";

export default (): JSX.Element => {
    const state = useFetchData();
    const dispatch = React.useContext(dispatchCtx);
    const toggleFavoriteAction = (episode: IEpisode) => handleToggle(episode, state, dispatch);

    React.useEffect(() => {
        getFavoriteEpisodesFromLocalStorage(dispatch);
    }, []);

    return (
        <div className="container">
            { !!state.favourites.length && state.favourites.map(episode => {
                return (
                    <CardComponent
                        key={ episode.id }
                        episode={ episode }
                        isFavorite={ true }
                        toggleFavorite={ toggleFavoriteAction }
                    />
                )})
            }
        </div>
  )
}