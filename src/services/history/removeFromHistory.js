import axios from "axios";

export const removeFromHistory = async ({ _id, videoStateDispatch }) => {
    try {
        const { data: { history } } = await axios.post(`/api/user/history/${_id}`);
        videoStateDispatch({ type: "HANDLE_HISTORY", payload: history });
    }
    catch (e) {
        console.error(e);
    }
}