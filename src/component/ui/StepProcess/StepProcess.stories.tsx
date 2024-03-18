import { Meta, StoryFn } from "@storybook/react";
import StepProcess, { stepProcessProps } from "./StepProcess";

import {
  UserCircleIcon,
  UserPlusIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

export default {
  title: "Components/ui/StepProcess",
  component: StepProcess,
  tags: ["autodocs"],
  argTypes: {
    steps: {
      description: "An array of string defines text of each step",
    },
    activeColor: {
      description: "Color of active step",
    },
    lineThickness: {
      description: "Tickness of line between steps",
    },
    vertical: {
      description: "Need vertical steps or not",
    },
    measure: {
      description: "Mesaure of each step number or icon",
    },
    detailComponents: {
      description:
        "An array of object contains name and description of each step",
    },
    headingSize: {
      description: "Size of heading of each step",
    },
    contentSize: {
      description: "Size of content of each step",
    },
    stepSize: {
      description: "Font size of each step",
    },
    hasIcons: {
      description: "Applies icon instead of number for step",
    },
    icons: {
      description: "An array of icons for steps",
    },
    lineColor: {
      description: "Color of completed steps line",
    },
  },
} as Meta;

const detailComponents = [
  {
    heading: "Start Payment",
    content:
      "Welcome to our payment process! Before we proceed, let's ensure everything in your cart is accurate. Take a moment to review your selected items, quantities, and prices. Once you're satisfied, click the Proceed to Payment button below to initiate the secure transaction process.",
  },
  {
    heading: "Process Payment",
    content:
      "Thank you for proceeding with the payment. We are currently processing your transaction securely. This might take a few moments, so please be patient. Rest assured, your payment details are safe with us. Once the process is complete, you'll be notified of the status.",
  },
  {
    heading: "Finished Payment",
    content:
      " Congratulations on successfully completing your payment! We're delighted to confirm that your transaction has been processed securely. You will receive an email confirmation shortly, detailing your purchase. Thank you for choosing us!",
  },
];

const Template: StoryFn<stepProcessProps> = (args: stepProcessProps) => (
  <StepProcess {...args} />
);

export const Default: StoryFn<stepProcessProps> = Template.bind({});
Default.args = {
  steps: ["Start payment", "Process Payment", "Finished"],
  activeColor: "bg-Primary",
  lineColor: "bg-Primary",
  hasIcons: false,
  lineThickness: "1px",
  measure: "2rem",
  detailComponents,
  headingSize: "1.1rem",
  contentSize: "14px",
  stepSize: "1.1rem",
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
};
