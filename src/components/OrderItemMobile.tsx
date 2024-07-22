import { Order } from "@/types";
import DeliveryStatus from "./DeliveryStatus";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function OrderItemMobile(props: Order) {
  const { orderId, image, productName, amount, date, status, quantity } = props;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={orderId}>
        <AccordionTrigger className="flex items-center gap-2">
          <img className="h-[58px] w-[58px] rounded-md" src={image} />
          <div className="flex flex-col items-start gap-px">
            <p className="font-semibold text-[#111111]">{productName}</p>
            <p className="text-gray500">{amount}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col items-center justify-center gap-3 py-1">
          <div className="mt-1 flex w-full justify-between">
            <p className="text-gray500">Order ID</p>
            <p className="text-[#111111]">{orderId}</p>
          </div>
          <div className="mt-1 flex w-full justify-between">
            <p className="text-gray500">Items</p>
            <p className="text-[#111111]">{quantity}</p>
          </div>
          <div className="mt-1 flex w-full justify-between">
            <p className="text-gray500">Date</p>
            <p className="text-[#111111]">{date}</p>
          </div>
          <div className="mt-1 flex w-full justify-between">
            <p className="text-gray500">Status</p>
            <p className="text-[#111111]">
              <DeliveryStatus status={status} />
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
