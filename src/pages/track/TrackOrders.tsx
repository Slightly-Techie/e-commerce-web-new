import OrderItem from "@/components/trackorders/OrderItem";

export default function TrackOrders() {
  return (
    <section className="rounded-tl-2xl rounded-tr-2xl bg-white px-3 py-[1.625rem] md:px-6 lg:ml-[276px]">
      <h1 className="text-[28px] font-bold text-darkPrimary">Open orders</h1>
      <main className="mt-12 flex flex-col items-center gap-8">
        <OrderItem />
        <OrderItem />
      </main>
    </section>
  );
}
