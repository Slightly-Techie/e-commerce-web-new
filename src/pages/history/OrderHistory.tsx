import OrderHistoryHeader from "@/components/order/OrderHistoryHeader";
import OrderItemDesktop from "@/components/order/OrderItemDesktop";
import OrderItemMobile from "@/components/order/OrderItemMobile";

import { Accordion } from "@/components/ui/accordion";
import { Table } from "@/components/ui/table";
import { Order } from "@/types";

const orderhistory: Order[] = [
  {
    productName: "Apple macbook Pro 16” Laptop",
    category: "Computing",
    orderId: "ST-45FG7",
    date: "25 Nov, 2023",
    status: "Delivered",
    amount: "GHS 1,500.00",
    image:
      "https://s3-alpha-sig.figma.com/img/71de/7823/10bb49a6369db8469303e74d7cf77c21?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YH4b87fMXy4pt9252DnrWvOsUJ5UD0ova32g4-CGCvnefaAAsVDVjy~tC-gwlkslsz1yCjiaPqV9l1c5ZdJ8Iyf03wXDlaaKzjxY9gxiwKrGjurvCc8ZEv2g4HaHSCW3CgobaWVagxUNfNvB0KqOZtrwA3MfzekF8kAcP5MqeJMSJ8jFTrEkh-MobmvLAYwKtSgOgqwFJxh40gmQmdD0bKQVlJ3bqFoOf-kTLZKROUhr102LKjM7BBPEkRD5j0bk5nYsq0iK3C6bxY1MhEhjljoEz7S~i33KazlKhsO1dGlKORTagM-DpG6LSMh9UOQXmIycQHBMi1L8LWt5UHsq4w__",

    name: "Michael Mensah",
    phone: "+ 233 55 553 8591",
    address: "Kasoa Akweley Roundabout KT 67",
    subTotal: "GHC 45088.00",
    delivery: "GHC 24.00",
    coinDiscount: "-GHC 0.00",
    total: "GHC 4,600.00",
    quantity: 1,
  },
];

const OrderHistory = () => {
  return (
    <div className="min-h-[84vh] rounded-tl-2xl rounded-tr-2xl bg-white px-4 py-[1.625rem] md:px-6 lg:ml-[276px]">
      <h4 className="mb-6 text-lg font-bold">Order history</h4>

      {/* mobile screen */}
      <div className="font-product-sans sm:hidden">
        {orderhistory.map((order) => (
          <OrderItemMobile key={order.orderId} {...order} />
        ))}
      </div>

      {/* large screen */}
      <Table className="hidden sm:block">
        <OrderHistoryHeader />
        <article className="mt-3 rounded-md">
          <Accordion type="single" collapsible className="w-full pb-2">
            {orderhistory.map((order) => (
              <OrderItemDesktop key={order.orderId} {...order} />
            ))}
          </Accordion>
        </article>
      </Table>
    </div>
  );
};

export default OrderHistory;
