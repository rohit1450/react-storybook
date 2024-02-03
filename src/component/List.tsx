import React, { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface Person {
    id: number;
    name: string;
    unavailable: boolean;
}

export interface ListProps {
    people: Person[];
    multiple?: boolean;
}


const List: React.FC<ListProps> = ({ people, multiple }) => {
    const [selected, setSelected] = useState(multiple ? [] : people[0]);
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
        <div className="fixed top-16 w-96">
            <Listbox value={selected} onChange={setSelected} multiple={multiple}>
                <div className="relative mt-1">
                    <Listbox.Button
                        className="relative w-full rounded-lg py-2 pl-3 pr-10 text-left shadow-md border hover:border-blue-500 sm:text-sm"
                        onClick={handleOpen}
                    >
                        <span className="block">
                            {multiple && (selected as Person[]).length > 0
                                ? (selected as Person[]).map((person) => (
                                    <span key={person.id} className="inline-block mr-2 mb-1 border rounded-lg ps-2 pr-1 bg-blue-200">
                                        <span className="flex items-center">
                                            {person.name}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemove(person.id);
                                                }}
                                                className="cursor-pointer text-blue-800 ml-1"
                                            >
                                                <XMarkIcon className="h-4 w-4 pt-0.5" />
                                            </button>
                                        </span>
                                    </span>
                                ))
                                : (selected as Person)?.name || 'Select an option'}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            {open ? (
                                <ChevronUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            )}
                        </span>
                    </Listbox.Button>
                    <Transition
                        show={open}
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Listbox.Options
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base sm:text-sm border border-gray-300 hover:border-gray-400"
                        >
                            {people.map((person, personIdx: number) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'}`
                                    }
                                    value={person}
                                    disabled={person.unavailable}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{person.name}</span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
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
