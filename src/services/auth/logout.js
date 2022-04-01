export const logout=({setIsUserLoggedIn, videoStateDispatch, userDataDispatch})=>{
    setIsUserLoggedIn(false);
    localStorage.clear("token");
    localStorage.clear("user");
    videoStateDispatch({ type: "RESET_CART_WISHLIST" });
    userDataDispatch({ type: "LOGOUT_USER" });
}