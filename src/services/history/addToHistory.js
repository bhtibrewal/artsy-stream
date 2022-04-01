import axios from "axios";

export const addToHistory = async ({ video, videoStateDispatch }) => {
    try {
        const { data: { history } } = await axios.post("/api/user/history", { video });
        videoStateDispatch({ type: "HANDLE_HISTORY", payload: history });
    }
    catch (e) {
        console.error(e);
    }
}