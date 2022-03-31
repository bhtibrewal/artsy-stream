import { useNavigate } from "react-router-dom";
import { AddedToPlaylist, AddToPlaylist } from "../../assets";
import { useUserContext, useVideoState } from "../../context";
import {
  addToHistory,
  likeVideo,
  unlikeVideo,
  addToWatchLater,
  removeFromWatchLater,
} from "../../services";
import {
  inHistory,
  isVideoLiked,
  isVideoSaved,
  isVideoInWatchLater,
} from "../../utils";
import { Rating } from "../index";

export const BasicCard = ({ video }) => {
  const { _id, id, title, creator, img_src, tag, rating } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();

  const {
    videoState: { likedList, history, playLists, watchLater },
    videoStateDispatch,
  } = useVideoState();

  const addedToWatchLater = isVideoInWatchLater({ _id, watchLater });
  const liked = isVideoLiked({ _id, likedList });
  const saved = isVideoSaved({ _id, playLists });
  const addedToHistory = inHistory({ _id, history });

  const openPlaylistModal = ({ video }) => {
    if (isUserLoggedIn) {
    } else navigate("/sign-in");
  };
  const openVideoAndHandleHistory = () => {
    if (isUserLoggedIn && !addedToHistory)
      addToHistory({ video, videoStateDispatch });
    else navigate(`/videos/${id}`);
  };
  const handleLike = () => {
    if (isUserLoggedIn) {
      if (liked) unlikeVideo({ _id, videoStateDispatch });
      else likeVideo({ video, videoStateDispatch });
    } else navigate("/sign-in");
  };
  const handleAddToWatchLater = () => {
    if (isUserLoggedIn) {
      if (addedToWatchLater) removeFromWatchLater({ _id, videoStateDispatch });
      else addToWatchLater({ video, videoStateDispatch });
    } else navigate("/sign-in");
  };
  return (
    <div className="card w-30 basic">
      <div className="img-sec">
        <span className="card-tag">{tag}</span>
        <img className="card-img" src={img_src} alt={`${title} ${creator}`} />
        <button
          className="btn play-btn"
          onClick={() => openVideoAndHandleHistory()}
        >
          <i className="fa-solid fa-circle-play fa-xl"></i>
        </button>
      </div>
      <div className="content">
        <div className="card-header">
          <h1>{title}</h1>
          <h2>by {creator}</h2>
          <Rating rating={rating} />
          <div className="video-actions">
            <div
              className=" video_card-btn center"
              title="Like"
              onClick={() => handleLike()}
            >
              <i className={`fa-solid fa-heart ${liked ? "liked" : ""} `}></i>
            </div>
            <div
              onClick={() => openPlaylistModal({ video })}
              className=" video_card-btn center"
              title={saved ? "Saved" : "Save"}
            >
              {saved ? <AddedToPlaylist /> : <AddToPlaylist />}
            </div>
            <div
              className=" video_card-btn center"
              title={`${
                addedToWatchLater ? "Remove From" : "Add To"
              }  Watch Later`}
              onClick={() => handleAddToWatchLater()}
            >
              <i
                className={`${
                  addedToWatchLater ? "fa-solid" : "fa-regular"
                } fa-clock`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
