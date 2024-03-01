import { useState } from "react";
import { Meta } from "@storybook/react";
import { MobSidebar } from "./MobSidebar";

export default {
  title: 'Components/ui/MobSidebar',
  component: MobSidebar,
  tags: ["autodocs"],
} as Meta;

export const Default = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
      />

    </>
  );
};
