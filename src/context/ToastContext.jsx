import { v4 as uuid } from "uuid";
import { createContext, useContext, useReducer, useCallback } from "react";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  
  const toastListReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TOAST":
        return [...state, { id: uuid(), ...payload }];
      case "DELETE_TOAST":
        return state.filter((toast) => toast.id !== payload);
      default:
        return state;
    }
  };

  const [toastList, toastListDispatch] = useReducer(toastListReducer, []);

  const deleteToast = useCallback(
    (toastId) => {
      toastListDispatch({ type: "DELETE_TOAST", payload: toastId });
    },
    [toastList]
  );
  const showToast = (toastObj) => {
    toastListDispatch({ type: "ADD_TOAST", payload: toastObj });
  };
  return (
    <ToastContext.Provider value={{ toastList, deleteToast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
};
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error(`use useToast must be used inside a context provider`);
  }
  return context;
};

export { ToastProvider, useToast };
