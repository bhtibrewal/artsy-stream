import axios from "axios";

export const clearHistory = async ({ videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete("/api/user/history/all");
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_HISTORY", payload: res.data.history });
            showToast({ title: "history cleared", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}