import { PlaylistCard } from "../../components";
import { useVideoState } from "../../context";
import { EmptyListPage } from "../emptylist_page/EmptyListPage";

export const PlaylistsPage = () => {
  const {
    videoState: { playLists },
  } = useVideoState();

  if (playLists.length === 0) return <EmptyListPage text="Empty Playlist" />;
  return (
    <main className="main">
      <section className="section">
        <h2>Playlists ({playLists.length})</h2>
        <div className="grid m-top">
          {playLists.map((playlist) => (
            <PlaylistCard key={playlist._id} playlist={playlist} />
          ))}
        </div>
      </section>
    </main>
  );
};
