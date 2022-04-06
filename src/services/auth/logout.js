export const logout = ({ setIsUserLoggedIn, videoStateDispatch, userDataDispatch, showToast }) => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    videoStateDispatch({ type: "RESET_CART_WISHLIST" });
    userDataDispatch({ type: "LOGOUT_USER" });
    showToast({ title: "user logged out", type: 'success' });
}