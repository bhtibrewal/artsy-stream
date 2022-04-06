import axios from "axios"
import { addToPlaylist } from "./addToPlaylist";

export const createPlaylist = async ({ video, playlist, videoStateDispatch, showToast }) => {
    try {
        const res = await axios.post("/api/user/playlists", { playlist });
        if (res.status === 201) {
            videoStateDispatch({ type: "HANDLE_PLAYLISTS", payload: res.data.playlists });
            showToast({ title: "playlist created", type: 'success' });
            if (video) {
                const playlistId = res.data.playlists.slice(-1)[0]._id;
                addToPlaylist({
                    playlistId,
                    video,
                    videoStateDispatch,
                    showToast,
                });
            }
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}