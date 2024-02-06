import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface Person {
    id: number;
    name: string;
}

export interface SearchProps {
    people: Person[];
    multiple?: boolean;
}

const Search: React.FC<SearchProps> = ({ people, multiple }) => {
    const [selected, setSelected] = useState<Person | Person[]>(multiple ? [] : people[0]);
    const [query, setQuery] = useState('');
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

    const filteredPeople = people.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="py-16 sm:w-96 w-11/12">
            <Combobox value={selected} onChange={setSelected} multiple={multiple}>
                <div className="relative mt-1" >
                    <div className="relative p-2 w-full flex cursor-default overflow-hidden rounded-md text-left shadow-md sm:text-sm  border border-gray hover:border-blue-prime">
                        {multiple && Array.isArray(selected) && selected.length > 0 ? (
                            <div className="flex flex-wrap items-center">
                                {selected.map((person) => (
                                    <span
                                        key={person.id}
                                        className="inline-block mb-1 rounded-lg ps-2 pr-1 bg-blue-light2 mr-2"
                                    >
                                        <span className="flex items-center">
                                            {person.name}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemove(person.id);
                                                }}
                                                className="cursor-pointer ml-1 focus:outline-none"
                                            >
                                                <XMarkIcon className="h-4 w-4 pt-0.5" />
                                            </button>
                                        </span>
                                    </span>
                                ))}

                                <Combobox.Input
                                    className="w-full py-1 pl-3 pr-10 text-sm text-blue focus:outline-none"
                                    value={query}
                                    placeholder='Search'
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>
                        ) : (

                            <Combobox.Input
                                className="w-full py-1 pl-3 pr-10 text-sm text-blue focus:outline-none"
                                value={(selected as Person)?.name || ''}
                                placeholder='Search'
                                onChange={(event) => setQuery(event.target.value)}
                            />

                        )}
                        <Combobox.Button className="flex  items-center right-0" onClick={handleOpen}>
                            {open ? (
                                <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                            )}
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2">Nothing found.</div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-blue-light2 text-blue-dark' : ''}`
                                        }
                                        value={person}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}
export default Search;