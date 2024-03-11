import { Meta, StoryFn } from "@storybook/react";
import InputIcon, { InputIconProps } from "./InputIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/ui/InputIcon",
  component: InputIcon,
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Type of the input box",
    },
    placeholder: {
      description: "Value of placeholder of input box",
    },
    hasIcon: {
      description: "Need icon or not in inside input box",
    },
    animate: {
      description: "Disable float label",
    },
    disable: {
      description: "Disable an input box",
    },
    animateLabel: {
      description: "Value of text of float input box",
    },
    value: {
      description: "Text for input box",
    },
    defaultBorder: {
      description: "Removes border of the input box",
    },
    textarea: {
      description: "Return textarea box",
    },
    icon: {
      description: "Icon for the input box",
    },
  },
} as Meta;

const Template: StoryFn<InputIconProps> = (args: InputIconProps) => (
  <InputIcon {...args} />
);

export const Default: StoryFn<InputIconProps> = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text ...",
  hasIcon: true,
  icon: IconOne,
  animate: false,
  disable: false,
};

export const NoIcon: StoryFn<InputIconProps> = Template.bind({});
NoIcon.args = {
  ...Default.args,
  hasIcon: false,
};

export const DefaultBorder: StoryFn<InputIconProps> = Template.bind({});
DefaultBorder.args = {
  ...Default.args,
};

export const TopInput: StoryFn<InputIconProps> = Template.bind({});
TopInput.args = {
  ...Default.args,
  animate: true,
  animateLabel: "Email",
  type: "email",
};

export const TextArea: StoryFn<InputIconProps> = Template.bind({});
TextArea.args = {
  ...Default.args,
  animateLabel: "Email",
  textarea: true,
};

function IconOne() {
  return <MagnifyingGlassIcon className="h-4 w-4" />;
}
