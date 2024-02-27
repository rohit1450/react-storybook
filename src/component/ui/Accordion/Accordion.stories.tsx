import Accordion, { accordionProps } from "./Accordion";
import { Meta, StoryFn } from "@storybook/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default {
  title: "Components/ui/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    accordionTitle: {
      description: "Title of the accordion",
    },
    headingColor: {
      description: "Color of heading",
    },
    faqs: {
      description: "An array of object contains heading and content of faqs",
    },
    icons: {
      description: "Icon for the accordion",
    },
    opened: {
      description:
        "An object containing required and number for particular accordion to be opened by default",
    },
    gap: {
      description: "Apply gap of 1rem into accordion",
    },
  },
} as Meta;

const faqs = [
  {
    id: 1,
    header: "Accordion #1",
    content: {
      heading: "Heading #1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis, minus totam quasi maiores magnam fugit laboriosam saepe sint aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae sunt libero quaerat! Distinctio nisi, est labore porro dolore ex neque, nam quidem quibusdam perspiciatis accusantium ea autem rerum sequi",
    },
  },
  {
    id: 2,
    header: "Accordion #2",
    content: {
      heading: "Heading #2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis, minus totam quasi maiores magnam fugit laboriosam saepe sint aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae sunt libero quaerat! Distinctio nisi, est labore porro dolore ex neque, nam quidem quibusdam perspiciatis accusantium ea autem rerum sequi",
    },
  },
  {
    id: 3,
    header: "Accordion #3",
    content: {
      heading: "Heading #3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis, minus totam quasi maiores magnam fugit laboriosam saepe sint aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae sunt libero quaerat! Distinctio nisi, est labore porro dolore ex neque, nam quidem quibusdam perspiciatis accusantium ea autem rerum sequi",
    },
  },
  {
    id: 4,
    header: "Accordion #4",
    content: {
      heading: "Heading #4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum blanditiis, minus totam quasi maiores magnam fugit laboriosam saepe sint aperiam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repudiandae sunt libero quaerat! Distinctio nisi, est labore porro dolore ex neque, nam quidem quibusdam perspiciatis accusantium ea autem rerum sequi",
    },
  },
];

const Template: StoryFn<accordionProps> = (args: accordionProps) => (
  <Accordion {...args} />
);

export const Default: StoryFn<accordionProps> = Template.bind({});
Default.args = {
  accordionTitle: "react accordion",
  faqs,
  icons: <ChevronDownIcon />,
  gap: true,
  headingColor: "Primary",
};

export const OpenedDefault: StoryFn<accordionProps> = Template.bind({});
OpenedDefault.args = {
  ...Default.args,
  opened: {
    require: true,
    id: 3,
  },
};
