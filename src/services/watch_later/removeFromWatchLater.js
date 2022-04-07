import axios from "axios";

export const removeFromWatchLater = async ({ _id, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/watchlater/${_id}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_WATCHLATER", payload: res.data.watchlater });
            showToast({ title: "removed from watch later", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}