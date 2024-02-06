
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import React, { Fragment, useState } from 'react';
import Button, { ButtonProps } from '../Button/Button';

export interface ModalProps {

}

const Modal: React.FC<ButtonProps> = ({ primary = 'true', color = 'white', lable = 'open dialogue' }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="py-16 flex items-center justify-center">
                <div onClick={openModal}>
                    <Button primary={primary} color={color} lable={lable} />
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/[0.80]" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-end ">
                                        <button
                                            type="button"
                                            className="absolute top-2 right-2 rounded-full px-1 py-1 border text-red hover:text-red[0.90] focus:outline-none"
                                            onClick={closeModal}
                                        >
                                            <XMarkIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg pt-5 font-medium leading-6 text-gray-900"
                                    >
                                        Lorem ipsum
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking at its layout.
                                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                            as opposed to using 'Content here, content here', making it look like readable English.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="rounded-md border border-transparent bg-blue px-4 py-2 text-sm font-medium text-white hover:bg-blue-light focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-prime focus-visible:ring-offset-2"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </Dialog.Panel>

                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}


export default Modal