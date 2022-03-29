import "./header.css";
import { useNavigate } from "react-router-dom";
import { useTheme, useUserContext } from "../../context";
import { Search } from "./components";

export const Header = () => {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useTheme();
  const { loginState } = useUserContext();
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

        {loginState ? (
          <div className="avatar avatar-s">
            <img
              src="https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0="
              alt="avatar"
            />
          </div>
        ) : (
          <div onClick={() => navigate("/sign-in")} className="user">
            <i className="fa-regular fa-user"></i>
          </div>
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
