import "./header.css";
import { Link } from "react-router-dom";
import { useTheme, useUserContext } from "../../context";
import { LoggedInAvatar, Search } from "./components";

export const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { isUserLoggedIn } = useUserContext();
  return (
    <header className="header">
      <div>
        {/* logo */}
        <h2>
          <i className="fa-solid fa-paintbrush"></i>
          Artsy Video
        </h2>
      </div>

      <div className="header_menu">
        <Search />
        {/* <div className="menu_item">
          <span>Home</span>
        </div>
        <div className="menu_item">
          <span>Watchlist</span>
        </div>
        <div className="menu_item">
          <span>Search</span>
        </div> */}
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
