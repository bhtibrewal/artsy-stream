import { useToast, useVideoState } from "../../context";
import { removeFromPlaylist } from "../../services";

export const RemoveFromPlaylistButton = ({ video, playlistId }) => {
    const {_id} = video;
  const { videoStateDispatch } = useVideoState();
  const { showToast } = useToast();
  return (
    <div
      onClick={() =>
        removeFromPlaylist({
          playlistId,
          videoId: _id,
          videoStateDispatch,
          showToast,
        })
      }
      className=" video_card-btn center"
      title={"Remove From playlist"}
    >
      <i className="fa-solid fa-trash"></i>
    </div>
  );
};
