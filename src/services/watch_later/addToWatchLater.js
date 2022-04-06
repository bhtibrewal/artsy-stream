import axios from "axios";

export const addToWatchLater = async ({ video, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post("/api/user/watchlater", { video });
        if (res.status === 201) {
            videoStateDispatch({ type: "HANDLE_WATCHLATER", payload: res.data.watchlater });
            showToast({ title: "added to watch later", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}