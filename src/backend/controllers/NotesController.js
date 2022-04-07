import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * This handler handles removing videos from user's playlists.
 * send DELETE Request at /api/user/notes/:videoId
 * */

export const removeAllNotesForVideoHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId } = request.params;
        const newNotes = user.notesManagement.map(item => {
            if (item.videoId === videoId)
                return { videoId, notes: [] }
            return item;
        }
        );
        console.log(newNotes, user.notesManagement)
        this.db.users.update({ notesManagement: newNotes });
        return new Response(200, {}, { notesManagement: newNotes });
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
};

/**
 * This handler handles getting notes to a particular video.
 * send GET Request at /api/user/notes/:videoId
 * */

export const getAllNotesForVideoHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId } = request.params;
        const videoNotes = user.notesManagement.find(item => item.videoId === videoId);
        return new Response(200, {}, videoNotes);
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
}

/**
 * This handler handles adding note to a particular video.
 * send POST Request at /api/user/notes/:videoId
 * body contains {note: {title: "foo", description:"bar bar bar" }}
 * */

export const addNewNoteToVideoHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId } = request.params;
        const { note } = JSON.parse(request.requestBody);
        if (user.notesManagement.some(item => item.videoId === videoId)) {
            const newNotes = user.notesManagement.map(item => {
                if (item.videoId === videoId)
                    return { videoId, notes: [...item.notes, { ...note, id: uuid() }] }
                return item;
            }
            );
            this.db.users.update({ notesManagement: newNotes });
            return new Response(201, {}, { notesManagement: newNotes });
        }
        user.notesManagement.push({ videoId, notes: [{ ...note, id: uuid(), createdAt: formatDate() }] });
        return new Response(201, {}, { notesManagement: user.notesManagement });
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
}

export const updateNoteHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);

    if (user) {
        const { videoId, noteId } = request.params;
        const { editedNote } = JSON.parse(request.requestBody);
        console.log(editedNote);
        const videoNotes = user.notesManagement.find(item => item.videoId === videoId);
        const updatedNotes = videoNotes.notes.map(note =>
            note.id === noteId ? { ...editedNote, updatedAt: formatDate() } : note);
        videoNotes.notes = updatedNotes;
        return new Response(200, {}, { notesManagement: user.notesManagement });
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
}

/**
 * This handler handles deleting a note from a video.
 * send POST Request at /api/user/notes/:videoId/:noteId
 * */

export const deleteNoteFromVideoHandler = function (schema, request) {
    const user = requiresAuth.call(this, request);
    if (user) {
        const { videoId, noteId } = request.params;
        const videoNotes = user.notesManagement.find(item => item.videoId === videoId);
        const filteredVideoNotes = videoNotes.notes.filter(note => note.id !== noteId);
        videoNotes.notes = filteredVideoNotes;
        return new Response(200, {}, { notesManagement: user.notesManagement });
    }
    return new Response(
        404,
        {},
        { errors: ["The user you request does not exist. Not Found error."] }
    );
}
