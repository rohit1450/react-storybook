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
  rangeClass: string;
  rangeOneClass: string;
  rangeTwoClass: string;
  pickerIcon: () => JSX.Element;
  minDate: string;
  maxDate: string;
  getDate: (date: any) => void;
  getStartDate: (date: any) => void;
  getEndDate: (date: any) => void;
  locale: string;
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
  dateFormat = "MMMM d, yyyy",
  timeFormat,
  showIcon,
  placeholderText,
  isClearable,
  containerClassName,
  closeOnScroll,
  showYearDropdown,
  yearDropdownItemNumber,
  rangeClass,
  rangeOneClass,
  rangeTwoClass,
  pickerIcon,
  minDate,
  maxDate,
  getDate,
  getStartDate,
  getEndDate,
  locale,
}) => {
  const [data, setData] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
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
      selected: startDate,
      onChange: (date: Date) => {
        setStartDate(new Date(date.toISOString()));
        getDate({
          date: date.toISOString(),
        });
      },
      showTimeSelect,
      timeFormat: timeFormat ?? "HH:mm",
      timeIntervals: 15,
      timeCaption: timeCaption ?? "time",
      dateFormat: dateFormat ?? "MMMM d, yyyy",
      className: twMerge(
        "focus:outline-none p-2 rounded-md w-full border border-gray shadow-lg hover:border-blue-prime dark:bg-red",
        className
      ),
      showIcon: showIcon ?? true,
      icon: pickerIcon() ?? null,
      placeholderText: placeholderText ?? "select date",
      isClearable: isClearable ?? false,
      closeOnScroll: closeOnScroll ?? false,
      showYearDropdown,
      yearDropdownItemNumber,
      minDate: minDate ?? null,
      maxDate: maxDate ?? null,
      locale: locale ?? "",
    };

    return (
      <div className={containerClassName}>
        <DatePicker {...setting} />
      </div>
    );
  }

  if (type === "dateRange") {
    const settingOne = {
      selected: startDates,
      onChange: (date: Date) => {
        setStartDates(date);
        getStartDate({
          start: date.toISOString(),
        });
      },
      selectsStart: true,
      startDate: startDates,
      endDate: endDate,
      className: rangeOneClass,
      dateFormat: "MMMM d, yyyy",
      placeholderText: "please select start date",
    };

    const settingTwo = {
      selected: endDate,
      onChange: (date: Date) => {
        getEndDate({
          end: date.toISOString(),
        });
        setEndDate(date);
      },
      selectsEnd: true,
      startDate: startDates,
      endDate: endDate,
      minDate: startDates,
      className: rangeTwoClass,
      dateFormat: "MMMM d, yyyy",
      placeholderText: "please select end date",
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
