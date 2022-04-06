import { useState } from "react";
import { usePlaylistModal, useToast, useVideoState } from "../../context";
import { ButtonPrimary } from "../buttons";
import {
  addToPlaylist,
  createPlaylist,
  removeFromPlaylist,
} from "../../services";
import { InputField } from "../input/InputField";
import { inPlaylist } from "../../utils";

export const PlaylistModal = () => {
  const {
    videoState: { playLists },
    videoStateDispatch,
  } = useVideoState();
  const { setDisplayModal, video, setVideo } = usePlaylistModal();
  const { showToast } = useToast();

  const [showCreatePlaylistForm, setShowCreatePlaylistForm] = useState(
    video ? false : true
  );
  const [playlist, setPlaylist] = useState({ title: "", desc: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlist.title === "")
      showToast({ title: "Playlist Title cannot be empty", type: "error" });
    else {
      setShowCreatePlaylistForm(false);
      createPlaylist({
        video,
        playlist,
        videoStateDispatch,
        showToast,
      });
      setPlaylist({ title: "", desc: "" });
      setDisplayModal(false);
      setVideo(undefined);
    }
  };
  const handleOnChange = (isVideoInPlaylist, _id) => {
    if (isVideoInPlaylist) {
      removeFromPlaylist({
        playlistId: _id,
        videoId: video._id,
        videoStateDispatch,
        showToast,
      });
    } else
      addToPlaylist({
        video,
        playlistId: _id,
        videoStateDispatch,
        showToast,
      });
  };
  return (
    <section className="flex-col modal-section-overlay">
      <button
        className="btn overlay-close"
        onClick={() => {
          setDisplayModal(false);
          setVideo(undefined);
        }}
      >
        <i className="fa-solid fa-x"></i>
      </button>
      <div className="flex-col modal-section">
        <h3>Playlist</h3>

        {/* playlists list */}
        <div className="playlists-list flex-col">
          {video &&
            playLists.map((playlist) => {
              const { _id, title } = playlist;
              const isVideoInPlaylist = inPlaylist({
                _id: video._id,
                playlist,
              });
              return (
                <label key={_id}>
                  <input
                    type={"checkbox"}
                    checked={isVideoInPlaylist}
                    onChange={() => handleOnChange(isVideoInPlaylist, _id)}
                  />
                  <span className="inline-m">{title}</span>
                </label>
              );
            })}
        </div>

        {/* create  playlist form */}
        {showCreatePlaylistForm ? (
          <form className="form" onSubmit={handleSubmit}>
            <InputField
              text="Email"
              placeholder="Title"
              value={playlist.title}
              onChange={(e) =>
                setPlaylist({ ...playlist, title: e.target.value })
              }
            />
            <InputField
              text="Email"
              placeholder="Description"
              value={playlist.desc}
              onChange={(e) =>
                setPlaylist({ ...playlist, desc: e.target.value })
              }
            />
            <ButtonPrimary type="submit">Create Playlist</ButtonPrimary>
          </form>
        ) : (
          <ButtonPrimary onClick={() => setShowCreatePlaylistForm(true)}>
            Add a new Playlist
          </ButtonPrimary>
        )}
      </div>
    </section>
  );
};
