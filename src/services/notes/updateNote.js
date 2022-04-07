import axios from "axios";

export const updateNote = async ({ videoId, noteId, editedNote, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/user/notes/${videoId}/${noteId}`, { editedNote });
        if (res.status === 200) {
            videoStateDispatch({ type: "NOTES_MANGEMENT", payload: res.data.notesManagement });
            showToast({ title: "note updated", type: "success" });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}