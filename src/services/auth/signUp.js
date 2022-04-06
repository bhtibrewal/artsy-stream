import axios from "axios";

export const signUp = async ({ data, userDataDispatch, setLoginState, showToast, navigate }) => {
    try {
        const res = await axios.post("/api/auth/signup", data)
        if (res.status === 201) {
            showToast({ title: "signup successfully", type: 'success' });
            navigate("/sign-in");
        }
    }
    catch (e) {
        showToast({ title: e.response.data.errors, type: 'error' });
    }
}