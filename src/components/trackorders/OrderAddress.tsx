import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function OrderAddress() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="text-lg font-bold text-darkPrimary">
          Delivery address
        </AccordionTrigger>
        <AccordionContent className="shadow-accordionContent mt-2 flex flex-col gap-5 rounded-[8px] border border-gray200 bg-gray50 p-3 md:p-5">
          <div className="flex items-center justify-between">
            <p className="text-gray500">Name</p>
            <p className="font-semibold text-darkPrimary">Michael Mensah</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray500">Phone</p>
            <p className="font-semibold text-darkPrimary">+ 233 55 553 8591</p>
          </div>
          <div className="flex items-center justify-between gap-6">
            <p className="text-gray500">Address</p>
            <p className="line-clamp-1 font-semibold text-darkPrimary">
              Kasoa Akweley Roundabout KT 67
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
