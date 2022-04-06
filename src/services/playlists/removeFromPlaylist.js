import axios from "axios"

export const removeFromPlaylist = async ({ videoId, playlistId, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`);
        if (res.status === 200) {
            videoStateDispatch({ type: "HANDLE_PLAYLIST", payload: res.data.playlist });
            showToast({ title: "video removed from playlist", type: 'success' });
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}