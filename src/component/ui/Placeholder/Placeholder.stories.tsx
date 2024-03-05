import Placeholder, { placeholderProps } from "./Placeholder";
import { Meta, StoryFn } from "@storybook/react";
import { PropsWithChildren } from "react";

export default {
  title: "Components/ui/Placeholder",
  component: Placeholder,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Type of placeholder",
    },
    count: {
      description:
        "The number of lines of skeletons to render. If count is a decimal number like 3.5, three full skeletons and one half-width skeleton will be rendered",
    },
    loading: {
      description: "Indicates whether loading is in progress or not",
    },
    height: {
      description: "The height of the skeleton",
    },
    width: {
      description: "The width of the skeleton",
    },
    baseColor: {
      description: "Base color of the skeleton",
    },
    highlightColor: {
      description: "Highlight color of the skeleton",
    },
    enableAnimation: {
      description: "Enable animation for the skeleton",
    },
    duration: {
      description: "Duration of animation for the skeleton",
    },
    direction: {
      description: "Direction of the skeleton animation",
    },
    borderRadius: {
      description: "Border radius of the skeleton",
    },
  },
} as Meta;

const Template: StoryFn<placeholderProps> = (args: placeholderProps) => (
  <Placeholder {...args} />
);

export const Default: StoryFn<placeholderProps> = Template.bind({});
Default.args = {
  type: "basic",
  count: 5,
  loading: true,
  height: 20,
  borderRadius: "10px",
  ComponentAfterLoading: () => (
    <div className="text-2xl font-serif font-semibold">
      Custom component will be shown after loading ends
    </div>
  ),
};

export const CustomWrapper: StoryFn<placeholderProps> = Template.bind({});
CustomWrapper.args = {
  ...Default.args,
  type: "custom wrapper",
  customWrapper: Box,
};

function Box({ children }: PropsWithChildren<unknown>) {
  return <div>{children}</div>;
}
