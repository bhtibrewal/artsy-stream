import { Link } from "react-router-dom";
import { useToast, useUserContext, useVideoState } from "../../../context";
import { logout } from "../../../services";
export const LoggedInAvatar = () => {
  const { setIsUserLoggedIn, userDataDispatch } = useUserContext();
  const { videoStateDispatch } = useVideoState();
  const { showToast } = useToast();
  return (
    <div className="user">
      <div className="avatar avatar-s">
        <img
          src="https://media.istockphoto.com/vectors/man-artist-painting-autumn-tree-landscape-in-the-park-isolated-vector-vector-id1058684612?k=20&m=1058684612&s=612x612&w=0&h=edHBtI190lKLq_a0YbCWSliJ_FyHsPcysvOZ6fK_Ap0="
          alt="avatar"
        />
      </div>
      <div className="user-dropdown flex-col">
        <Link to="/user-profile" className="flex-align-center">
          <span>My Account</span>
          <i className="fa-solid fa-angle-right"></i>
        </Link>
        <div
          className="flex-align-center"
          onClick={() =>
            logout({
              setIsUserLoggedIn,
              userDataDispatch,
              videoStateDispatch,
              showToast,
            })
          }
        >
          <span>Logout</span>
          <i className="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};
