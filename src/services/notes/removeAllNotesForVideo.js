import axios from "axios";

export const removeAllNotesForVideo = async ({ videoId, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/notes/${videoId}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "NOTES_MANGEMENT", payload: res.data.notesManagement });
            showToast({ title: "notes cleared", type: "success" });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}