import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { CSSProperties } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    | "image"
    | "datePicker"
    | "dateRange";
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
  showTimeSelect: boolean;
  timeCaption: string;
  dateFormat: string;
  timeFormat: string;
  showIcon: boolean;
  placeholderText: string;
  isClearable: boolean;
  containerClassName: string;
  closeOnScroll: boolean;
  showYearDropdown: boolean;
  yearDropdownItemNumber: number;
  withPortal: boolean;
  rangeClass: string;
  rangeOneClass: string;
  rangeTwoClass: string;
  pickerIcon: () => JSX.Element;
}

const getImageStyle = (
  height: string = "",
  width: string = ""
): CSSProperties => ({
  height: height ? `${height}px` : "",
  width: width ? `${width}px` : "",
  border: "none",
  boxShadow: "none",
});

const Input: React.FC<InputProps> = ({
  type,
  placeholder = "",
  className = "",
  src,
  height,
  width,
  showTimeSelect,
  timeCaption,
  dateFormat,
  timeFormat,
  showIcon,
  placeholderText,
  isClearable,
  containerClassName,
  closeOnScroll,
  showYearDropdown,
  yearDropdownItemNumber,
  withPortal,
  rangeClass,
  rangeOneClass,
  rangeTwoClass,
  pickerIcon,
}) => {
  const [data, setData] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startDates, setStartDates] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = event.target.value;

    setData(value);

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

    const containsNumber = /\d/.test(value);

    if (type === "number") {
      if (containsNumber) {
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

    const containsPassword =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(value);

    if (type === "password") {
      if (containsPassword) {
        event.target.style.borderColor = "green";
      } else if (value === "") {
        event.target.style.borderColor = "";
      } else {
        event.target.style.borderColor = "red";
      }
    }
  };

  if (type === "datePicker") {
    const setting = {
      showTimeSelect,
      timeFormat,
      timeIntervals: 15,
      timeCaption,
      dateFormat,
      className,
      showIcon,
      icon: pickerIcon(),
      placeholderText,
      isClearable,
      closeOnScroll,
      showYearDropdown,
      yearDropdownItemNumber,
      withPortal,
    };
    return (
      <div className={containerClassName}>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          {...setting}
        />
      </div>
    );
  }

  if (type === "dateRange") {
    const settingOne = {
      selected: startDates,
      onChange: (date: Date) => setStartDates(date),
      selectsStart: true,
      startDate: startDates,
      endDate: endDate,
      className: rangeOneClass,
      dateFormat: "MMMM d, yyyy",
    };

    const settingTwo = {
      selected: endDate,
      onChange: (date: Date) => setEndDate(date),
      selectsEnd: true,
      startDate: startDates,
      endDate: endDate,
      minDate: startDates,
      className: rangeTwoClass,
      dateFormat: "MMMM d, yyyy",
    };

    return (
      <>
        <div className={rangeClass}>
          <div>
            <DatePicker {...settingOne} />
          </div>
          <div>
            <DatePicker {...settingTwo} />
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="sm:w-96 py-16 w-11/12">
      {type === "image" ? (
        <img
          src={src || ""}
          alt={placeholder || ""}
          style={getImageStyle(height || "", width || "")}
          className={className}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={twMerge(
            "focus:outline-none p-2 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime",
            className
          )}
          onChange={handleChange}
          value={data}
        />
      )}
    </div>
  );
};

export default Input;
