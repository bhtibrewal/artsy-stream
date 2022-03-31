import axios from "axios";

export const addToWatchLater = async ({ video, videoStateDispatch }) => {
    try {
        const { data: { watchlater } } = await axios.post("/api/user/watchlater", { video });
        videoStateDispatch({ type: "HANDLE_WATCHLATER", payload: watchlater });
    }
    catch (e) {
        console.error(e);
    }
}