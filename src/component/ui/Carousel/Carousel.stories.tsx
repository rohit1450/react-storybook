import Carousel, { CarouselProps } from "./Carousel";
import { Meta, StoryFn } from "@storybook/react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";

export default {
  title: "Components/ui/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    images: {
      description: "An array of images for carousel",
    },
    dotColor: {
      description: "Color of active dot corresponding to image in the carousel",
    },
    hasDot: {
      description: "Specify need of dots onto the carousel",
    },
    arrowIcon: {
      description: "An object consist of icons for carousel",
    },
    size: {
      description: "Defines size of carousel",
    },
    fullWidth: {
      description: "Boolean value for full width of carousel",
    },
    height: {
      description: "Custom height for carousel",
    },
    width: {
      description: "Custom width for carousel",
    },
  },
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
    left: IconOne,
    right: IconTwe
  },
  fullWidth: false,
  hasDot: true,
  arrowPoistion: "bottom"
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

function IconOne(){
  return <ArrowLeftCircleIcon />
}

function IconTwe(){
  return <ArrowRightCircleIcon />
}
