import axios from "axios";

export const signIn = async ({ setError, data, videoStateDispatch,
    userDataDispatch,
    setIsUserLoggedIn,
    navigate, }) => {
    try {
        const {
            data: {
                foundUser: { firstName, lastName, createdAt, history, likes, playlists, watchlater },
                encodedToken,
            },
        } = await axios.post("/api/auth/login", data);
        setIsUserLoggedIn(true);
        userDataDispatch({ type: "ADD_USER", payload: { firstName, lastName, createdAt } });
        videoStateDispatch({ type: "ADD_PLAYLISTS_LIKEDLIST", payload: { playlists, history, likes, watchlater } });
        axios.defaults.headers.common["authorization"] = encodedToken;
        localStorage.setItem('token', encodedToken);
        navigate(-1);
    } catch (e) {
        setError(e.response.data.errors);
    }
};