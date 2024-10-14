import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoveDown, MoveUp } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Referrals {
  rank: string;
  avatar: string;
  name: string;
  referrals: number;
  tag: string;
}

const data: Referrals[] = [
  {
    rank: "4th",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c5e3/920d/866bb0ea27239b47a4416b6875417f91?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCqTEzYYJmXCiqD3WcJX7W-SUOulc7JgWd~I0qmxCpMXddfdsdY0EMxH0Z2BRkKUDY0z2jm2JyE2mPfZzym04-Yd-j3T2VO4A7cjyBLsT140al8u80F0Uh-ezqoLz3gwAeCGsogCcFu-q~zcWcsfgdr0h75Hy5eVciMbN3L-gIuKKfWDpwIqO79YxodrqFOolEoult4bvMkqNGV-~Xt803EncPtc0gsbtVsxbHcmBH0UDlBy~x-jeLMji52J-MPJCWPerR2rs655eJNz2ZQ7cfyPSnyemmEpDpYgABjrfx9gHmIRTi3g1brqIHb~49FYcb2SWNvrS2Ms9M2If1qjZg__",
    name: "Michael Mensah",
    referrals: 200,
    tag: "up",
  },
  {
    rank: "5th",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c5e3/920d/866bb0ea27239b47a4416b6875417f91?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCqTEzYYJmXCiqD3WcJX7W-SUOulc7JgWd~I0qmxCpMXddfdsdY0EMxH0Z2BRkKUDY0z2jm2JyE2mPfZzym04-Yd-j3T2VO4A7cjyBLsT140al8u80F0Uh-ezqoLz3gwAeCGsogCcFu-q~zcWcsfgdr0h75Hy5eVciMbN3L-gIuKKfWDpwIqO79YxodrqFOolEoult4bvMkqNGV-~Xt803EncPtc0gsbtVsxbHcmBH0UDlBy~x-jeLMji52J-MPJCWPerR2rs655eJNz2ZQ7cfyPSnyemmEpDpYgABjrfx9gHmIRTi3g1brqIHb~49FYcb2SWNvrS2Ms9M2If1qjZg__",
    name: "Michael Mensah",
    referrals: 180,
    tag: "down",
  },
  {
    rank: "6th",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c5e3/920d/866bb0ea27239b47a4416b6875417f91?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCqTEzYYJmXCiqD3WcJX7W-SUOulc7JgWd~I0qmxCpMXddfdsdY0EMxH0Z2BRkKUDY0z2jm2JyE2mPfZzym04-Yd-j3T2VO4A7cjyBLsT140al8u80F0Uh-ezqoLz3gwAeCGsogCcFu-q~zcWcsfgdr0h75Hy5eVciMbN3L-gIuKKfWDpwIqO79YxodrqFOolEoult4bvMkqNGV-~Xt803EncPtc0gsbtVsxbHcmBH0UDlBy~x-jeLMji52J-MPJCWPerR2rs655eJNz2ZQ7cfyPSnyemmEpDpYgABjrfx9gHmIRTi3g1brqIHb~49FYcb2SWNvrS2Ms9M2If1qjZg__",
    name: "Michael Mensah",
    referrals: 140,
    tag: "",
  },
  {
    rank: "7th",
    avatar:
      "https://s3-alpha-sig.figma.com/img/c5e3/920d/866bb0ea27239b47a4416b6875417f91?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCqTEzYYJmXCiqD3WcJX7W-SUOulc7JgWd~I0qmxCpMXddfdsdY0EMxH0Z2BRkKUDY0z2jm2JyE2mPfZzym04-Yd-j3T2VO4A7cjyBLsT140al8u80F0Uh-ezqoLz3gwAeCGsogCcFu-q~zcWcsfgdr0h75Hy5eVciMbN3L-gIuKKfWDpwIqO79YxodrqFOolEoult4bvMkqNGV-~Xt803EncPtc0gsbtVsxbHcmBH0UDlBy~x-jeLMji52J-MPJCWPerR2rs655eJNz2ZQ7cfyPSnyemmEpDpYgABjrfx9gHmIRTi3g1brqIHb~49FYcb2SWNvrS2Ms9M2If1qjZg__",
    name: "Michael Mensah",
    referrals: 120,
    tag: "",
  },
];

const columns: ColumnDef<Referrals>[] = [
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
        className="border border-[#D0D5DD] data-[state=unchecked]:bg-white"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border border-[#D0D5DD] data-[state=unchecked]:bg-white"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "rank",
    header: "rank",
    cell: ({ row }) => {
      const obj = row.original;
      return (
        <span className="flex items-baseline gap-1 font-medium text-darkPrimary">
          {obj.tag === "up" && (
            <MoveUp className="text-[#12B76A]" size={10} strokeWidth={3} />
          )}
          {obj.tag === "down" && (
            <MoveDown className="text-error700" size={10} strokeWidth={3} />
          )}
          {obj.rank}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: "name",
    cell: ({ row }) => {
      const obj = row.original;
      return (
        <div className="flex items-center gap-4">
          <img
            src={obj.avatar}
            alt={obj.name}
            className="h-[42px] w-[42px] rounded-[9px]"
          />
          <p className="text-[#101828]">{obj.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "referrals",
    header: "referrals",
    cell: ({ row }) => (
      <span className="rounded-2xl bg-gray75 px-2 py-2 text-[15px] text-gray500">
        {row.getValue("referrals")}
      </span>
    ),
  },
];

export default function ReferralsTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Table className="mt-4">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="border-none bg-gray100 hover:bg-gray100"
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead
                  key={header.id}
                  className="text-sm capitalize text-gray600 first:rounded-l-xl last:rounded-r-xl"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="rounded-lg border-none"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
