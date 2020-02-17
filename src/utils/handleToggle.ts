import { IAction, IEpisode, IState } from "./Interfsces";

export default (episode: IEpisode, state: IState, dispatch) => {
    const episodeInFavorite = !!state.favourites.find(el => el.id === episode.id) as boolean;

    let dispatchEpisode: IAction = {
        type: "TOGGLE_FAVORITE",
        payload: episode
    };

    if(episodeInFavorite) {
        const favoriteEpisodes = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
        localStorage.setItem("favorite-episodes", JSON.stringify(favoriteEpisodes));

        dispatchEpisode = {
            type: "REMOVE_FAVORITE",
            payload: favoriteEpisodes
        };
    }

    return dispatch(dispatchEpisode);
};