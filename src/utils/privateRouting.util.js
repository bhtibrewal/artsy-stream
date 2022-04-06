export const privateRouting = ({ isUserLoggedIn, pathname, navigate }) => {
    const privateRoutes = ['/likes', '/watch-later', '/history', '/playlists', '/user-profile'];
    const authRoutes = ['/sign-in', "/sign-up"];
    isUserLoggedIn ? authRoutes.some(route => route === pathname) && navigate(-1) :
        privateRoutes.some(route => route === pathname) && navigate(-1);
}