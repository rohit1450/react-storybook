import React from "react";
import { twMerge } from "tailwind-merge";
import { CSSProperties } from "react";

export interface InputProps {
  type: "text" | "number" | "email" | "password" | "date" | "time" | "datetime-local" | "file" | "image";
  placeholder?: string;
  className: '';
  src: string;
  height?: string;
  width?: string;
}

const getImageStyle = (height: string, width: string): CSSProperties => ({
  height: height ? `${height}px` : '',
  width: width ? `${width}px` : '',
  border: 'none',
  boxShadow: 'none'
});

const Input: React.FC<InputProps> = ({ type, placeholder = "", className, src, height, width }) => {
  return (
    <div className="sm:w-96 py-16 w-11/12">
      <input
        type={type}
        placeholder={placeholder}
        src={type === 'image' ? src : ''}
        style={type === 'image' ? getImageStyle(height, width) : undefined}
        className={twMerge("focus:outline-none p-2 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime", className)}
      />
    </div>
  );
};

export default Input;
