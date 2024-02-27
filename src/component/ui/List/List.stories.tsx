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
  argTypes: {
    people: {
      description:
        "An array of object contains people information to be rendered on list",
    },
    labelIcon: {
      description: "Boolean to specify need of icons",
    },
    multiple: {
      description: "Boolean value to select multiple people in list",
    },
  },
};
export default meta;

export const Single: StoryFn<ListProps> = (args: ListProps) => (
  <List {...args} />
);

Single.args = {
  people: [
    {
      id: 1,
      name: `Durward Reynolds`,
      unavailable: false,
      icon: <UserCircleIcon className="h-4 w-4 inline-block me-1" />,
    },
    {
      id: 2,
      name: "Kenton Towne",
      unavailable: false,
      icon: <UserPlusIcon className="h-4 w-4 inline-block me-1" />,
    },
    {
      id: 3,
      name: "Therese Wunsch",
      unavailable: false,
      icon: <UserMinusIcon className="h-4 w-4 inline-block me-1" />,
    },
    {
      id: 4,
      name: "Benedict Kessler",
      unavailable: false,
      icon: <UserCircleIcon className="h-4 w-4 inline-block me-1" />,
    },
    {
      id: 5,
      name: "Katelyn Rohan",
      unavailable: false,
      icon: <RocketLaunchIcon className="h-4 w-4 inline-block me-1" />,
    },
  ],
  labelIcon: false,
};

export const Multiple: StoryFn<ListProps> = (args: ListProps) => {
  const [multiple] = useState(true);

  return <List {...args} multiple={multiple} />;
};

Multiple.args = {
  ...Single.args,
};

export const MultipleIcon: StoryFn<ListProps> = (args: ListProps) => {
  const [multiple] = useState(true);
  return <List {...args} multiple={multiple} />;
};

MultipleIcon.args = {
  ...Single.args,
  labelIcon: true,
};
