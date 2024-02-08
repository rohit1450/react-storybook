import React from "react";

export interface InputIconProps {
  type: "text";
  placeholder?: string;
  value?: string;
  hasIcon: boolean;
  icon?: React.ElementType;
  defaultBorder: boolean;
  animate: boolean;
  animateLabel?: string;
  disable: boolean;
  textarea?: boolean;
}

const InputIcon = ({
  type,
  value,
  placeholder,
  icon: IconOne,
  hasIcon,
  defaultBorder,
  animate,
  animateLabel,
  disable,
  textarea,
}: InputIconProps) => {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        cols={50}
        rows={5}
        className={`p-1 outline-none ${defaultBorder ? "border-2 rounded-md" : "border-b-2 border-black"}`}
      >
        {value}
      </textarea>
    );
  }
  return (
    <>
      {animate ? (
        <div className="w-56 relative group mt-10">
          <input
            type="text"
            id="username"
            required
            className={`w-full h-10 px-4 text-sm peer bg-gray-100 outline-none ${defaultBorder ? "border-2 rounded-md" : "border-b-2 border-black"}`}
          />
          <label
            htmlFor="username"
            className="transform transition-all duration-300 absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-sm peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
          >
            {animateLabel}
          </label>
        </div>
      ) : (
        <div className="flex flex-wrap space-x-2">
          {hasIcon && (
            <div className="px-3 pt-2 w-10 rounded-md  absolute left-5">
              {IconOne && <IconOne />}
            </div>
          )}
          <div>
            <input
              type={type}
              value={value}
              placeholder={placeholder}
              disabled={disable}
              className={`w-full outline-none p-1 ${defaultBorder ? "border-2 rounded-md" : "border-b-2 border-black"} ${disable && "bg-disable rounded"} ${hasIcon && "ps-10"}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default InputIcon;
