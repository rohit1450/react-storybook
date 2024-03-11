import {
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";

export interface tableProps {
  tableType: string;
  columns: {
    accessorKey: string;
    header: string;
  }[];
  data: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
  }[];
  enableColumnActions: boolean;
  enableColumnFilters: boolean;
  enableSorting: boolean;
  enablePagination: boolean;
  columnHover: boolean;
  enableColumnOrdering: boolean;
  paginationDisplayMode: "default" | "pages";
  enableBottomToolbar: boolean;
  enableTopToolbar: boolean;
  initialRow: number;
  enableRowNumbers: boolean;
  enableStickyHeader: boolean;
  enableClickToCopy: boolean;
  positionPagination: "bottom" | "top" | "both";
}

const Table = ({
  columns,
  data,
  enableColumnActions,
  enableColumnFilters,
  enableSorting,
  enablePagination,
  columnHover,
  enableColumnOrdering,
  paginationDisplayMode,
  enableTopToolbar,
  enableBottomToolbar,
  initialRow,
  enableRowNumbers,
  enableStickyHeader,
  enableClickToCopy,
  positionPagination,
  tableType,
}: tableProps) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: enableColumnActions ?? false,
    enableColumnFilters: enableColumnFilters ?? false,
    enablePagination: enablePagination ?? false,
    enableSorting: enableSorting ?? false,
    enableColumnOrdering: enableColumnOrdering ?? false,
    paginationDisplayMode: paginationDisplayMode ?? "default",
    enableBottomToolbar: enableBottomToolbar ?? true,
    enableTopToolbar: enableTopToolbar ?? false,
    enableRowNumbers: enableRowNumbers ?? true,
    enableColumnVirtualization: true,
    enableRowVirtualization: true,
    enableStickyHeader: enableStickyHeader ?? false,
    positionPagination: positionPagination ?? "bottom",
    initialState: {
      pagination: { pageSize: initialRow ?? 10, pageIndex: 0 },
    },
    enableClickToCopy: enableClickToCopy ?? false,
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default,
    }),
    muiTableBodyRowProps: { hover: columnHover ?? false },
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        caption: {
          captionSide: "top",
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontStyle: "italic",
        fontWeight: "normal",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
  });

  if (tableType === "advance") {
    return <MaterialReactTable table={table} />;
  }

  if (tableType === "minimal") {
    return <MaterialReactTable table={table} />;
  }
};

export default Table;
