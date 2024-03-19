import { Meta, StoryFn } from "@storybook/react";
import BreadCrumbs, { BreadCrumbsProps } from "./BreadCrumbs";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

export default {
  title: "Components/ui/BreadCrumbs",
  component: BreadCrumbs,
  tags: ["autodocs"],
  argTypes: {
    BreadCrumbsStructure: {
      description:
        "structure body of the breadcrumbs where path segment is an array of path as string",
    },
  },
} as Meta;

const Template: StoryFn<BreadCrumbsProps> = (args: BreadCrumbsProps) => (
  <BreadCrumbs {...args} />
);

export const Default: StoryFn<BreadCrumbsProps> = Template.bind({});
Default.args = {
  BreadCrumbsStructure: ({ pathSegments }) => {
    return (
      <div className="w-fit flex flex-col sm:flex-row items-center bg-Primary rounded text-white px-5">
        <div className="cursor-pointer px-2 py-2">Home</div>
        <ChevronRightIcon className="h-5 w-5 rotate-90 sm:rotate-0" />
        {pathSegments.map((segment: string, index: number) => {
          return (
            <Fragment key={index}>
              <div key={index} className="cursor-pointer px-2 py-2">
                {segment}
              </div>
              {index !== pathSegments.length - 1 && (
                <ChevronRightIcon className="h-5 w-5 rotate-90 sm:rotate-0" />
              )}
            </Fragment>
          );
        })}
      </div>
    );
  },
};
