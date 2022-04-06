import { useNavigate } from "react-router-dom";
import { useToast, useUserContext, useVideoState } from "../../context";
import { likeVideo, unlikeVideo } from "../../services";
import { isVideoLiked } from "../../utils";

export const LikeButton = ({ video, children }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const { showToast } = useToast();
  const {
    videoState: { likedList },
    videoStateDispatch,
  } = useVideoState();
  const liked = isVideoLiked({ _id, likedList });

  const handleLike = () => {
    if (isUserLoggedIn) {
      if (liked) unlikeVideo({ _id, videoStateDispatch, showToast });
      else likeVideo({ video, videoStateDispatch, showToast });
    } else navigate("/sign-in");
  };
  return (
    <button
      className="btn video_card-btn center"
      title="Like"
      onClick={() => handleLike()}
    >
      <i className={`fa-solid fa-heart ${liked && "liked"} `}></i>
      {children}
    </button>
  );
};
