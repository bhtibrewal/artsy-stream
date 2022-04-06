import "./video_page.css";
import { useParams } from "react-router-dom";
import { SingleVideoPageCard } from "../../components";
import { useVideoState } from "../../context";
import { NotesForm, NotesSection } from "./component";
import { useDocumentTitle } from "../../custom_hooks";
import { removeAllNotesForVideo } from "../../services";

export const VideoPage = () => {
  useDocumentTitle("| videos");
  const { videoId } = useParams();

  const {
    videoState: { videoList },
  } = useVideoState();

  const video = videoList?.find((video) => video.id === videoId);

  if (!video) return <div>loading...</div>;
  return (
    <main className="main center">
      <SingleVideoPageCard video={video}>
        <section className="section notes-management">
          <div className="flex-align-center">
            <h2>Notes</h2>
            <button
              className="btn video_card-btn clear-btn"
              title="Like"
              onClick={() =>
                removeAllNotesForVideo({
                  videoId,
                  videoStateDispatch,
                  showToast,
                })
              }
            >
              <i className={`fa-solid fa-trash `}></i>
              Clear Notes
            </button>
          </div>

          <NotesForm videoId={videoId} />
          <NotesSection videoId={videoId} />
        </section>
      </SingleVideoPageCard>
    </main>
  );
};
