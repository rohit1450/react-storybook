import Progress, { progressBarProps } from "./Progress";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Progress",
  component: Progress,
  tags: ["autodocs"],
  argTypes: {
    text: {
      description: "Title of the progress bar",
    },
    type: {
      description: "Type of the progress bar",
    },
    color: {
      description: "Color of portion of progress bar",
    },
    percentage: {
      description: "Percentage of the progress bar",
    },
    height: {
      description: "Height of the container of progress bar",
    },
    hasLabel: {
      description: "Need title of the progress bar or not",
    },
    topColor: {
      description:
        "Color of container containing percentage in top progress type",
    },
    progressColor: {
      description: "Color of progress bar of top progress type",
    },
    sizeWidth: {
      description: "Width of the container of progress bar",
    },
  },
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
