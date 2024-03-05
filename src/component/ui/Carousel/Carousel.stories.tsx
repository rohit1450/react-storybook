import Carousel, { CarouselProps } from "./Carousel";
import { Meta, StoryFn } from "@storybook/react";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import { ArrowLeftCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

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

export type CardProps = {
  heading: string;
  content: string;
  img: string;
};

export type ArrowProps = {
  className: string;
  style: React.CSSProperties;
  onClick: any;
};

const images = [
  "https://images.unsplash.com/photo-1503662549813-28954e75f215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503662549813-28954e75f215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args} images={images} />
);

export const Small: StoryFn<CarouselProps> = Template.bind({});
Small.args = {
  type: "image",
  size: "small",
  dotColor: "red",
  arrowIcon: {
    left: IconOne,
    right: IconTwe,
  },
  fullWidth: false,
  hasDot: true,
  arrowPoistion: "middle",
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

export const CarouselContent: StoryFn<CarouselProps> = Template.bind({});
CarouselContent.args = {
  type: "custom",
  CardStructure: (props: CardProps) => (
    <div className="border rounded pb-5 m-2">
      <img
        src={props.img}
        alt={props.heading}
        className="w-full h-48 rounded-t"
      />
      <h5 className="text-2xl font-semibold px-4">{props.heading}</h5>
      <p className="px-4 text-sm">{props.content}</p>
    </div>
  ),
  cardText: [
    {
      heading: "Heading 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
    {
      heading: "Heading 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
    {
      heading: "Heading 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
    {
      heading: "Heading 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
    {
      heading: "Heading 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
    {
      heading: "Heading 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. Quibusdam a blanditiis repellat harum porro maxime, et sed vero. vero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quia. ",
    },
  ],
  NextArrow,
  PrevArrow,
  slidesToShow: 3,
  slidesToScroll: 3,
  customPaging: CustomPaging,
  dots: true,
  hasButtons: false,
};

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} rounded-full`}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} rounded-full`}
      style={{
        ...style,
        display: "block",
        backgroundColor: "black",
      }}
      onClick={onClick}
    />
  );
}

function IconOne() {
  return <ArrowLeftCircleIcon />;
}

function IconTwe() {
  return <ArrowRightCircleIcon />;
}

function CustomPaging(i: number) {
  return (
    <div
      style={{
        width: "30px",
        color: "blue",
        border: "1px blue solid",
      }}
    >
      {i + 1}
    </div>
  );
}
