import axios from "axios";

export const fetchVideoList = async ({ videoStateDispatch }) => {
    try {
        const res = await axios.get("/api/videos");
        videoStateDispatch({ type: "GET_VIDEOS", payload: res.data.videos });
    } catch (e) {
        console.error(e.response.data.error);
    }
};