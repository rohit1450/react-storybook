import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/ui/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;
export const StringType: StoryFn<InputProps> = Template.bind({});
StringType.args = {
  type: "text",
  placeholder: "Enter text",
};
export const NumberType: StoryFn<InputProps> = Template.bind({});
NumberType.args = {
  type: "number",
  placeholder: "Enter number",
};
