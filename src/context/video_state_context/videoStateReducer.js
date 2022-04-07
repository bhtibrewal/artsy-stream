export const videoStateReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_VIDEOS":
      return { ...state, videoList: payload };
    case "GET_CATEGORIES":
      return { ...state, categories: payload };
    case "GET_PLAYLISTS_AND_LIKEDLIST_AND_HISTORY_AND_WATCHLATER":
      return {
        ...state,
        playLists: payload.playlists,
        likedList: payload.likes,
        history: payload.history,
        watchLater: payload.watchlater,
        notesManagement: payload.notesManagement
      };

    case "HANDLE_LIKES":
      return { ...state, likedList: [...payload] };
    case "HANDLE_HISTORY":
      return { ...state, history: [...payload] };
    case "HANDLE_WATCHLATER":
      return { ...state, watchLater: [...payload] };
    case "HANDLE_PLAYLISTS":
      return { ...state, playLists: [...payload] };
    case "HANDLE_PLAYLIST":
      return {
        ...state,
        playLists: state.playLists.map((playlist) =>
          playlist._id === payload._id ? payload : playlist
        ),
      };
    case "NOTES_MANGEMENT":
      return { ...state, notesManagement: [...payload] };
    case 'RESET_PLAYLISTS_AND_LIKEDLIST_AND_HISTORY_AND_WATCHLATER':
      return {
        ...state, playLists: [],
        likedList: [],
        history: [],
        watchLater: [],
        notesManagement: []
      }
    default:
      return { ...state };
  }
};