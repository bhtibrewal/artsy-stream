import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context";

export const AuthRoutes = () => {
  const { isUserLoggedIn } = useUserContext();
  return !isUserLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
