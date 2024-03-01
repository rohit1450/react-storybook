import React, { useEffect, useRef } from "react";
import Overlay from "../Overlay/Overlay";
import './mobsiderbar.css'
import { AiFillCloseSquare } from "react-icons/ai";

export interface MobSidebarProps {
  isOpen: boolean;
  setIsOpen: any;
  toggleMenu: () => void;
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
  setIsOverlayOpen: (value: boolean) => void;
  size?: number;
  content1: string;
  content2: string;
  openIcon?: React.ElementType;
  closeIcon?: React.ElementType;
}

export const MobSidebar: React.FC<MobSidebarProps> = ({
  isOpen,
  setIsOpen,
  toggleMenu,
  isOverlayOpen,
  toggleOverlay,
  size,
  content1,
  content2,
  openIcon,
  closeIcon,
}) => {

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="container h-screen bg-disable">
      <nav>
        <div className="px-5 py-4 flex justify-between items-center bg-Primary">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">Logo</a>
          </div>
          <div>
            <button
              type="button"
              onClick={toggleMenu}
              title="Toggle Menu"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div onClick={handleClose} ref={sidebarRef} className={`flex flex-col bg-gray p-4 rounded fixed z-20 top-4 right-4 w-1/3 h-screen ${isOpen ? 'open' : 'close hidden'}`}>
          <div className="text-3xl absolute top-0 left-0 cursor-pointer">
            <AiFillCloseSquare onClick={handleClose} />
          </div>
          <div className="p-2 m-2 rounded-md bg-Primary text-white h-screen">
            <div className="my-1 py-1">
              <a className="text-lg hover:text-red" href="#">Home</a>
            </div>
            <div className="my-1 py-1">
              <a className="text-lg hover:text-red" href="#">About</a>
            </div>
            <div className="my-1 py-1">
              <a className="text-lg hover:text-red" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-5 mt-2">
        <Overlay
          isOverlayOpen={isOverlayOpen}
          toggleOverlay={toggleOverlay}
          size={size}
          content1={content1}
          content2={content2}
          openIcon={openIcon}
          closeIcon={closeIcon}
        />
      </div>
    </div>
  );
};
