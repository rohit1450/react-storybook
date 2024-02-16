import Progress, { progressBarProps } from "./Progress";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Progress",
  component: Progress,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<progressBarProps> = (args: progressBarProps) => (
  <Progress {...args} />
);

export const Small: StoryFn<progressBarProps> = Template.bind({});
Small.args = {
  size: "small",
  color: "red",
  percentage: 25,
};
