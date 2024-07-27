import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type DeliveryAddress = {
  name: string;
  phone: string;
  address: string;
};

export default function DeliveryAdrressMobile({
  name,
  address,
  phone,
}: DeliveryAddress) {
  return (
    <AccordionItem value="delivery-address">
      <AccordionTrigger className="text-lg">Deliver Address</AccordionTrigger>
      <AccordionContent>
        <div className="flex h-[180px] gap-6 rounded-b-md border border-t-0 border-gray200 bg-gray50 px-4 py-4">
          <div className="flex flex-col gap-4 text-base text-gray500">
            <p>Name</p>
            <p>Phone</p>
            <p>Address</p>
          </div>
          <div className="flex flex-col gap-4 text-base text-[#111111]">
            <p>{name}</p>
            <p>{phone}</p>
            <p className="line-clamp-1">{address}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
