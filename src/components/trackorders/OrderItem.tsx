import OrderAddress from "./OrderAddress";
import OrderDate from "./OrderDate";
import OrderedProducts from "./OrderedProducts";
import OrderProgress from "./OrderProgress";

export default function OrderItem() {
  return (
    <article className="shadow-order flex w-full max-w-[752px] flex-col rounded-[14px] border border-gray200 p-6">
      <div>
        <div className="flex items-center justify-between">
          <h5 className="text-xl font-bold text-darkPrimary">Product</h5>
          <p className="font-medium text-gray500">
            Order number: <span className="text-[#1751D0]">#ST-45678</span>
          </p>
        </div>
        <OrderedProducts />
      </div>

      <div className="mt-8 md:mt-12">
        <OrderDate />

        <OrderProgress />

        <div className="my-4 border border-gray200 md:my-8"></div>

        <OrderAddress />
      </div>
    </article>
  );
}
