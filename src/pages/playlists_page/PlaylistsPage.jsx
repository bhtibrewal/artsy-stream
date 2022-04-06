import { ButtonPrimary, PlaylistCard } from "../../components";
import { usePlaylistModal, useVideoState } from "../../context";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const PlaylistsPage = () => {
  const {
    videoState: { playLists },
  } = useVideoState();
  const { setDisplayModal } = usePlaylistModal();

  const openPlaylistModal = () => {
    setDisplayModal(true);
  };
  if (playLists.length === 0)
    return (
      <EmptyListPage text="Empty Playlist">
        <ButtonPrimary
          title="create playlist"
          onClick={() => openPlaylistModal()}
        >
          Create Playlist
        </ButtonPrimary>
      </EmptyListPage>
    );
  return (
    <main className="main">
      <section className="section">
        <div className="flex-align-center">
          <h2>Playlists ({playLists.length})</h2>
          <ButtonPrimary
            className=" clear-btn"
            title="create playlist"
            onClick={() => openPlaylistModal()}
          >
            Create Playlist
          </ButtonPrimary>
        </div>
        <div className="grid m-top">
          {playLists.map((playlist) => (
            <PlaylistCard key={playlist._id} playlist={playlist} />
          ))}
        </div>
      </section>
    </main>
  );
};
