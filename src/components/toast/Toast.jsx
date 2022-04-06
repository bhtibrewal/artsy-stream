import "./toast.css";
import { useToast } from "../../context";
import { useEffect } from "react";

export const Toast = ({ position }) => {
  const { toastList, deleteToast } = useToast();

  useEffect(() => {
    const iterval = setInterval(() => {
      if (toastList.length) deleteToast(toastList[0].id);
    }, 3000);
    return () => clearInterval(iterval);
  }, [toastList]);
  const getIcon = (type) => {
    switch (type) {
      case "success":
        return "fa-circle-check";
      case "error":
        return "fa-circle-exclamation"
    }
  };
  return (
    <div className={`toast-container ${position}`}>
      {toastList.map((toast) => {
        const { title, type, id } = toast;
        return (
          <div key={id} className={`toast toast-${type} `}>
            <i className={`fa-solid ${getIcon(type)} toast-icon`}></i>
            <span className="toast-title">{title}</span>
            <button
              className="btn toast-close-btn"
              onClick={() => deleteToast(id)}
            >
              <i className="fa-solid fa-xmark fa-xl"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};
