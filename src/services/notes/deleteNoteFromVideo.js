import axios from "axios"

export const deleteNotefromVideo = async ({ videoId, noteId, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/notes/${videoId}/${noteId}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "NOTES_MANGEMENT", payload: res.data.notesManagement });
            showToast({ title: "note deleted", type: "success" });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}