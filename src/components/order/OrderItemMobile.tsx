import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Order } from "@/types";
import DeliveryAdrressMobile from "./DeliveryAdrressMobile";
import OrderDetailsMobile from "./OrderDetailsMobile";
import PaymentDetailsMobile from "./PaymentDetailsMobile";

export default function OrderItemMobile({
  orderId,
  image,
  productName,
  amount,
  date,
  status,
  quantity,
  name,
  address,
  phone,
  subTotal,
  delivery,
  coinDiscount,
  total,
}: Order) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={orderId}>
        <AccordionTrigger className="flex items-center justify-start gap-6">
          <img className="h-[58px] w-[58px] rounded-md" src={image} />
          <div className="flex flex-col items-start gap-px">
            <p className="font-semibold text-[#111111]">{productName}</p>
            <p className="text-gray500">{amount}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="w-full">
            <OrderDetailsMobile
              orderId={orderId}
              date={date}
              quantity={quantity}
              status={status}
            />
            <DeliveryAdrressMobile
              name={name}
              phone={phone}
              address={address}
            />
            <PaymentDetailsMobile
              subTotal={subTotal}
              delivery={delivery}
              coinDiscount={coinDiscount}
              total={total}
            />
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
