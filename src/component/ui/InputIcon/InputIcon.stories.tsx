import { Meta, StoryFn } from "@storybook/react";
import InputIcon, { InputIconProps } from "./InputIcon";

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
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
      />
    </svg>
  );
}
