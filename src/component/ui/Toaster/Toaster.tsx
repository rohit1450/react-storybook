import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button, { ButtonProps } from "../Button/Button";
import { twMerge } from "tailwind-merge";

export interface ToasterProps {
  type: "info" | "success" | "warning" | "error" | "default";
  id: string;
  position:
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  autoClose: number;
  hideProgressBar: boolean;
  newestOnTop: boolean;
  closeOnClick: boolean;
  rtl: boolean;
  pauseOnFocusLoss: boolean;
  draggable: boolean;
  pauseOnHover: boolean;
  button: ButtonProps;
  theme: "light" | "dark" | "colored";
  transition: string;
  notifyText: string;
  classContainer: string;
}

const Toaster: React.FC<ToasterProps> = ({
  id,
  classContainer,
  position,
  notifyText,
  button,
  type,
  autoClose,
  hideProgressBar,
  newestOnTop,
  closeOnClick,
  rtl,
  pauseOnFocusLoss,
  draggable,
  pauseOnHover,
  theme,
}) => {
  const notify = () => toast(notifyText, { type, containerId: id });
  const getStyles = () => {
    switch (type) {
      case "info":
        return "bg-Primary text-white";
      case "error":
        return "bg-danger text-white";
      case "success":
        return "bg-success text-white";
      case "warning":
        return "bg-warning text-black hover:text-white";
      case "default":
        return "bg-secondary text-white";
      default:
        return "bg-red text-white";
    }
  };
  const { buttonType, color, label, onClick } = button;
  const buttonClassName = getStyles();
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClick && onClick(event);
    notify();
  };

  return (
    <div className={twMerge("h-40", classContainer)}>
      <div>
        <Button
          buttonType={buttonType}
          color={color}
          label={label}
          className={buttonClassName}
          onClick={handleClick}
          isLoading={false}
        />
      </div>
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={newestOnTop}
        closeOnClick={closeOnClick}
        rtl={rtl}
        pauseOnFocusLoss={pauseOnFocusLoss}
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme={theme}
        containerId={id}
        className="xxs:!w-11/12 sm:!w-72"
      />
    </div>
  );
};

export default Toaster;
