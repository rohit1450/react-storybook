import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export interface DrawersProps {
  DrawerBody: () => JSX.Element;
  direction: "left" | "right" | "bottom" | "top";
  drawerClassName: string;
  size?: number | string;
  duration?: number;
  overlayOpacity?: number;
  overlayColor?: string;
  open: () => JSX.Element;
}

const Drawers = ({
  DrawerBody,
  direction = "right",
  drawerClassName,
  size = 300,
  duration,
  overlayOpacity,
  overlayColor,
  open,
}: DrawersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <span onClick={toggleDrawer}>{open()}</span>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction={direction}
        className={drawerClassName}
        size={size}
        duration={duration}
        overlayOpacity={overlayOpacity}
        overlayColor={overlayColor}
        lockBackgroundScroll={true}
      >
        <DrawerBody />
      </Drawer>
    </>
  );
};

export default Drawers;
