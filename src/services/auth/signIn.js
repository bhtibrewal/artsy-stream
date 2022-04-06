import axios from "axios";

export const signIn = async ({ setError, data, videoStateDispatch,
    userDataDispatch,
    setIsUserLoggedIn,
    showToast,
    navigateback
}) => {
    try {
        const res = await axios.post("/api/auth/login", data);
        if (res.status === 200) {
            const {
                data: {
                    foundUser: { firstName, lastName, email, createdAt, history, likes, playlists, watchlater, notesManagement },
                    encodedToken,
                },
            } = res;
            setIsUserLoggedIn(true);
            userDataDispatch({ type: "LOGIN_USER", payload: { firstName, lastName, createdAt } });
            videoStateDispatch({ type: "GET_PLAYLISTS_AND_LIKEDLIST_AND_HISTORY_AND_WATCHLATER", payload: { playlists, history, likes, watchlater, notesManagement } });
            axios.defaults.headers.common["authorization"] = encodedToken;
            localStorage.setItem('token', encodedToken);
            localStorage.setItem('user', JSON.stringify({
                firstName, lastName, email, createdAt
            }))
            showToast({ title: "user logged in", type: 'success' });
            navigateback();
        }
    } catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
};