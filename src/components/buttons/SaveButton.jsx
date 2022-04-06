import { useNavigate } from "react-router-dom";
import { AddedToPlaylist, AddToPlaylist } from "../../assets";
import {
  usePlaylistModal,
  useToast,
  useUserContext,
  useVideoState,
} from "../../context";
import { isVideoSaved } from "../../utils";

export const SaveButton = ({ video, children }) => {
  const { _id } = video;
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUserContext();
  const { showToast } = useToast();
  const {
    videoState: { playLists },
  } = useVideoState();
  const { setDisplayModal, setVideo } = usePlaylistModal();

  const openPlaylistModal = ({ video }) => {
    if (isUserLoggedIn) {
      setDisplayModal(true);
      setVideo(video);
    } else navigate("/sign-in");
  };

  const saved = isVideoSaved({ _id, playLists });

  return (
    <button
      onClick={() => openPlaylistModal({ video })}
      className=" video_card-btn center"
      title={saved ? "Saved" : "Save"}
    >
      {saved ? <AddedToPlaylist /> : <AddToPlaylist />}
      {children}
    </button>
  );
};
