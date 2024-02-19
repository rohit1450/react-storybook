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

export const Normal: StoryFn<progressBarProps> = Template.bind({});
Normal.args = {
  text: "task in progress",
  type: "normal",
  color: "red",
  percentage: 25,
  height: "1rem",
  hasLabel: true,
};

export const TopProgress: StoryFn<progressBarProps> = Template.bind({});
TopProgress.args = {
  ...Normal.args,
  type: "top progress",
  topColor: "red",
  progressColor: "red",
};
