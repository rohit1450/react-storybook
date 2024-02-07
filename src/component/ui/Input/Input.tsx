import React from "react";
import { ArrowDownLeftIcon } from "@heroicons/react/20/solid";

export interface InputProps {
  type: "text" | "number";
  placeholder?: string;
  label?: string;
  ExtraProp?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder = "",
  label = "label text",
  ExtraProp = "",
}) => {
  return (
    <div
      className={`sm:w-96 py-16 w-11/12 ${ExtraProp === "icon" && "flex p-2"}`}
    >
      {ExtraProp === "label" && <label>{label}</label>}
      {ExtraProp === "icon" && <ArrowDownLeftIcon className="h-12 w-12" />}
      {ExtraProp === "text area" ? (
        <textarea
          rows={4}
          cols={100}
          className="border border-gray shadow-lg p-2 outline-none rounded-xl"
          placeholder="enter text ..."
        ></textarea>
      ) : (
        <input
          type={type}
          disabled={ExtraProp === "disable"}
          placeholder={placeholder}
          className={`focus:outline-none  p-2 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime ${ExtraProp === "disable" && "bg-grey-light"}`}
        />
      )}
    </div>
  );
};

export default Input;
