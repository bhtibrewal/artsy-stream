import axios from "axios"

export const deletePlaylist = async ({ playlistId, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_PLAYLISTS", payload: res.data.playlists });
            showToast({ title: "playlist deleted", type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}