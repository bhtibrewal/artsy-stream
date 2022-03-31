import axios from "axios";

export const fetchCategories = async ({ videoStateDispatch }) => {
    try {
        const res = await axios.get("/api/categories");
        videoStateDispatch({ type: "ADD_CATEGORIES", payload: res.data.categories });
    } catch (e) {
        console.error(e);
    }
};