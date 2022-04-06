import axios from "axios"

export const addNewNoteToVideo = async ({ videoId, note, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/user/notes/${videoId}`, { note });
        if (res.status === 201) {
            videoStateDispatch({ type: "NOTES_MANGEMENT", payload: res.data.notesManagement });
            showToast({ title: "note added", type: "success" });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}

