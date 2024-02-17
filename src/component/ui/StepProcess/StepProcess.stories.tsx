// stepprocess.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import StepProcess, { stepProcessProps } from "./StepProcess";

export default {
  title: "Components/ui/StepProcess",
  component: StepProcess,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<stepProcessProps> = (args: stepProcessProps) => (
  <StepProcess {...args} />
);

export const Default: StoryFn<stepProcessProps> = Template.bind({});
Default.args = {
  steps: ["Start payment", "Process Payment", "Finished"],
  activeColor: "blue",
  lineColor: "blue",
};
