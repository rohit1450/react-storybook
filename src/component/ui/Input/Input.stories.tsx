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

export const DisableType: StoryFn<InputProps> = Template.bind({});
DisableType.args = {
  type: "text",
  placeholder: "this field is disabled",
  ExtraProp: "disable",
};

export const LabelType: StoryFn<InputProps> = Template.bind({});
LabelType.args = {
  type: "text",
  placeholder: "enter text",
  label: "Enter name",
  ExtraProp: "label",
};

export const IconType: StoryFn<InputProps> = Template.bind({});
IconType.args = {
  type: "text",
  placeholder: "enter text",
  ExtraProp: "icon",
};

export const TextAreaType: StoryFn<InputProps> = Template.bind({});
TextAreaType.args = {
  type: "text",
  placeholder: "enter text",
  ExtraProp: "text area",
};
