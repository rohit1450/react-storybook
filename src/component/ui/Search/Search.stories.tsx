import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Search, { SearchProps } from "./Search";

const meta: Meta<typeof Search> = {
  title: "Components/ui/Search",
  component: Search,
  tags: ["autodocs"],
  argTypes: {
    people: {
      description: "An array of object for list of search",
    },
  },
};

export default meta;

const Template: StoryFn<SearchProps> = (args: SearchProps) => (
  <Search {...args} />
);

export const Single: StoryFn<SearchProps> = Template.bind({});
Single.args = {
  people: [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
  ],
};

export const Multiple: StoryFn<SearchProps> = (args: SearchProps) => {
  const [multiple] = useState(true);

  return <Search {...args} multiple={multiple} />;
};

Multiple.args = {
  people: [
    { id: 1, name: "Wade Cooper" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" },
    { id: 4, name: "Tom Cook" },
    { id: 5, name: "Tanya Fox" },
    { id: 6, name: "Hellen Schmidt" },
  ],
};
