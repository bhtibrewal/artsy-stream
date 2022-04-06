import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context";
import { sidebar } from "./data/sidebar";

export const Sidebar = () => {
  const { isUserLoggedIn } = useUserContext();
  return (
    <aside className={`aside product_page-aside `}>
      {sidebar.map((item) => {
        const { route, name, type, icon, id } = item;
        return (
          <NavLink
            to={
              type === "private" ? (isUserLoggedIn ? route : "/sign-in") : route
            }
            key={id}
            className={({ isActive }) =>
              isActive ? "aside-item active " : "aside-item"
            }
          >
            <i className={`fa-solid ${icon} aside-icon`}></i>
            <p className="aside-text">{name}</p>
          </NavLink>
        );
      })}
    </aside>
  );
};
