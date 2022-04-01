import axios from "axios"

export const createPlaylist = async ({ playlist, videoStateDispatch }) => {
    try {
        const { data: { playlists } } = await axios.post("/api/user/playlists", { playlist });
        videoStateDispatch({ type: "HANDLE_PLAYLISTS", payload: playlists });
    }
    catch (e) {
        console.error(e);
    }
}