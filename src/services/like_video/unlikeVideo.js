import axios from "axios"

export const unlikeVideo = async ({ _id, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/likes/${_id}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
            showToast({ title: "removed like", type: 'success' })
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}