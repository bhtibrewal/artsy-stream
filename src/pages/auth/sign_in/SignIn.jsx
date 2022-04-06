import "../auth.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast, useUserContext, useVideoState } from "../../../context";
import { useDocumentTitle } from "../../../custom_hooks";
import {
  ButtonPrimary,
  OutlineButtonPrimary,
  InputField,
  PasswordInput,
} from "../../../components";
import { signIn } from "../../../services";

export const SignIn = () => {
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const guestLogin = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };
  const { videoStateDispatch } = useVideoState();
  const { setIsUserLoggedIn, userDataDispatch } = useUserContext();
  const { showToast } = useToast();
  return (
    <main className="main center">
      <form
        className="flex-col signup-sec"
        onSubmit={(e) => {
          e.preventDefault();
          signIn({
            setError,
            data: inputValues,
            videoStateDispatch,
            userDataDispatch,
            setIsUserLoggedIn,
            showToast,
            navigateback: () => navigate(from, { replace: true }),
          });
        }}
      >
        <p className="body-l">Login to my user account.</p>

        <InputField
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
          placeholder="Email"
        />
        <PasswordInput
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="inline-m"> Keep me logged in. </span>
        </label>
        <ButtonPrimary type="submit">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </ButtonPrimary>
        <OutlineButtonPrimary onClick={() => setInputValues(guestLogin)}>
          Login as Guest
        </OutlineButtonPrimary>
        <Link to="me" className="link-text-primary">
          Forgot your password?
        </Link>
        <div>
          <p className="body-md">Still don't have an account ?</p>
          <div
            className="link-text-primary"
            onClick={() => navigate("/sign-up")}
          >
            SIGN UP
          </div>
        </div>
        <div className="err-msg">{error}</div>
      </form>
    </main>
  );
};
