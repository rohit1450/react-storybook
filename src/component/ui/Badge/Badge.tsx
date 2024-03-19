import React from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps {
  label: string;
  type: "primary" | "secondary" | "success" | "warning" | "danger";
  className: string;
  count: number;
}

const Badge: React.FC<BadgeProps> = ({ label, type, className, count }) => {
  const getStyles = () => {
    switch (type) {
      case "primary":
        return "bg-Primary text-white";
      case "secondary":
        return "bg-secondary text-white";
      case "success":
        return "bg-success text-white";
      case "warning":
        return "bg-warning text-black";
      case "danger":
        return "bg-danger text-white";
      default:
        return "bg-red text-white";
    }
  };
  return (
    <div className={`relative inline-block bg-gray text-sm p-2 m-1 rounded-lg`}>
      <span className="text-texts">{label}</span>
      <span
        className={twMerge(
          `absolute -top-3 -right-3 px-2 -py-1 ${getStyles()} rounded-full`,
          className
        )}
      >
        {count}
      </span>
    </div>
  );
};

export default Badge;
