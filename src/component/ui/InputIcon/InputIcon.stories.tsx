import { Meta, StoryFn } from "@storybook/react";
import InputIcon, { InputIconProps } from "./InputIcon";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/ui/InputIcon",
  component: InputIcon,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<InputIconProps> = (args: InputIconProps) => (
  <InputIcon {...args} />
);

export const Default: StoryFn<InputIconProps> = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "Enter text ...",
  value: "",
  hasIcon: true,
  icon: IconOne,
  defaultBorder: true,
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
};

export const TextArea: StoryFn<InputIconProps> = Template.bind({});
TextArea.args = {
  ...Default.args,
  animateLabel: "Email",
  textarea: true,
};

function IconOne() {
  return <MagnifyingGlassIcon className="h-5 w-5" />;
}
