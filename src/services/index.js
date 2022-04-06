/* auth services */
export { signIn } from './auth/signIn';
export { signUp } from './auth/signUp';
export { logout } from './auth/logout';

/* data services */
export { fetchVideoList } from './data/fetchVideoList';
export { fetchCategories } from './data/fetchCategories';

/* likes services */
export { likeVideo } from './like_video/likeVideo';
export { unlikeVideo } from './like_video/unlikeVideo';

/* history services */
export { addToHistory } from './history/addToHistory';
export { removeFromHistory } from './history/removeFromHistory';
export { clearHistory } from './history/clearHistory';

/* watchlater services */
export { addToWatchLater } from './watch_later/addToWatchLater';
export { removeFromWatchLater } from './watch_later/removeFromWatchLater';

/* playlist services */
export { createPlaylist } from './playlists/createPlaylist';
export { deletePlaylist } from './playlists/deletePlaylist'
export { addToPlaylist } from './playlists/addToPlaylist';
export { removeFromPlaylist } from './playlists/removeFromPlaylist';

/* notes servives */
export { removeAllNotesForVideo } from './notes/removeAllNotesForVideo';
export { addNewNoteToVideo } from './notes/addNewNoteToVideo';
export { deleteNotefromVideo } from './notes/deleteNoteFromVideo';