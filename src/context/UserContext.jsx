import { createContext, useContext } from "react";
import { useUserData } from "../custom_hooks/useUserData";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const userObj = useUserData();
  return (
    <UserContext.Provider value={{ ...userObj }}>
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      `use useUserContext must be used inside a context provider`
    );
  }
  return context;
};
export { UserContextProvider, useUserContext };
