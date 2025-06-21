import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Button from "@/components/Button"
import { ButtonType } from "@/types"
import { useNavigate } from "react-router-dom"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function HistoryDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
    
    const navigate = useNavigate();

  return (
    <div>
      <Table>
        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="hover:bg-white">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="bg-[#FAFAFA] text-[#475569] text-sm border-t border-b border-[#E2E8F0] first:border-l last:border-r">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody >
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-white border border-[#EAECF0c]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="border-t border-b border-[#E2E8F0] first:border-l last:border-r">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="border-b-0 hover:bg-white">
                <TableCell colSpan={columns.length} className="h-24 text-center ">
                <article className="w-full flex flex-col mx-auto items-center justify-center md:w-[346px]">
                <img src="/track_orders.webp" alt="cart empty" className="size-[100px]" />
                <div className="mt-5 text-center space-y-3">
                <h5 className="font-bold text-xl">There’s no history currently</h5>
                <p className="text-[#64748B]">Your orders will appear here after you’ve made one.</p>
                </div>
                <Button
                label="Shop for items"
                btnType={ButtonType.primary}
                className="mb-8 mt-7 border border-gray300 font-semibold cursor-pointer"
                onClick={() => navigate("/")}
                />
            </article>  
                </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}