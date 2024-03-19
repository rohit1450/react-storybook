import React, { useEffect, useRef, useState } from "react";
import Lang from "../LangSwitch/Lang";
import Drawers from "../Drawers/Drawers";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

export interface MobSidebarProps {
  isOpen: boolean;
  setIsOpen: any;
  toggleMenu: () => void;
}

export const MobSidebar: React.FC<MobSidebarProps> = ({
  isOpen,
  toggleMenu,
}) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [condition, setCondition] = useState(false);

  useEffect(() => {
    const LangDir = localStorage.getItem("language");
    if (LangDir === "ar") {
      setCondition(true);
    } else {
      setCondition(false);
    }
  }, []);

  const handleClickOutside = (event: any) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      isOpen
    ) {
      toggleMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const DrawerBody = () => (
    <div className="p-5">
      <h5 className="text-xl font-semibold">List of items</h5>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );

  return (
    <div className="w-full h-screen bg-disable">
      <nav>
        <div className="sticky top-7 w-full px-5 py-4 flex justify-between items-center bg-Primary">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold">
              Logo
            </a>
          </div>
          <div className="flex gap-5">
            <div
              className={`absolute top-4 ${condition ? "left-20" : "right-20"}`}
            >
              <Lang />
            </div>
            <Drawers
              direction="right"
              drawerClassName="custom-drawer !w-[250px] sm:!w-[400px]"
              size={400}
              DrawerBody={DrawerBody}
              open={() => (
                <AdjustmentsHorizontalIcon className="h-5 w-5 cursor-pointer" />
              )}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
