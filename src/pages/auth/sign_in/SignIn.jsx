import "../auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  ButtonPrimary,
  OutlineButtonPrimary,
  InputField,
  PasswordInput,
} from "../../../components";

export const SignIn = () => {
  const navigate = useNavigate();

  return (
    <main className="main center">
      <form className="flex-col signup-sec">
        <p className="body-l">Login to my user account.</p>

        <InputField label={"Email"} placeholder="Email" />
        <PasswordInput label={"Password"} />
        <label className="flex-align-center">
          <input type="checkbox" />
          <span className="checkbox-text"> Keep me logged in. </span>
        </label>
        <ButtonPrimary type="submit">
          <span>validate</span>
          <i className="fa-solid fa-arrow-right-long"></i>
        </ButtonPrimary>
        <OutlineButtonPrimary>Login as Guest</OutlineButtonPrimary>
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
      </form>
    </main>
  );
};
