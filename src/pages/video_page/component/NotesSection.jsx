import { useToast, useVideoState } from "../../../context";
import { removeAllNotesForVideo } from "../../../services";
import { NoteCard } from "./NoteCard";
import { NotesForm } from "./NotesForm";

export const NotesSection = ({ videoId }) => {
  const {
    videoState: { notesManagement },
    videoStateDispatch
  } = useVideoState();
  const { showToast } = useToast();
  const videoNotes = notesManagement.find((item) => item.videoId === videoId);
  return (
    <section className="section notes-management">
      <div className="flex-align-center">
        <h2>Notes</h2>
        <button
          className="btn video_card-btn clear-btn"
          title="Like"
          onClick={() =>{
            if(videoNotes.notes.length===0)
            showToast({title: 'Notes are already empty', type :'error'});
            else
            removeAllNotesForVideo({
              videoId,
              videoStateDispatch,
              showToast,
            })}
          }
        >
          <i className={`fa-solid fa-trash `}></i>
          Clear Notes
        </button>
      </div>
      <NotesForm videoId={videoId} />
      <div className="notes-section">
        {videoNotes &&
          videoNotes.notes.map((note) => {
            return <NoteCard note={note} videoId={videoId} key={note.id} />;
          })}
      </div>
    </section>
  );
};
