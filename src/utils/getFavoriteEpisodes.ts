export default (dispatch): void => {
    let favorite = localStorage.getItem("favorite-episodes") || "[]";
    dispatch({
        type: "FAVORITE_EPISODES",
        payload: JSON.parse(favorite)
    });
};