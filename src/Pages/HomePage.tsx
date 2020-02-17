import * as React from 'react';
import "./../styles/index";
import { Row } from "antd";

import { dispatchCtx } from "../components/Store";
import { useFetchData } from "../customHooks/customHooks";
import { CardComponent } from "./../components";

import { IEpisode }  from "../utils/Interfsces";
import { handleToggle, getFavoriteEpisodesFromLocalStorage } from "../utils"

export default (): JSX.Element => {
    const state = useFetchData();
    const dispatch = React.useContext(dispatchCtx);
    const toggleFavoriteAction = (episode: IEpisode) => handleToggle(episode, state, dispatch);

    React.useEffect(() => {
        getFavoriteEpisodesFromLocalStorage(dispatch);
    }, []);

    return (
        <div className="container">
            <Row>
                { !!state.episodes.length && state.episodes.map((episode: IEpisode) => {
                    let isFavoriteEpisode = state.favourites.some((fav: IEpisode) => fav.id === episode.id);
                    return (
                        <CardComponent
                            isFavorite={ isFavoriteEpisode }
                            key={ episode.id }
                            episode={ episode }
                            toggleFavorite={ toggleFavoriteAction }
                        />
                    )})
                }
            </Row>
        </div>
    );
};
