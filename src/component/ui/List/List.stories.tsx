import { StoryFn, Meta } from "@storybook/react";
import List, { ListProps } from "./List";
import { useState } from "react";

import {
  UserCircleIcon,
  UserPlusIcon,
  UserMinusIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const meta: Meta<typeof List> = {
  title: "Components/ui/List",
  component: List,
  tags: ["autodocs"],
};

export default meta;

export const Single: StoryFn<ListProps> = (args: ListProps) => (
  <List {...args} />
);

Single.args = {
  people: [
    { id: 1, name: "Durward Reynolds", unavailable: false },
    { id: 2, name: "Kenton Towne", unavailable: false },
    { id: 3, name: "Therese Wunsch", unavailable: false },
    { id: 4, name: "Benedict Kessler", unavailable: false },
    { id: 5, name: "Katelyn Rohan", unavailable: false },
  ],
};

export const Multiple: StoryFn<ListProps> = (args: ListProps) => {
  const [multiple] = useState(true);
  const icons = [
    <UserCircleIcon className="h-4 w-4" />,
    <UserPlusIcon className="h-4 w-4" />,
    <UserMinusIcon className="h-4 w-4" />,
    <RocketLaunchIcon className="h-4 w-4" />,
    <UserCircleIcon className="h-4 w-4" />,
  ];

  return <List {...args} multiple={multiple} icons={icons} />;
};

Multiple.args = {
  ...Single.args,
};
