import { useToast, useVideoState } from '../../../context';
import { deleteNotefromVideo } from '../../../services';

export const NotesSection = ({videoId}) => {
    const {
        videoState: { notesManagement },
        videoStateDispatch,
      } = useVideoState();
      const { showToast } = useToast();
    const videoNotes = notesManagement.find((item) => item.videoId === videoId);
  return (
    <div className='notes-section'>
        {videoNotes &&
          videoNotes.notes.map((note) => {
            const { id, title, desc } = note;
            return (
              <div className="note-card" key={id}>
                <button
                  className="btn note-close-btn"
                  onClick={() =>
                    deleteNotefromVideo({
                      videoId,
                      noteId: id,
                      videoStateDispatch,
                      showToast,
                    })
                  }
                >
                  <i className="fa-solid fa-xmark fa-xl"></i>
                </button>
                <p className="body-l">{title}</p>
                <p>{desc} </p>
              </div>
            );
          })}
      </div>
  )
}
