import axios from "axios"

export const addToPlaylist = async ({ _id, video, videoStateDispatch }) => {
    try {
        const { data: { playlist } } = await axios.post(`/api/user/playlists/${_id}`, { video });
        videoStateDispatch({ type: "HANDLE_PLAYLIST", payload: playlist });
    }
    catch (e) {
        console.error(e);
    }
}