import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { sidebar } from "./data/sidebar";

export const Sidebar = () => {
  return (
    <aside className={`aside product_page-aside `}>
      {sidebar.map((item) => {
        const { route, name, type, icon, id } = item;
        return (
          <NavLink
            to={route}
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
