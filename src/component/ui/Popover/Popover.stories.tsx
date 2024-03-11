import { Meta, StoryFn } from "@storybook/react";
import Pop, { PopoverProps } from "./Popover";

export default {
  title: "Components/ui/PopOver",
  component: Pop,
  tags: ["autodocs"],
  argTypes: {
    solutions: {
      description:
        "An array of object containing list of content and icon for popover",
    },
    footerTitle: {
      description: "Defines title of the footer of the popover",
    },
    footerText: {
      description: "Defines content of the footer of popover",
    },
    btnTitle: {
      description: "Defines text for button to open popover",
    },
    className: {
      description: "Custom classname for tailwind merge",
    },
    panelClass: {
      description: "Custom classname for tailwind merge",
    },
    arrowClass: {
      description: "Custom classname for tailwind merge",
    },
  },
} as Meta;

const Template: StoryFn<PopoverProps> = (args: PopoverProps) => (
  <Pop {...args} />
);

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
    Icon: IconOne,
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
    Icon: IconTwo,
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
    Icon: IconThree,
  },
];

export const Default: StoryFn<PopoverProps> = Template.bind({});
Default.args = {
  btnTitle: "PopOver",
  footerTitle: "Documentation",
  footerText: "Start integrating products and tools",
  className: "",
  panelClass: "",
  arrowClass: "",
  PopContent: () => (
    <div className="px-7 py-5 mb-5">
      {solutions.map((soln, index) => {
        return (
          <div key={index} className="mt-5 cursor-pointer">
            <div className="flex gap-7">
              <div className="h-10 w-10">{soln.Icon()}</div>
              <div>
                <h5 className="text-md">{soln.name}</h5>
                <p className="text-sm">{soln.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ),
};

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
