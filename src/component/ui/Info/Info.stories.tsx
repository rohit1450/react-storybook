import { Meta, StoryFn } from "@storybook/react";
import Info, { InfoProps } from "./Info";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
type heroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;
export default {
  title: "Components/ui/Info",
  component: Info,
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Defines title for tooltip",
    },
    color: {
      description: "Defines color for icon",
    },
    bgColor: {
      description: "Defines color for icon",
    },
    size: {
      description: "Defines size of the icon",
    },
    icon: {
      description: "Icon for the tooltip",
    },
    tooltipPosition: {
      description: "Defines position of the tooltip",
    },
  },
} as Meta;

const Template: StoryFn<InfoProps> = (args: InfoProps) => <Info {...args} />;

export const Default: StoryFn<InfoProps> = Template.bind({});
Default.args = {
  title: "This is title",
  icon: heroIcon,
  tooltipPosition: "right",
};

export const Red: StoryFn<InfoProps> = Template.bind({});
Red.args = {
  title: "This is a red icon",
  icon: heroIcon,
  color: "red",
  bgColor: "red",
  tooltipPosition: "right",
};

export const Big: StoryFn<InfoProps> = Template.bind({});
Big.args = {
  ...Default.args,
  title: "This is large icon",
  size: "5",
  tooltipPosition: "right",
};

function heroIcon({
  title,
  color,
  size,
}: {
  title?: string;
  color?: string;
  size?: number;
}) {
  const iconSize = size || 2;
  return (
    <InformationCircleIcon
      title={title}
      color={color}
      style={{ width: `${iconSize}rem`, height: `${iconSize}rem` }}
    />
  );
}
