import { useState, useEffect, useRef } from "react";
import { ToastContext } from "./ToastContext";

const ToastProvider = ({ children }) => {
  const toastTimeoutRef = useRef(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    // Remove previous timer if one exists
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast({
      show: true,
      message,
      type,
    });

    toastTimeoutRef.current = setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));

      toastTimeoutRef.current = null;
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const value = {
    toast,
    setToast,
    showToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
