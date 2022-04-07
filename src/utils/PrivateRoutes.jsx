import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../context";
export const PrivateRoutes = () => {
  const location = useLocation();
  const { isUserLoggedIn } = useUserContext();
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};
