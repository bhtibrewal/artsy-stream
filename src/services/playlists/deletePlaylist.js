import axios from "axios"

export const deletePlaylist = async ({ playlistId, videoStateDispatch }) => {
    try {
        const { data: { playlists } } = await axios.delete(`/api/user/playlists/${playlistId}`);
        videoStateDispatch({ type: "HANDLE_PLAYLISTS", payload: playlists });
    }
    catch (e) {
        console.error(e);
    }
}