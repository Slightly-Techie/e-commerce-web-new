import DeliveryAdrress from "./DeliveryAdrress";
import OrderDetails from "./OrderDetails";
import PaymentInformation from "./PaymentInformation";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function OrderItem() {
  return (
    <AccordionItem
      value="item-1"
      className="my-3 w-full rounded-md border border-gray200 px-4 first:mt-0 last:mb-0"
    >
      <AccordionTrigger className="justify-between">
        <OrderDetails />
      </AccordionTrigger>
      <AccordionContent>
        {/* order details */}
        <article className="flex flex-col justify-between gap-4 pt-4 font-product-sans md:flex-row">
          <DeliveryAdrress />
          <PaymentInformation />
        </article>
      </AccordionContent>
    </AccordionItem>
  );
}
