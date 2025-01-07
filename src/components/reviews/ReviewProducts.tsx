import OrderedProducts from "../trackorders/OrderedProducts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function ReviewProducts() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="text-lg font-bold text-darkPrimary">
          <h2 className="text-sm font-bold md:text-xl">Delivery address </h2>
          <p className="mr-8 text-xs font-medium text-gray500 md:text-base">
            Order number: <span className="text-[#1751D0]">#ST-45678</span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="-mt-8">
          <OrderedProducts />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
