import axios from "axios"

export const removeFromPlaylist = async ({ videoId, playlistId, videoStateDispatch }) => {
    try {
        const {data: {playlist}} = await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`);
        videoStateDispatch({ type: "HANDLE_PLAYLIST", payload: playlist });
    }
    catch(e){
        console.error(e);
    }
}