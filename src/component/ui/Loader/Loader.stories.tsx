import Loader, { LoaderProps } from "./Loader";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Loader",
  component: Loader,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<LoaderProps> = (args: LoaderProps) => (
  <Loader {...args} />
);

export const Small: StoryFn<LoaderProps> = Template.bind({});
Small.args = {
  size: "small",
  color: "red",
};

export const Medium: StoryFn<LoaderProps> = Template.bind({});
Medium.args = {
  size: "medium",
  color: "red",
};

export const Large: StoryFn<LoaderProps> = Template.bind({});
Large.args = {
  size: "large",
  color: "red",
};
