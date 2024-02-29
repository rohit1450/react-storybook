import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";
import { InformationCircleIcon, EyeIcon,EyeSlashIcon } from '@heroicons/react/24/outline';

export default {
  title: "Components/ui/Input",
  component: Input,
  args: {
    className: ''
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      description: "Additional CSS class for styling purposes."
    },
    type: {
      description: "Specifies the type of input field. Possible values include 'text', 'number', 'email', 'password', 'date', 'time', 'datetime-local', 'file', and 'image'."
    },
    placeholder: {
      description: "Text displayed in the input field when it is empty and not focused."
    },
    src: {
      description: "URL of the image to be displayed (applicable only if 'type' is 'image')."
    },
    height: {
      description: "Height of the input field (applicable only if 'type' is 'image')."
    },
    width: {
      description: "Width of the input field (applicable only if 'type' is 'image')."
    },
    title: {
      description: "Title text for the input field or icon."
    },
    size: {
      description: "Size of the icon (applicable only if an icon is provided)."
    },
    bgcolor: {
      description: "Background color of the input field."
    },
    tooltipPosition: {
      description: "Position of any tooltip associated with the input field."
    },
    icon:{
      description:""
    },
    iconeye:{
      description:""
    },
    iconOffeye:{
      description:""
    },label:{
      description:""
    },
    labelName: {
      desc:''
    }

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
  label: "Email",
  labelName:"Label"
};

export const PasswordInput: StoryFn<InputProps> = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "Enter Password",
  title: "This is large icon",
  size: '1',
  tooltipPosition: 'left',
  icon: heroIcon,
  iconeye: eyeIcon,
  iconOffeye:offeyeIcon,
  label: "Password",
  labelName:"Label"
  
 
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


function heroIcon({ title, color, size }: { title?: string; color?: string; size?: number }) {
  const iconSize = size || 2;
  return (
      <InformationCircleIcon title={title} color={color} style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
  )
}

function eyeIcon({ title, color, size }: { title?: string; color?: string; size?: number }) {
  const iconSize = size || 2;
  return (
      <EyeIcon title={title} color={color} style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
  )
}
function offeyeIcon({ title, color, size }: { title?: string; color?: string; size?: number }) {
  const iconSize = size || 2;
  return (
      <EyeSlashIcon title={title} color={color} style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }} />
  )
}
