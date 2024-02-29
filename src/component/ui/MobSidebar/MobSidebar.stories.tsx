import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MobSidebar, MobSidebarProps } from "./MobSidebar";

export default {
  title: 'Components/ui/MobSidebar',
  component: MobSidebar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<MobSidebarProps> = (args: MobSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <MobSidebar {...args} isOpen={isOpen} toggleMenu={toggleMenu} />;
};

export const Default = Template.bind({});
Default.args = {};
