import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Item } from "./Cart";
import CartItem from "./CartItem";
import QuantityControl from "./QuantityControl";

interface CartTableProps {
  cartItems: Item[];
}

const CartTable = ({ cartItems }: CartTableProps) => {
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
        {cartItems.map((item) => {
          const finalPrice = +item.price * item.quantity;

          return (
            <TableRow className="text-base" key={item.id}>
              <TableCell className="min-w-[340px]">
                <CartItem {...item} />
              </TableCell>

              <TableCell className="min-w-[109px] text-center">
                ₵{item.price}
              </TableCell>

              <TableCell className="min-w-[126px]">
                <QuantityControl id={item.id} amount={item.quantity} />
              </TableCell>

              <TableCell className="min-w-[109px] text-center">
                ₵{finalPrice}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CartTable;
