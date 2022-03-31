import { useState } from "react";

export const PasswordInput = ({ value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="artsy-input passwrd-input">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="password"
        value={value}
        onChange={onChange}
      />
      <i
        onClick={() => setShowPassword((prev) => !prev)}
        className={`fas ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
      ></i>
      <span className="input-label">{label}</span>
    </div>
  );
};
