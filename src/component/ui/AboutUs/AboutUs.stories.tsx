import { StoryFn } from "@storybook/react";
import AboutUs, { aboutProps } from "./AboutUs";

export default {
  title: "Components/ui/About Us",
  component: AboutUs,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      description: "Heading of the section",
    },
    content: {
      description: "Defines Content of the section",
    },
  },
};

const Template: StoryFn<aboutProps> = (args: aboutProps) => (
  <AboutUs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: "About Us",
  content:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id neque auctor tellus mattis accumsan.Curabitur vestibulum mauris sit amet velit fermentum consequat.Vivamus vehicula eu felis vitae dictum.",
  aboutClass: "",
};
