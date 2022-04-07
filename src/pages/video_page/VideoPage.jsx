import "./video_page.css";
import { useParams } from "react-router-dom";
import { SingleVideoPageCard } from "../../components";
import { useVideoState, useToast } from "../../context";
import { NotesForm, NotesSection } from "./component";
import { useDocumentTitle } from "../../custom_hooks";
import { removeAllNotesForVideo } from "../../services";

export const VideoPage = () => {
  useDocumentTitle("| videos");
  const { videoId } = useParams();
  

  const {
    videoState: { videoList },
    videoStateDispatch,
  } = useVideoState();

  const video = videoList?.find((video) => video.id === videoId);

  if (!video) return <div>loading...</div>;
  return (
    <main className="main center">
      <SingleVideoPageCard video={video}>
        <NotesSection videoId={videoId} />
      </SingleVideoPageCard>
    </main>
  );
};
