import Table, { tableProps } from "./Table";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Table",
  component: Table,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn<tableProps> = (args: tableProps) => <Table {...args} />;

const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
];

const data = [
  {
    firstName: "Dylan",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    firstName: "Raquel",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    firstName: "Ervin",
    lastName: "Reinger",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    firstName: "Brittany",
    lastName: "McCullough",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    firstName: "Branson",
    lastName: "Frami",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    firstName: "Dylan",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    firstName: "Raquel",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    firstName: "Ervin",
    lastName: "Reinger",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    firstName: "Brittany",
    lastName: "McCullough",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    firstName: "Branson",
    lastName: "Frami",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    firstName: "Dylan",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    firstName: "Raquel",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    firstName: "Ervin",
    lastName: "Reinger",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    firstName: "Brittany",
    lastName: "McCullough",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    firstName: "Branson",
    lastName: "Frami",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

export const Advance: StoryFn<tableProps> = Template.bind({});
Advance.args = {
  tableType: "advance",
  columns,
  data,
  enableColumnActions: true,
  enableColumnFilters: true,
  enableSorting: true,
  enablePagination: true,
  columnHover: true,
  enableColumnOrdering: true,
  paginationDisplayMode: "pages",
  enableBottomToolbar: true,
  enableTopToolbar: true,
  initialRow: 5,
  enableRowNumbers: true,
  enableStickyHeader: true,
  enableClickToCopy: true,
  positionPagination: "bottom",
};

export const Minimal: StoryFn<tableProps> = Template.bind({});
Minimal.args = {
  tableType: "minimal",
  data,
  columns,
};
