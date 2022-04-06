import axios from "axios";

export const removeFromHistory = async ({ _id, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/history/${_id}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
            showToast({ title: "removed from history ", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}