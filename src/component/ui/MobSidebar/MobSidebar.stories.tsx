import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MobSidebar, MobSidebarProps } from "./MobSidebar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default {
  title: 'Components/ui/MobSidebar',
  component: MobSidebar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<MobSidebarProps> = (args: any) => {
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
        {...args}
      />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  isOverlayOpen: true,
  content1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
  content2: '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
  openIcon: leftArrow,
  closeIcon: rightArrow,
  size: 10,
};


function leftArrow({ size }: { size?: number }) {
  return (

    <ChevronLeftIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />

  )
}
function rightArrow({ size }: { size?: number }) {
  return (

    <ChevronRightIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />

  )
}
