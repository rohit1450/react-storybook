import { StoryFn, Meta } from "@storybook/react";
import Modal, { ModalProps } from "./Modal";
import React from "react";

export default {
  title: "Components/ui/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    button: {
      description: "Button props for button",
    },
    handleOpen: {
      description: "Handle open function for modal to open",
    },
    handleClose: {
      description: "Handle close function to close modal",
    },
    initialIsOpen: {
      description: "Boolean value to initial open modal",
    },
    title: {
      description: "Defines title inside modal",
    },
    content: {
      description: "Defines content inside modal",
    },
    buttonName: {
      description: "Defines text for the modal open button",
    },
  },
} as Meta;

const Template: StoryFn<ModalProps> = (args: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(args.initialIsOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      {...args}
      button={args.button}
      initialIsOpen={isOpen}
      handleOpen={openModal}
      handleClose={closeModal}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  ModalContent: () => {
    return (
      <div className="mt-10 mb-5">
        <h2 className="text-2xl font-semibold">Modal Title</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          sapiente ducimus error corrupti nesciunt libero magni facere nemo odio
          atque, consequatur consectetur quis, iusto omnis soluta molestias
          voluptates voluptate ratione, asperiores illo at? Ea quaerat
          reiciendis aut dolorem, deserunt magnam?
        </p>
      </div>
    );
  },
  button: {
    buttonType: "primary",
    color: "white",
    label: "Open dialoge",
    isLoading: false,
    disabled: false,
    className: "",
  },
  initialIsOpen: false,
  buttonName: "OK",
};

export const Open = Template.bind({});

Open.args = {
  ...Default.args,
  initialIsOpen: true,
};
