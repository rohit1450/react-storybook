import { Meta, StoryFn } from "@storybook/react";
import ImageUploader, { ImageuploaderProps } from "./ImageUploader";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/16/solid";

export default {
  title: "Components/ui/ImageUploader",
  component: ImageUploader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<ImageuploaderProps> = (args: ImageuploaderProps) => (
  <ImageUploader {...args} />
);

export const Default: StoryFn<ImageuploaderProps> = Template.bind({});
Default.args = {
  acceptFormat: [".png", ".jpeg", ".jpg"],
  maxFiles: 10,
  multiple: true,
  disabled: false,
  addIcon: () => <PlusCircleIcon className="h-10 w-10" />,
  removeIcon: () => <TrashIcon className="h-5 w-5 text-red" />,
};
