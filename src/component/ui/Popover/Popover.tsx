import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export interface PopoverProps {
  footerTitle?: string;
  footerText?: string;
  btnTitle?: ReactElement | string;
  className?: string;
  panelClass?: string;
  arrowClass?: string;
  PopContent: () => JSX.Element;
}

const Pop: React.FC<PopoverProps> = ({
  className,
  panelClass,
  arrowClass,
  btnTitle,
  PopContent,
}: PopoverProps) => {
  return (
    <div className="sm:w-96 w-11/12 max-w-sm ">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={twMerge(
                `
                ${open ? "text-white" : "text-white/90"}
                group inline-flex items-center rounded-md bg-red px-3 py-2 text-base font-medium hover:text-white`,
                className
              )}
            >
              <span>{btnTitle}</span>
              <ChevronDownIcon
                className={twMerge(`ml-1 h-5 w-5`, arrowClass)}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-0"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={twMerge(
                  "absolute left-1/2 z-10 mt-3 w-full  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl",
                  panelClass
                )}
              >
                <div className="overflow-hidden rounded-lg shadow-2xl">
                  <PopContent />
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Pop;
