import { useState } from "react";
import { useToast, useVideoState } from "../../../context";
import { deleteNotefromVideo } from "../../../services";
import { NotesForm } from "./NotesForm";

export const NoteCard = ({ note, videoId }) => {
  const { id, title, desc, createdAt, updatedAt } = note;
  const { videoStateDispatch } = useVideoState();
  const { showToast } = useToast();
  const [isNoteEditable, setNoteEditable] = useState(false);
  return (
    <div className="note-card">
      {isNoteEditable ? (
        <NotesForm
          videoId={videoId}
          notesToEdit={note}
          noteId={id}
          setNoteEditable={setNoteEditable}
        />
      ) : (
        <>
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
          <p>
            {`created on: ${createdAt.split("T")[0]} time:  ${
              createdAt.split("T")[1].split("+")[0]
            }`}
          </p>
          <p>
            {updatedAt &&
              `edited on: ${updatedAt.split("T")[0]} time:  ${
                updatedAt.split("T")[1].split("+")[0]
              }`}
          </p>
          <span onClick={() => setNoteEditable(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </>
      )}
    </div>
  );
};
