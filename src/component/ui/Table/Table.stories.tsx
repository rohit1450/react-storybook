import Table, { tableProps } from "./Table";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ui/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    tableType: {
      description: "Defines type of table minimal or advance",
      table: {
        defaultValue: {
          summary: "required",
        },
      },
    },
    columns: {
      description: "An array of objects which defines header of table",
      table: {
        defaultValue: {
          summary: "required",
        },
      },
    },
    data: {
      description:
        "An array of objects which defines actual data of table excluding header",
      table: {
        defaultValue: {
          summary: "required",
        },
      },
    },
    enableColumnActions: {
      description: "Define column action for header of the table",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    enableColumnFilters: {
      description: "Apply column filter to header of the table",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    enableSorting: {
      description: "Apply sorting when click on header of the table",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    enablePagination: {
      description: "Apply pagination for table",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    columnHover: {
      description: "Apply hover on rows",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    paginationDisplayMode: {
      description: "Apply default or page style pagination to the table",
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    enableBottomToolbar: {
      description: "Show or hide bottom toolbar",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    enableTopToolbar: {
      description: "Show or hide top toolbar",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    initialRow: {
      description: "Defines initial value for row in pagination",
      table: {
        defaultValue: {
          summary: 5,
        },
      },
    },
    enableRowNumbers: {
      description: "Add row number column to the table",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
    enableStickyHeader: {
      description: "Made header of the table sticky",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    enableClickToCopy: {
      description: "Click on cell to copy data of the particular cell",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    positionPagination: {
      description: "Defines position of pagination of the table",
      table: {
        defaultValue: {
          summary: "bottom",
        },
      },
    },
    enableColumnOrdering: {
      description: "Enable column ordering with dragable option",
    },
  },
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
