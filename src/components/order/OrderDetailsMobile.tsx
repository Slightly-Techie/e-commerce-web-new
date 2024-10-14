import { OrderStatus } from "@/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import DeliveryStatus from "./DeliveryStatus";

type OrderDetails = {
  orderId: string;
  date: string;
  quantity: number;
  status: OrderStatus;
};

export default function OrderDetailsMobile({
  orderId,
  date,
  quantity,
  status,
}: OrderDetails) {
  return (
    <AccordionItem value="order-details">
      <AccordionTrigger className="text-lg">Order Details</AccordionTrigger>
      <AccordionContent className="flex flex-col items-center justify-center gap-3 py-1">
        <span className="mt-1 flex w-full justify-between">
          <p className="text-gray500">Order ID</p>
          <p className="text-[#111111]">{orderId}</p>
        </span>
        <span className="mt-1 flex w-full justify-between">
          <p className="text-gray500">Items</p>
          <p className="text-[#111111]">{quantity}</p>
        </span>
        <span className="mt-1 flex w-full justify-between">
          <p className="text-gray500">Date</p>
          <p className="text-[#111111]">{date}</p>
        </span>
        <span className="mt-1 flex w-full justify-between">
          <p className="text-gray500">Status</p>
          <p className="text-[#111111]">
            <DeliveryStatus status={status} />
          </p>
        </span>
      </AccordionContent>
    </AccordionItem>
  );
}
