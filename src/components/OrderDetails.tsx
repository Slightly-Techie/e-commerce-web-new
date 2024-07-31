import { Order } from "@/types";
import DeliveryStatus from "./DeliveryStatus";
import { Checkbox } from "./ui/checkbox";

export default function OrderDetails({
  orderDetails,
}: {
  orderDetails: Order;
}) {
  const { image, productName, category, status, orderId, amount } =
    orderDetails;
  return (
    <>
      <div className="flex w-[13rem] items-center gap-px text-[12px] md:gap-2 md:text-base">
        <Checkbox className="border-[#D0D5DD]" />
        <div className="flex items-center gap-2">
          <img src={image} className="h-[40px] w-12 rounded-md" />
          <div className="text-left">
            <h4 className="line-clamp-1 text-[#101828]">{productName}</h4>
            <span className="text-gray500">{category}</span>
          </div>
        </div>
      </div>
      <div className="mr-4 line-clamp-1 rounded-2xl bg-gray100 px-1 py-[2px] text-[12px] text-gray600 md:px-2 md:text-base">
        {orderId}
      </div>
      <p className="text-[12px] text-gray500 md:text-base">25 Nov, 2023</p>
      <DeliveryStatus status={status} />
      <p className="text-[12px] text-[#111111] md:text-base">{amount}</p>
    </>
  );
}
