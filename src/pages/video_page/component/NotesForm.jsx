import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ButtonPrimary, InputField } from "../../../components";
import { useToast, useUserContext, useVideoState } from "../../../context";
import { addNewNoteToVideo, updateNote } from "../../../services";

export const NotesForm = ({
  notesToEdit,
  videoId,
  noteId,
  setNoteEditable,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [notesFormValues, setNotesFormValues] = useState(
    notesToEdit
      ? notesToEdit
      : {
          title: "",
          desc: "",
        }
  );

  const { isUserLoggedIn } = useUserContext();
  const {
    videoState: { notesManagement },
    videoStateDispatch,
  } = useVideoState();
  const { showToast } = useToast();

  const submitHandler = (e) => {
    e.preventDefault();

    if (notesFormValues.title === "") {
      showToast({ title: "Title Cannot be Empty", type: "error" });
    } else {
      if (noteId) {
        updateNote({
          videoId,
          noteId: noteId,
          editedNote: notesFormValues,
          videoStateDispatch,
          showToast,
        });
        setNoteEditable(false);
      } else {
        addNewNoteToVideo({
          videoId,
          note: notesFormValues,
          videoStateDispatch,
          showToast,
        });
        setNotesFormValues({
          title: "",
          desc: "",
        });
      }
    }
  };

  if (!isUserLoggedIn)
    return (
      <section className="section ">
        <p className="body-l">Login to Start Adding Notes</p>
        <ButtonPrimary
          onClick={() => navigate("/sign-in", { state: { from: location } })}
        >
          Login
        </ButtonPrimary>
      </section>
    );

  return (
    <form className="form notes-form" onSubmit={submitHandler}>
      <InputField
        value={notesFormValues.title}
        onChange={(e) =>
          setNotesFormValues({ ...notesFormValues, title: e.target.value })
        }
        label={"Title"}
        placeholder="Title"
      />
      <InputField
        value={notesFormValues.desc}
        onChange={(e) =>
          setNotesFormValues({ ...notesFormValues, desc: e.target.value })
        }
        label={"Description"}
        placeholder="Description"
      />
      <ButtonPrimary type="submit">
        {noteId ? "Update Note" : "Add Note"}
      </ButtonPrimary>
    </form>
  );
};
