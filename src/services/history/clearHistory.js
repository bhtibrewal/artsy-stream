import axios from "axios";

export const clearHistory = async ({  videoStateDispatch }) => {
    try {
        const { data: { history } } = await axios.post("/api/user/history/all");
        videoStateDispatch({ type: "HANDLE_HISTORY", payload: history });
    }
    catch (e) {
        console.error(e);
    }
}