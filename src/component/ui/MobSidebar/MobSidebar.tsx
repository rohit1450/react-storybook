import React from "react";

export interface MobSidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const MobSidebar: React.FC<MobSidebarProps> = ({ isOpen, toggleMenu }) => {
  
  return (
    <nav className="container h-screen bg-secondary">
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
      <div className={`flex flex-col bg-gray p-4 rounded fixed top-20 right-4 w-1/3 ${isOpen ? '' : 'hidden'}`}>
        <div>
          <a className="text-lg" href="/">Home</a>
        </div>
        <div>
          <a className="text-lg" href="/">About</a>
        </div>
        <div>
          <a className="text-lg" href="/">Contact</a>
        </div>
      </div>
    </nav>
  );
};
