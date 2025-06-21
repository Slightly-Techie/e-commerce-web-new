import { Checkbox } from "@/components/ui/checkbox"
import { Order } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Dot } from "lucide-react"



export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
    <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
        ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,

    },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <img src={row.original.image} className="h-10 w-12 rounded-md" />
          <div className="text-left">
            <h4 className="line-clamp-1 text-[#101828]">{row.original.productName}</h4>
            <span className="text-gray500">{row.original.category}</span>
          </div>
        </div>
    )
  },
  {
    accessorKey: "orderId",
      header: "Order ID",
    cell: ({ row }) => (
        <div className="rounded-2xl bg-gray100 w-min py-[2px] text-xs text-gray600 md:px-2 md:text-sm">
            {row.original.orderId}
      </div>
    ),
  },
  {
    accessorKey: "date",
      header: "Order date",
     cell: ({ row }) => (
        <div className="text-sm text-gray500">
            {row.original.date}
      </div>
    ),
  },
  {
    accessorKey: "status",
      header: "Status",
      cell: (
          { row }) => (
        <span
      className={`w-fit flex items-center gap-1 rounded-xl ${row.original.status === "Delivered" ? "bg-[#ECFDF3] text-[#027A48]" : "bg-[#FFFAEB] text-[#B54708]"} px-2 py-px text-sm`}
    >
      <Dot
        strokeWidth={10}
        size={10}
        color={row.original.status === "Pending" ? "#F79009" : "#027A48"}
      />
      {row.original.status}
    </span>
     )
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
        <div className="text-sm text-[#111111] font-medium">
            {row.original.amount}
      </div>
    )
  },
]