import axios from "axios"

export const addToPlaylist = async ({ playlistId, video, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post(`/api/user/playlists/${playlistId}`, { video });
        if (res.status === 201) {
            videoStateDispatch({ type: "HANDLE_PLAYLIST", payload: res.data.playlist });
            showToast({ title: "video added to playlist", type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}