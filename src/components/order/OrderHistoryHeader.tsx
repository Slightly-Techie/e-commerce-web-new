import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrderHistoryHeader() {
  return (
    <Table className="w-full">
      <TableHeader className="bg-gray75 font-product-sans">
        <TableRow>
          <TableHead className="-mr-[4.5rem] flex w-[15rem] items-center gap-2 rounded-lg text-[12px] text-gray600 md:text-base">
            <Checkbox className="border-[#D0D5DD]" />
            Product Name
          </TableHead>
          <TableHead className="text-[12px] text-gray600 md:text-base">
            Order ID
          </TableHead>
          <TableHead className="text-[12px] text-gray600 md:text-base">
            Order date
          </TableHead>
          <TableHead className="text-[12px] text-gray600 md:text-base">
            Status
          </TableHead>
          <TableHead className="text-[12px] text-gray600 md:text-base">
            Amount
          </TableHead>
          <TableHead className="text-[12px] text-gray600 md:text-base"></TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
}
