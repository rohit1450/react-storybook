import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import "@storybook/addon-console";

interface Person {
  id: number;
  name: string;
  unavailable: boolean;
  icon: React.ReactNode;
}

export interface ListProps {
  people: Person[];
  multiple?: boolean;
  labelIcon?: boolean;
}

const List: React.FC<ListProps> = ({ people, multiple, labelIcon }) => {
  const [selected, setSelected] = useState<Person | Person[]>([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleRemove = (id: number) => {
    setSelected((prevSelected) => {
      if (Array.isArray(prevSelected)) {
        return prevSelected.filter((person) => person.id !== id);
      } else {
        return multiple ? [] : people[0];
      }
    });
  };

  return (
    <div className="py-16 w-11/12 sm:w-96">
      <Listbox
        value={selected}
        onChange={(val) => {
          setSelected(val);
          if (!multiple) setOpen(!open);
        }}
        multiple={multiple}
      >
        <div className="relative mt-1">
          <Listbox.Button
            className="flex items-center relative p-2 w-full rounded-lg py-2 pl-3 pr-10 text-left shadow-md border border-gray hover:border-blue-prime sm:text-sm"
            onClick={handleOpen}
            onFocus={() => {
              multiple && setOpen(false);
            }}
          >
            {!multiple && labelIcon && (
              <span className={`mb-2p`}>{selected.icon}</span>
            )}
            <span className="block">
              {multiple && (selected as Person[]).length > 0
                ? (selected as Person[]).map((person) => (
                    <span
                      key={person.id}
                      className="inline-block mr-2 mb-1 rounded-lg ps-2 pr-1 bg-blue-light2"
                    >
                      <span className="flex items-center">
                        {labelIcon && person.icon}
                        {person.name}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemove(person.id);
                          }}
                          className="cursor-pointer  ml-1"
                        >
                          <XMarkIcon className="h-4 w-4 pt-0.5" />
                        </button>
                      </span>
                    </span>
                  ))
                : (selected as Person)?.name || "Select an option"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              {open ? (
                <ChevronUpIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              )}
            </span>
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base sm:text-sm border border-none shadow-lg hover:border-blue-prime">
              {people.map((person, personIdx: number) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-blue-light2 text-blue-dark" : ""}`
                  }
                  value={person}
                  disabled={person.unavailable}
                >
                  {({ selected }) => (
                    <>
                      <div
                        className={`flex items-center truncate ${selected ? "font-medium" : "font-normal"}`}
                      >
                        <div>{labelIcon && person.icon}</div>
                        <div>{person.name}</div>
                      </div>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default List;
