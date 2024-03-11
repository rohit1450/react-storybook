import React, { useEffect, useRef, useState } from "react";
import Lang from "../LangSwitch/Lang";
import './mobsiderbar.css'

export interface MobSidebarProps {
  isOpen: boolean;
  setIsOpen: any;
  toggleMenu: () => void;
}

export const MobSidebar: React.FC<MobSidebarProps> = ({
  isOpen,
  setIsOpen,
  toggleMenu,
}) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const LangDir = localStorage.getItem('language');
    if (LangDir === 'ar') {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, []);

  const handleClickOutside = (event: any) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container h-screen bg-disable">
        <nav>
          <div className="sticky top-7 w-full px-5 py-4 flex justify-between items-center bg-Primary">
            <div className="flex items-center">
              <a href="/" className="text-white text-2xl font-bold">Logo</a>
            </div>
            <div className="flex gap-5">
              <div className={`absolute top-4 ${condition ? 'left-20' : 'right-20'}`}>
                <Lang />
              </div>
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
          <div onClick={handleClose} ref={sidebarRef} className={`flex flex-col bg-white p-4 rounded fixed z-20 top-4 right-4 w-1/3 h-screen ${isOpen ? 'open' : 'close hidden'}`}>
            <div className="rounded-md text-black h-screen">
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
      </div>
    </>
  );
};
