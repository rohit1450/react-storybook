import React from "react";
import { twMerge } from "tailwind-merge";
export interface ButtonProps {
  label: string;
  buttonType: "primary" | "secondary" | "disabled" | "loading";
  color?: "black" | "white";
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  className: string;
  onClick: React.MouseEventHandler;
  loading: boolean;
  checkIcon: any;
}

const Button: React.FC<ButtonProps> = ({
  color = "black",
  icon: Icon,
  onClick,
  label,
  buttonType,
  disabled,
  className,
  loading,
  checkIcon,
}) => {
  const primaryClass = `bg-blue-dark text-${color} hover:bg-blue-dark/[0.90]`;
  const secondaryClass =
    "bg-white hover:bg-gray-dark/[0.20] border border-black text-black";
  const disabledClass = `opacity-50 text-${color}`;
  const commonClass = `bg-blue-dark text-${color} p-2 rounded-md`;

  return (
    <div className="">
      <button
        className={twMerge(
          `flex gap-1 items-center ${buttonType === "primary" && !disabled ? primaryClass : commonClass}
                            ${buttonType === "secondary" && !disabled ? secondaryClass : commonClass}
                            ${buttonType === "disabled" ? disabledClass : ""}`,
          className
        )}
        type={buttonType === "loading" ? "button" : undefined}
        disabled={disabled}
        onClick={onClick}
      >
        {Icon ? loading ? checkIcon() : <Icon /> : null}
        <div>{label}</div>
      </button>
    </div>
  );
};

export default Button;
