import { Meta, StoryFn } from "@storybook/react";
import Toaster, { ToasterProps } from "./Toaster";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/ui/Toaster",
  component: Toaster,
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "The id to be passed for toaster container",
    },
    type: {
      description: "Defines type of toaster",
    },
    position: {
      description: "Defines position of toaster",
    },
    theme: {
      description: "Defines theme of toaster",
    },
    notifyText: {
      description: "Defines text render inside toaster",
    },
    autoClose: {
      description: "Defines time in ms to autoclose",
    },
    hideProgressBar: {
      description: "Boolean value to hide progress bar inside toaster",
    },
    transition: {
      description: "Defines transition for toaster",
    },
    rtl: {
      description: "Boolean value to rtl",
    },
    pauseOnFocusLoss: {
      description: "Boolean value to stop toaster on hover",
    },
    button: {
      description: "Button props",
    },
    newestOnTop: {
      description: "Boolean value to render new toaster on top",
    },
    classContainer: {
      description: "Custom classname for tailwind merge",
    },
    pauseOnHover: {
      description: "Boolean value to pause toaster on hover",
    },
    closeOnClick: {
      description: "Boolean value to close toaster on click",
    },
    draggable: {
      description: "On dragging toast it will close",
    },
  },
} as Meta;

const Template: StoryFn<ToasterProps> = (args: ToasterProps) => (
  <Toaster {...args} />
);
export const Default = Template.bind({});

Default.args = {
  id: "toaster-notify",
  type: "default",
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: "light",
  transition: "Bounce",
  notifyText: "Wow! So easy",
  classContainer: "",
  button: {
    buttonType: "primary",
    color: "white",
    label: "Notify",
    className: "",
    onClick: action("on-click"),
    isLoading: false,
  },
};

export const Success = Template.bind({});

Success.args = {
  ...Default.args,
  button: {
    buttonType: "primary",
    color: "white",
    label: "Success",
    className: "",
    onClick: action("on-click"),
    isLoading: false,
  },
  type: "success",
  id: "toaster-success",
};

export const Info = Template.bind({});

Info.args = {
  ...Default.args,
  button: {
    buttonType: "primary",
    color: "white",
    label: "Info",
    className: "",
    onClick: action("on-click"),
    isLoading: false,
  },
  type: "info",
  id: "toaster-info",
};

export const Warning = Template.bind({});

Warning.args = {
  ...Default.args,
  button: {
    buttonType: "primary",
    color: "white",
    label: "Warning",
    className: "",
    onClick: action("on-click"),
    isLoading: false,
  },
  type: "warning",
  id: "toaster-warning",
};

export const Error = Template.bind({});

Error.args = {
  ...Default.args,
  button: {
    buttonType: "primary",
    color: "white",
    label: "Error",
    className: "",
    onClick: action("on-click"),
    isLoading: false,
  },
  type: "error",
  id: "toaster-error",
};
