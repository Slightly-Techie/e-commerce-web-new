import { Order } from "@/types";

export default function DeliveryAdrress({
  orderDetails,
}: {
  orderDetails: Order;
}) {
  const { name, phone, address } = orderDetails;
  return (
    <div className="w-full md:w-1/2">
      <div className="rounded-t-md border border-gray200 bg-gray75 px-4 py-3 font-semibold">
        Delivery Address
      </div>
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
    </div>
  );
}
