import { useNavigate,Navigate, useParams } from "react-router-dom";
import { BasicCard, PlaylistPageVideoCard } from "../../components";
import { useVideoState } from "../../context";

export const SinglePlaylistPage = () => {
  const navigate = useNavigate();
  const { playlistTitle } = useParams();
  const {
    videoState: { playLists },
  } = useVideoState();

  if(playLists.length === 0){
    return <Navigate to='/videos'/>
  }

  const playList = playLists.find(
    (playlist) => playlist.title === playlistTitle
  );
  const { videos, title, _id } = playList;
  if (videos.length === 0)
    return (
      <main className="main">
        <p>Empty Playlist</p>
      </main>
    );
  return (
    <main className="main">
      <section className="section">
        <h2>
          {" "}
          {title} ({videos.length})
        </h2>
        <div className="grid m-top">
          {videos.map((video) => {
            return (
              <PlaylistPageVideoCard
                key={video._id}
                video={video}
                playlistId={_id}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
