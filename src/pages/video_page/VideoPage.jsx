import "./video_page.css";
import { useParams } from "react-router-dom";
import { SingleVideoPageCard } from "../../components";
import { useVideoState } from "../../context";
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
      </SingleVideoPageCard>
    </main>
  );
};
