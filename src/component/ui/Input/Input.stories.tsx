import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/ui/Input",
  component: Input,
  args: {
    className: ''
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Defines the type of the inputbox"
    },
    placeholder: {
      description: "Defines placehodler text for inputbox"
    },
    className: {
      description: "Custom class for tailwind merge"
    },
    src: {
      description: "Source of the image for image type input"
    },
    height: {
      description: "Defines height of the inputbox"
    },
    width: {
      description: "Defines iwdth of the inputbox"
    },
  }
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

export const EmailInput: StoryFn<InputProps> = Template.bind({});
EmailInput.args = {
  type: "email",
  placeholder: "example@email.com",
};

export const PasswordInput: StoryFn<InputProps> = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter Password",
};

export const DateInput: StoryFn<InputProps> = Template.bind({});
DateInput.args = {
  type: "date",
  placeholder: "",
};

export const TimeInput: StoryFn<InputProps> = Template.bind({});
TimeInput.args = {
  type: "time",
  placeholder: " ",
};

export const DateTime: StoryFn<InputProps> = Template.bind({});
DateTime.args = {
  type: "datetime-local",
  placeholder: " ",
};

export const FileType: StoryFn<InputProps> = Template.bind({});
FileType.args = {
  type: "file",
  placeholder: " ",
};

export const ImageType: StoryFn<InputProps> = Template.bind({});
ImageType.args = {
  type: "image",
  placeholder: " ",
  src: "https://www.w3schools.com/html/img_submit.gif",
  height: '48',
  width: '48',
};