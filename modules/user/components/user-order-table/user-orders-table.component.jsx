import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DateTime } from "luxon";
import styles from '../../user.module.css'

const columnHelper = createColumnHelper();

export const UserOrdersTable = ({ data, orderStatus }) => {
  const columns = [
    columnHelper.accessor("created_at", {
      header: "Дата",
      cell: (info) =>
        DateTime.fromISO(info.getValue())
          .setZone("Europe/Kiev")
          .toLocaleString(DateTime.DATETIME_SHORT),
    }),
    columnHelper.accessor("order_items", {
      header: "Опис",
      cell: (info) =>
        info
          .getValue()
          .map((orderItem) => `${orderItem.item.title} ${orderItem.amount}шт`)
          .join(", "),
    }),
    columnHelper.accessor("status", {
      header: "Статус",
      cell: (info) =>
        orderStatus.find((st) => st.id === info.getValue())?.label,
    }),
    columnHelper.accessor("sum", {
      header: "Сума",
      cell: (info) => `${info.getValue()} грн`,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr className={styles.tr__table_info} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
