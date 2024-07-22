import { Order } from "@/types";
import DeliveryAdrress from "./DeliveryAdrress";
import OrderDetails from "./OrderDetails";
import PaymentInformation from "./PaymentInformation";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function OrderItem(props: Order) {
  return (
    <AccordionItem
      value={props.orderId}
      className="my-3 w-full rounded-md border border-gray200 px-4 first:mt-0 last:mb-0"
    >
      <AccordionTrigger className="justify-between">
        <OrderDetails orderDetails={props} />
      </AccordionTrigger>
      <AccordionContent>
        {/* order details */}
        <article className="flex flex-col justify-between gap-4 pt-4 font-product-sans md:flex-row">
          <DeliveryAdrress orderDetails={props} />
          <PaymentInformation orderDetails={props} />
        </article>
      </AccordionContent>
    </AccordionItem>
  );
}
