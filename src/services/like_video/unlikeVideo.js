import axios from "axios"

export const unlikeVideo = async({_id, videoStateDispatch})=>{
    try{
        const res= await axios.delete(`/api/user/likes/${_id}`);
        videoStateDispatch({ type: "HANDLE_LIKES", payload: res.data.likes });
    }
    catch(e){
        console.error(e.response.data);
    }
}