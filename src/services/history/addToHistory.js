import axios from "axios";

export const addToHistory = async ({ video, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post("/api/user/history", { video });
        if (res.status === 201) {
            videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
            showToast({ title: "added to history", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}