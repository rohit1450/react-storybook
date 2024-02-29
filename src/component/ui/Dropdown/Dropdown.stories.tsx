import { StoryFn, Meta } from "@storybook/react";
import Dropdown , {DropdownProps} from "./Dropdown";
import { useState } from "react";

import {
  UserCircleIcon,
  UserPlusIcon,
  UserMinusIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const meta: Meta<typeof Dropdown> = {
  title: "Components/ui/List",
  component: Dropdown,
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

export const Single: StoryFn<DropdownProps> = (args: DropdownProps) => (
  <Dropdown {...args} />
);

Single.args = {
  people: [
    {
      id: 1,
      name: `Durward Reynolds`,
      unavailable: false,
      icon: IconOne,
    },
    {
      id: 2,
      name: "Kenton Towne",
      unavailable: false,
      icon: IconTwo,
    },
    {
      id: 3,
      name: "Therese Wunsch",
      unavailable: false,
      icon: IconThree,
    },
    {
      id: 4,
      name: "Benedict Kessler",
      unavailable: false,
      icon: IconFour,
    },
    {
      id: 5,
      name: "Katelyn Rohan",
      unavailable: false,
      icon: IconFive,
    },
  ],
  labelIcon: false,
};

export const Multiple: StoryFn<DropdownProps> = (args: DropdownProps) => {
  const [multiple] = useState(true);

  return <Dropdown {...args} multiple={multiple} />;
};

Multiple.args = {
  ...Single.args,
};

export const MultipleIcon: StoryFn<DropdownProps> = (args: DropdownProps) => {
  const [multiple] = useState(true);
  return <Dropdown {...args} multiple={multiple} />;
};

MultipleIcon.args = {
  ...Single.args,
  labelIcon: true,
};

function IconOne(){
  return <UserCircleIcon className="h-4 w-4 inline-block me-1" />
}
function IconTwo(){
  return <UserPlusIcon className="h-4 w-4 inline-block me-1" />
}
function IconThree(){
  return <UserMinusIcon className="h-4 w-4 inline-block me-1" />
}
function IconFour(){
  return <UserCircleIcon className="h-4 w-4 inline-block me-1" />
}
function IconFive(){
  return <RocketLaunchIcon className="h-4 w-4 inline-block me-1" />
}


