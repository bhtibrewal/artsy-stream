import axios from "axios";
import { useReducer, useState } from "react";

export const useUserData = () => {
  const encodedToken = localStorage.getItem("token");
  const initialLoginState = encodedToken !== null ? true : false;
  axios.defaults.headers.common["authorization"] = encodedToken;
  const [loginState, setLoginState] = useState(initialLoginState);
  const address = { street: "", city: "", country: "", zip_code: "" };

  const initialUserData = {
    firstName: "",
    lastName: "",
    email: "",
    createdAt: "",
    address,
  };

  const user_data_reducer = (state, { type, payload }) => {
    switch (type) {
      case "LOGIN_USER":
        return {
          ...state,
          ...payload,
        };
      case "LOGOUT_USER":
        return { ...initialUserData };
      case "ADD_ADDRESS":
        console.log(payload);
        return { ...state, address: { ...payload } };
      default:
        return { ...state };
    }
  };

  const [userData, userDataDispatch] = useReducer(
    user_data_reducer,
    initialUserData
  );
  return { loginState, setLoginState, userData, userDataDispatch };
};
