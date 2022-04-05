
import { useNavigate } from "react-router-dom";
import { useToast, useUserContext, useVideoState } from "../../context";
import { addToHistory } from "../../services";
import { inHistory } from "../../utils";

export const PlayButton = ({video}) => {
    const {_id, id} = video;
    const navigate = useNavigate();
    const { isUserLoggedIn } = useUserContext();
    const { showToast } = useToast();
  
    const {
      videoState: { history },
      videoStateDispatch,
    } = useVideoState();
    const addedToHistory = inHistory({ _id, history });
    const openVideoAndHandleHistory = () => {
        if (isUserLoggedIn && !addedToHistory)
          addToHistory({ video, videoStateDispatch, showToast });
        navigate(`/videos/${id}`);
      };
  return (
    <button
      className="btn play-btn"
      onClick={() => openVideoAndHandleHistory()}
    >
      <i className="fa-solid fa-circle-play fa-xl"></i>
    </button>
  );
};
