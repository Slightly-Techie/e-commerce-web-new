import Button from "@/components/Button";
// import OrderItem from "@/components/trackorders/OrderItem";
import { ButtonType } from "@/types";
import { useNavigate } from "react-router-dom";

export default function TrackOrders() {
  return (
    <section className="rounded-tl-2xl min-h-[82vh] rounded-tr-2xl bg-white px-3 py-[1.625rem] md:px-6 lg:ml-[276px]">
      <h1 className="text-[28px] font-bold text-darkPrimary">Open orders</h1>
      <main className="mt-12 flex flex-col items-center gap-8">
        {/* <OrderItem /> */}
        <EmptyOrders/>
      </main>
    </section>
  );
}

function EmptyOrders() {
  const navigate = useNavigate();
  return (
          <article className="w-full flex flex-col items-center justify-center md:w-[346px]">
            <img src="/track_orders.webp" alt="cart empty" className="size-[100px]" />
            <div className="mt-5 text-center space-y-3">
              <h5 className="font-bold text-xl">There’s no active order</h5>
              <p className="text-[#64748B]">You don’t have any active orders right now.</p>
            </div>
            <Button
            label="Shop for items"
            btnType={ButtonType.primary}
            className="mb-8 mt-7 border border-gray300 font-semibold cursor-pointer"
            onClick={() => navigate("/")}
            />
          </article>  
  )
}
