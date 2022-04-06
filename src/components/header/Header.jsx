import "./header.css";
import { Link } from "react-router-dom";
import { useTheme, useUserContext } from "../../context";
import { LoggedInAvatar } from "./components";

export const Header = ({ setDisplaySidebar }) => {
  const { darkMode, setDarkMode } = useTheme();
  const { isUserLoggedIn } = useUserContext();
  return (
    <header className="header">
      <div className="flex-align-center">
        <button
          className="btn hamburger-btn"
          onClick={() => setDisplaySidebar((prev) => !prev)}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </button>
        <Link to="/">
          {/* logo */}
          <h2 className="logo">
            <i className="fa-solid fa-paintbrush"></i>
            Artsy Video
          </h2>
        </Link>
      </div>

      <div className="flex-align-center right-side">
        {/* avatar */}

        {isUserLoggedIn ? (
          <LoggedInAvatar></LoggedInAvatar>
        ) : (
          <Link to="/sign-in" className="user">
            <i className="fa-regular fa-user"></i>
          </Link>
        )}
        {/* toogle btn */}
        <i
          className={`fa-solid ${!darkMode ? "fa-moon" : "fa-sun"}`}
          onClick={() => setDarkMode((prev) => !prev)}
        ></i>
      </div>
    </header>
  );
};