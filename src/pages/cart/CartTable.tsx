import Asus from "@/assets/images/products/Asus.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CartItem from "./CartItem";
import QuantityControl from "./QuantityControl";

const items = [
  {
    id: "1",
    name: 'Q-base 45" wide monitor...',
    image: Asus,
    amount: 3,
    unit_price: "4530.00",
    final_price: "4530.00",
  },
  {
    id: "2",
    name: 'Q-base 45" wide monitor...',
    image: Asus,
    amount: 3,
    unit_price: "4530.00",
    final_price: "4530.00",
  },
  {
    id: "2",
    name: 'Q-base 45" wide monitor...',
    image: Asus,
    amount: 3,
    unit_price: "4530.00",
    final_price: "4530.00",
  },
];

const CartTable = () => {
  return (
    <Table className="font-semibold text-[#111111]">
      <TableHeader>
        <TableRow className="text-base">
          <TableHead className="font-semibold text-[#111111]">
            Product
          </TableHead>
          <TableHead className="text-center font-semibold text-[#111111]">
            Unit Price
          </TableHead>
          <TableHead className="text-center font-semibold text-[#111111]">
            Quantity
          </TableHead>
          <TableHead className="text-center font-semibold text-[#111111]">
            Final Price
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {items.map((item) => (
          <TableRow className="text-base" key={item.id}>
            <TableCell className="min-w-[340px]">
              <CartItem {...item} />
            </TableCell>

            <TableCell className="min-w-[109px] text-center">
              {item.unit_price}
            </TableCell>

            <TableCell className="min-w-[126px]">
              <QuantityControl amount={item.amount} />
            </TableCell>

            <TableCell className="min-w-[109px] text-center">
              {item.final_price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CartTable;
