export const isVideoLiked = ({ _id, likedList }) => {
    if (likedList.length === 0) return false;
    return likedList.some(video => video._id === _id);
}
export const isVideoSaved = ({ _id, playLists }) => {
    if (playLists.lenght === 0) return false;

    return playLists.some(playlist => {
        return (playlist.videos.length === 0) ? false :
            playlist.videos.some(video => video._id === _id)
    });
}
export const inHistory = ({ _id, history }) => {
    if (history.length === 0) return false;
    return history.some(video => video._id === _id);
}
export const isVideoInWatchLater = ({ _id, watchLater }) => {
    if (watchLater.length === 0) return false;
    return watchLater.some(video => video._id === _id);
}