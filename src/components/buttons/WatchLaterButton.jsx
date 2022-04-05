import React from "react";
import { useNavigate } from "react-router-dom";
import { useToast, useUserContext, useVideoState } from "../../context";
import { addToWatchLater, removeFromWatchLater } from "../../services";
import { isVideoInWatchLater } from "../../utils";

export const WatchLaterButton = ({ video, children }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const { showToast } = useToast();
  const {
    videoState: { watchLater },
    videoStateDispatch,
  } = useVideoState();
  const addedToWatchLater = isVideoInWatchLater({ _id, watchLater });

  const handleAddToWatchLater = () => {
    if (isUserLoggedIn) {
      if (addedToWatchLater)
        removeFromWatchLater({ _id, videoStateDispatch, showToast });
      else addToWatchLater({ video, videoStateDispatch, showToast });
    } else navigate("/sign-in");
  };
  return (
    <button
      className="btn video_card-btn center"
      title={`${addedToWatchLater ? "Remove From" : "Add To"}  Watch Later`}
      onClick={() => handleAddToWatchLater()}
    >
      <i
        className={`${addedToWatchLater ? "fa-solid" : "fa-regular"} fa-clock`}
      ></i>
      {children}
    </button>
  );
};
