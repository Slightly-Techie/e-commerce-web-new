import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type PaymentDetails = {
  subTotal: string;
  delivery: string;
  coinDiscount: string;
  total: string;
};

export default function PaymentDetailsMobile({
  subTotal,
  delivery,
  coinDiscount,
  total,
}: PaymentDetails) {
  return (
    <AccordionItem value="payment-details" className="border-b-0">
      <AccordionTrigger className="text-lg">Payment Details</AccordionTrigger>
      <AccordionContent>
        <div className="flex h-[175px] flex-col rounded-b-md border border-t-0 border-gray200 bg-gray50 px-4 py-4">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4 text-base text-gray500">
              <p>Sub Total</p>
              <p>Delivery</p>
              <p>Coin discount</p>
            </div>
            <div className="flex flex-col gap-4 text-base text-[#111111]">
              <p>{subTotal}</p>
              <p>{delivery}</p>
              <p>{coinDiscount}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between text-base font-bold">
            <p>Total</p>
            <p>{total}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
