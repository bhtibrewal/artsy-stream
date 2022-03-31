import axios from "axios";

export const removeFromWatchLater = async ({ _id, videoStateDispatch }) => {
    try {
        const { data: { watchlater } } = await axios.delete(`/api/user/watchlater/${_id}`);
        videoStateDispatch({ type: "HANDLE_WACHLATER", payload: watchlater });
    }
    catch (e) {
        console.error(e);
    }
}