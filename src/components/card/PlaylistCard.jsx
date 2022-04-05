import { useNavigate } from "react-router-dom";
import { RemovePlaylist } from "../../assets";
import { useToast, useVideoState } from "../../context";
import { deletePlaylist } from "../../services";

export const PlaylistCard = ({ playlist }) => {
  const { _id, title, desc, videos } = playlist;
  const navigate = useNavigate();
  const { videoStateDispatch } = useVideoState();
  const { showToast } = useToast();
  return (
    <div className="card w-30 basic">
      <div className="img-sec">
        {videos.length > 0 ? (
          <img className="card-img" src={videos[0].img_src} alt={`${title} `} />
        ) : (
          <p className="hero">Empty Playlist </p>
        )}
        <div className="body-l count-overlay center">
          <button
            className="btn play-btn"
            onClick={() => navigate(`/playlists/${title}`)}
          >
            <i className="fa-solid fa-circle-play fa-xl"></i>
          </button>
          <p className="body-l">{videos?.length} +</p>
        </div>
      </div>
      <div className="content">
        <div className="card-header">
          <p className="body-l"> {title}</p>
          <p>{desc}</p>
          <div className="video-actions">
            <div
              className=" video_card-btn center"
              title={"Delete Playlist"}
              onClick={() =>
                deletePlaylist({
                  playlistId: _id,
                  videoStateDispatch,
                  showToast,
                })
              }
            >
              <RemovePlaylist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
