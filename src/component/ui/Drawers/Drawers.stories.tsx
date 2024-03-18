import { Meta, StoryFn } from "@storybook/react";
import Drawers, { DrawersProps } from "./Drawers";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/ui/Drawers",
  component: Drawers,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      description: "Direction of the drawer.",
    },
    drawerClassName: {
      description: "Class name for the drawer container.",
      control: "text",
    },
    size: {
      description: "Size of the drawer.",
      control: "number",
    },
    duration: {
      description:
        "Duration of the animation when opening or closing the drawer.",
      control: "number",
    },
    overlayOpacity: {
      description: "Opacity of the overlay behind the drawer.",
      control: "number",
    },
    overlayColor: {
      description: "Color of the overlay behind the drawer.",
      control: "color",
    },
    DrawerBody: {
      description: "Compoenent inside drawer that needs to be rendered",
    },
  },
} as Meta;

const Template: StoryFn<DrawersProps> = (args: DrawersProps) => (
  <Drawers {...args} />
);

export const Default: StoryFn<DrawersProps> = Template.bind({});
Default.args = {
  DrawerBody: () => (
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
  ),
  direction: "right",
  drawerClassName: "custom-drawer !w-[250px] sm:!w-[400px]",
  size: 400,
  open: () => <AdjustmentsHorizontalIcon className="h-5 w-5 cursor-pointer" />,
};
