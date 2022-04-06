import axios from "axios"

export const likeVideo = async ({ video, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post("/api/user/likes", { video });
        if (res.status == 201) {
            videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
            showToast({ title: "liked", type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}