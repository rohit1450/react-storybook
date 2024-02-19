import { Meta, StoryFn } from "@storybook/react";
import StepProcess, { stepProcessProps } from "./StepProcess";
import detailComponent from "./ProcessComponent";
import {
  UserCircleIcon,
  UserPlusIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

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
  hasIcons: false,
  lineThickness: "1px",
  detailComponent,
  vertical: false,
};

export const StepperIcon: StoryFn<stepProcessProps> = (
  args: stepProcessProps
) => {
  const icons = [
    <UserCircleIcon className="h-5 w-5" />,
    <UserPlusIcon className="h-5 w-5" />,
    <UserMinusIcon className="h-5 w-5" />,
  ];
  return <StepProcess {...args} icons={icons} />;
};
StepperIcon.args = {
  ...Default.args,
  hasIcons: true,
  detailComponent,
};
