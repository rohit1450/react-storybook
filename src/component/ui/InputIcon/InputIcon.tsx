import React, { BaseSyntheticEvent, useState } from "react";

export interface InputIconProps {
  type: "text" | "email";
  placeholder?: string;
  hasIcon: boolean;
  icon?: React.ElementType;
  animate: boolean;
  animateLabel?: string;
  disable: boolean;
  textarea?: boolean;
}

const InputIcon = ({
  type,
  placeholder,
  icon: IconOne,
  hasIcon,
  animate,
  animateLabel,
  disable,
  textarea,
}: InputIconProps) => {
  const [text, setText] = useState("");

  const handleChange = (event: BaseSyntheticEvent) => {
    const value: any = event.target.value;

    setText(value);

    const regex: RegExp = /^[a-zA-Z]+$/;

    if (type === "text") {
      if (regex.test(value) || isNaN(Number(value))) {
        event.target.style.borderColor = "green";
      } else if (value === "") {
        event.target.style.borderColor = "";
      } else {
        event.target.style.borderColor = "red";
      }
    }

    const containsEmail =
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(value);

    if (type === "email") {
      if (containsEmail) {
        event.target.style.borderColor = "green";
      } else if (value === "") {
        event.target.style.borderColor = "";
      } else {
        event.target.style.borderColor = "red";
      }
    }
  };

  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        cols={50}
        rows={5}
        className="focus:outline-none p-2 rounded-md border border-gray shadow-lg hover:border-blue-prime"
        value={text}
        onChange={handleChange}
      ></textarea>
    );
  }

  return (
    <>
      {animate ? (
        <div className="sm:w-96 w-3/4 relative group mt-10">
          <input
            type="text"
            id="username"
            required
            className={`w-full h-10 px-4 text-sm focus:outline-none p-2 rounded-md border border-gray shadow-lg hover:border-blue-prime`}
            value={text}
            onChange={handleChange}
          />
          <label
            htmlFor="username"
            className="transform transition-all duration-300 absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-sm peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            {animateLabel}
          </label>
        </div>
      ) : (
        <div className="flex flex-wrap space-x-2 sm:w-96 w-11/12 relative">
          {hasIcon && (
            <div className="rounded-md absolute left-4 top-[9px]">
              {IconOne && <IconOne />}
            </div>
          )}

          <input
            type={type}
            placeholder={placeholder}
            disabled={disable}
            className={`focus:outline-none p-1 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime
              ${hasIcon && "ps-8 pt-1"} ${!hasIcon && "ps-2"}`}
            value={text}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default InputIcon;
