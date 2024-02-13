import Carousel, { CarouselProps } from "./Carousel";
import { Meta, StoryFn } from "@storybook/react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

export default {
  title: "Components/ui/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} as Meta;

const images = [
  "https://images.unsplash.com/photo-1503662549813-28954e75f215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args} images={images} />
);

export const Small: StoryFn<CarouselProps> = Template.bind({});
Small.args = {
  size: "small",
  dotColor: "red",
  arrowIcon: {
    left: <ArrowLeftCircleIcon />,
    right: <ArrowRightCircleIcon />,
  },
  fullWidth: false,
  hasDot: true,
};

export const Medium: StoryFn<CarouselProps> = Template.bind({});
Medium.args = {
  ...Small.args,
  size: "medium",
};

export const Large: StoryFn<CarouselProps> = Template.bind({});
Large.args = {
  ...Small.args,
  size: "large",
};
