export const logout = ({ setIsUserLoggedIn, videoStateDispatch, userDataDispatch, showToast }) => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    videoStateDispatch({ type: 'RESET_PLAYLISTS_AND_LIKEDLIST_AND_HISTORY_AND_WATCHLATER' });
    userDataDispatch({ type: "LOGOUT_USER" });
    showToast({ title: "user logged out", type: 'success' });
}