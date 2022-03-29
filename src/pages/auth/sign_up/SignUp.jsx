import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonPrimary, InputField, PasswordInput } from "../../../components";

export const SignUp = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  /* email and password validation */
  var passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{9,16}$/;
  const validPassword = passwordPattern.test(inputValues.password);

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const validEmail = emailPattern.test(inputValues.email);

  const canSubmit = () => {
    return (
      inputValues.firstName !== "" &&
      inputValues.lastName !== "" &&
      validEmail &&
      validPassword
    );
  };
  /* if agree to terms and can submit then set disabled false */
  const isDisabled = () => !(agreeToTerms && canSubmit());
  const disabled = isDisabled();

  return (
    <main className="main center">
      <form
        className="flex-col signup-sec"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <i className="primary fa-regular fa-user fa-5x"></i>
        <p className="body-l">Create my account on Artsy Shop!</p>

        <InputField
          value={inputValues.firstName}
          onChange={(e) =>
            setInputValues({ ...inputValues, firstName: e.target.value })
          }
          label={"First Name"}
        />
        <InputField
          value={inputValues.lastName}
          onChange={(e) =>
            setInputValues({ ...inputValues, lastName: e.target.value })
          }
          label={"Last Name"}
        />
        <InputField
          value={inputValues.email}
          onChange={(e) =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
          label={"Email"}
        />
        {!validEmail && <p className="error-msg">Enter a valid email.</p>}
        <PasswordInput
          value={inputValues.password}
          onChange={(e) =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
          label={"Password"}
        />
        {inputValues?.password.length !== 0 &&
          inputValues?.password.length <= 8 && (
            <p className="error-msg">Password must be more than 8 letters</p>
          )}
        <label className="flex-align-center">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={() => setAgreeToTerms(!agreeToTerms)}
          />
          <span className="checkbox-text">
            By registering, I accept the
            <Link to="me" className="primary">
              General terms and conditions.
            </Link>
          </span>
        </label>
        <ButtonPrimary
          type="submit"
          className={` ${disabled && "diabled-btn"}`}
        >
          <span>Create Account</span>
          <i className="fa-solid fa-arrow-right" />
        </ButtonPrimary>
        <div>
          <p className="body-md">Already have account ?</p>
          <div
            className={`link-text-primary `}
            onClick={() => navigate("/sign-in")}
          >
            SIGN IN
          </div>
        </div>
      </form>
    </main>
  );
};
