import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import Button, { ButtonProps } from "../Button/Button";

export interface ModalProps {
  button: ButtonProps;
  handleOpen: () => void;
  handleClose: () => void;
  initialIsOpen: boolean;
  buttonName: string;
  ModalContent: any;
}

const Modal: React.FC<ModalProps> = ({
  button,
  handleOpen,
  handleClose,
  initialIsOpen,
  ModalContent,
}) => {
  const { buttonType, color, label, isLoading, disabled, className } = button;
  return (
    <>
      <div className="py-16 flex items-center justify-center">
        <div onClick={handleOpen}>
          <Button
            buttonType={buttonType}
            color={color}
            label={label}
            isLoading={isLoading}
            disabled={disabled}
            className={className}
          />
        </div>
      </div>

      <Transition appear show={initialIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-dark" />
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
                      onClick={handleClose}
                    >
                      <XMarkIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <ModalContent />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
