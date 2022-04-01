import axios from "axios"

export const likeVideo = async ({ video,videoStateDispatch }) => {
    try {
        const res = await axios.post("/api/user/likes", { video });
        // console.log(res.data)
       videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
    }
    catch (e) {
        console.error(e);
    }
}
