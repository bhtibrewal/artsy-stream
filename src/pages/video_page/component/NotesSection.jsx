import { useVideoState } from "../../../context";
import { NoteCard } from "./NoteCard";

export const NotesSection = ({ videoId }) => {
  const {
    videoState: { notesManagement },
  } = useVideoState();
  const videoNotes = notesManagement.find((item) => item.videoId === videoId);
  return (
    <div className="notes-section">
      {videoNotes &&
        videoNotes.notes.map((note) => {
          return <NoteCard note={note} videoId={videoId} key={note.id} />;
        })}
    </div>
  );
};
