import "./sidebar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context";
const sidebar = [
  {
    id: 1,
    name: "Home",
    type: "public",
    route: "/",
    icon: "fa-house",
  },
  {
    id: 2,
    name: "Explore",
    type: "public",
    route: "/videos",
    icon: "fa-play",
  },
  {
    id: 3,
    name: "Playlists",
    type: "private",
    route: "/playlists",
    icon: "fa-folder-plus",
  },
  {
    id: 4,
    name: "Liked Videos",
    type: "private",
    route: "/likes",
    icon: "fa-heart",
  },
  {
    id: 5,
    name: "Watch Later",
    type: "private",
    route: "/watch-later",
    icon: "fa-bookmark",
  },
  {
    id: 6,
    name: "History",
    type: "private",
    route: "/history",
    icon: "fa-clock-rotate-left",
  },
];

export const Sidebar = () => {
  const { isUserLoggedIn } = useUserContext();
  return (
    <aside className="aside product_page-aside">
      {sidebar.map((item) => {
        const { route, name, type, icon, id } = item;
        return (
          <Link
            to={
              type === "private" ? (isUserLoggedIn ? route : "/sign-in") : route
            }
            key={id}
            className="aside-item"
          >
            <i className={`fa-solid ${icon}`}></i>
            <span>{name}</span>
          </Link>
        );
      })}
    </aside>
  );
};
{
  /* <i className="fa-regular fa-thumbs-up"></i> */
  /* <i class="fa-solid fa-expand"></i> */
  /* <i class="fa-solid fa-compress"></i> */
}
