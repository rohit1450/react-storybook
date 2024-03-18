import { Meta, StoryFn } from "@storybook/react";
import Carousel, { CarouselProps } from "./Carousel";

export default {
  title: "Components/ui/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoplay: {
      description: "Auto play carousel",
    },
    slidesPerView: {
      description: "Number of slides visible per view in the carousel",
    },
    spaceBetween: {
      description: "Space between each slide in the carousel",
    },
    navigation: {
      description: "Whether to show navigation arrows",
    },
    loop: {
      description: "Whether to enable loop",
    },
    containerClassName: {
      description: "Class name for the container of the carousel",
    },
    content: {
      description: "Array of objects representing the content of each slide",
    },
    breakpoints: {
      description: "Object defining breakpoints for responsive design",
    },
    customArrow: {
      description: "Whether to use custom navigation arrows",
    },
    arrows: {
      description: "Object containing custom arrow components",
    },
    direction: {
      description: "Direction of the carousel (vertical or horizontal)",
    },
    defaultPagination: {
      description: "Whether to use default pagination bullets",
    },
    customDots: {
      description: "Function to define custom pagination bullets",
    },
  },
} as Meta;

export type CardProps = {
  image: string;
  text: string;
};

const content = [
  {
    image:
      "https://images.unsplash.com/photo-1503662549813-28954e75f215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503662549813-28954e75f215?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505533542167-8c89838bb19e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam error laboriosam quis obcaecati harum aspernatur cumque sapiente ipsum esse vel!",
  },
];

const Template: StoryFn<CarouselProps> = (args: CarouselProps) => (
  <Carousel {...args} />
);

export const Default: StoryFn<CarouselProps> = Template.bind({});
Default.args = {
  content,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: true,
  loop: true,
  requirePagination: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: false,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 24,
      pagination: false,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
      pagination: false,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 32,
      slidesPerGroup: 1,
    },
    1336: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
  },
  containerClassName: "my-swiper h-[200px] md:h-[350px]",
  CardStructure: (props: CardProps) => (
    <div className="relative h-full w-full">
      <img
        src={props.image}
        alt={props.text}
        className="h-full w-full object-cover"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-texts text-xs lg:text-lg font-semibold">
        {props.text}
      </p>
    </div>
  ),
  defaultPagination: true,
  customArrow: false,
  arrows: {
    leftArrow: () => (
      <button className="arrow-left arrow bg-Primary text-sm text-white rounded px-2 py-1">
        Prev
      </button>
    ),
    rightArrow: () => (
      <button className="arrow-right arrow bg-Primary text-sm text-white rounded px-2 py-1">
        next
      </button>
    ),
  },
  customDots: (index: number) => {
    return "<span className='custom-dots'>" + (index + 1) + "</span>";
  },
};
