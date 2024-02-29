import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CSSProperties } from "react";
import Info from "../Info/Info";
import Button from "../Button/Button";

export interface InputProps {
  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "time"
    | "datetime-local"
    | "file"
    | "image";
  placeholder?: string;
  className?: string;
  src?: string;
  height?: string;
  width?: string;
  title?: string;
  size?: string;
  bgcolor?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";
  icon?: React.ElementType;
  iconeye?: React.ElementType;
  iconOffeye?: React.ElementType;
  label?: string;
  labelName?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  iconeye: Eye,
  iconOffeye: OffEye,
  placeholder = "",
  className = "",
  src = "",
  height,
  width,
  icon,
  title,
  size,
  bgcolor = "black",
  tooltipPosition,
  label,
  labelName,
}) => {
  const [value, setValue] = useState<string | number>("");
  const [renter, setRenter] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRenterPassword, setShowRenterPassword] = useState<boolean>(false);
  const [changeEyeColor, setEyeColor] = useState<boolean>(false);
  const [renterChangeEyeColor, setRenterEyeColor] = useState<string>("");
  const [reset, setReset] = useState<boolean>(false);

  const getImageStyle = (height: string, width: string): CSSProperties => ({
    height: height ? `${height}px` : "",
    width: width ? `${width}px` : "",
    border: "none",
    boxShadow: "none",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (type === "password" && isNaN(Number(inputValue))) {
      event.target.style.borderColor = "red";
      setEyeColor(true);
    } else if (type === "email" && !emailPattern.test(inputValue)) {
      event.target.style.borderColor = "red";
    } else {
      event.target.style.borderColor = "yellow";
      setEyeColor(false);
    }
    setValue(inputValue);
    if (renter !== inputValue) {
      setError("Passwords are not same");
    } else {
      setError("Password match");
    }
    if (inputValue === "") setError("");
  };

  const visiblePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRenter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setRenter(val);
    val !== value
      ? setError("Passwords are not same")
      : setError("Password match");
    if (val === "") setError("");
    if (!isNaN(Number(val))) {
      e.target.style.borderColor = "yellow";
      setRenterEyeColor("black");
    } else {
      e.target.style.borderColor = "red";
      setRenterEyeColor("red");
    }
  };

  return (
    <div className="relative w-1/3">
      <div className="flex justify-between ">
        <div className=" flex gap-2">
          <div>
            <label
              className="text-base font-serif font-semibold"
              htmlFor={type}
            >
              {label}
            </label>
          </div>

          <div className="mt-0.5 ">
            <Info
              icon={icon}
              title={title}
              bgColor={bgcolor}
              size={size}
              tooltipPosition={tooltipPosition}
            />
          </div>
        </div>
        <div className="mt-1">
          <label className="text-xs text-gray-dark " htmlFor={type}>
            {labelName}
          </label>
        </div>
      </div>

      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          src={type === "image" ? src : ""}
          style={{... type === "image" ? getImageStyle(height, width) : undefined , borderColor: `${reset ? "black" : ""}`}}
          className={twMerge(
            `focus:outline-none p-1 rounded-md w-full border ${reset ? "border-black" : null}`,
            className
          )}
          onChange={handleChange}
          value={value}
        />
        {changeEyeColor && (
          <div style={{ color: "red" }}>
            {Eye && !showPassword && (
              <button
                className="absolute inset-y-0 right-0 px-3"
                onClick={visiblePassword}
              >
                <Eye size={size} />
              </button>
            )}
            {OffEye && showPassword && (
              <button
                className="absolute inset-y-0 right-0 px-3"
                onClick={visiblePassword}
              >
                <OffEye size={size} />
              </button>
            )}
          </div>
        )}

        {!changeEyeColor && (
          <div style={{ color: "black" }}>
            {Eye && !showPassword && (
              <button
                className="absolute inset-y-0 right-0 px-3"
                onClick={visiblePassword}
              >
                <Eye size={size} />
              </button>
            )}
            {OffEye && showPassword && (
              <button
                className="absolute inset-y-0 right-0 px-3"
                onClick={visiblePassword}
              >
                <OffEye size={size} />
              </button>
            )}
          </div>
        )}
      </div>

      {type === "password" && (
        <div className="relative mt-4">
          <div className="flex justify-between ">
            <div className=" flex gap-2">
              <div>
                <label
                  className="text-base font-serif font-semibold"
                  htmlFor={type}
                >
                  Renter {label}
                </label>
              </div>

              <div className="mt-0.5 ">
                <Info
                  icon={icon}
                  title={title}
                  bgColor={bgcolor}
                  size={size}
                  tooltipPosition={tooltipPosition}
                />
              </div>
            </div>
            <div className="mt-1">
              <label className="text-xs text-gray-dark " htmlFor={type}>
                {labelName}
              </label>
            </div>
          </div>
          <input
            type={showRenterPassword ? "text" : type}
            placeholder={placeholder}
            style={{borderColor: `${reset ? "black" : ""}`}}
            className={twMerge(
              `focus:outline-none p-1 rounded-md w-full border`,
              className
            )}
            onChange={handleRenter}
            value={renter}
          />
          <div style={{ color: renterChangeEyeColor }}>
            {Eye && !showRenterPassword && (
              <button
                className="absolute top-9 right-0 px-3"
                onClick={() => setShowRenterPassword(!showRenterPassword)}
              >
                <Eye size={size} />
              </button>
            )}
            {OffEye && showRenterPassword && (
              <button
                className="absolute top-9 right-0 px-3"
                onClick={() => setShowRenterPassword(!showRenterPassword)}
              >
                <OffEye size={size} />
              </button>
            )}
          </div>
        </div>
      )}

      {type ==="password" && error !== "" && (
        <div className="font-serif font-semibold mt-2">{error}</div>
      )}
      {type === "password" && (
        <Button
          onClick={() => {
            setValue("");
            setRenter("");
            setError("");
            setEyeColor(false);
            setRenterEyeColor("black");
            setReset(true);
          }}
          buttonType="primary"
          label="Reset Password"
          color="white"
          className="mt-5 px-32 w-full"
          disabled={renter !== value || renter=== "" || value===""}
        ></Button>
      )}
    </div>
  );
};

export default Input;
