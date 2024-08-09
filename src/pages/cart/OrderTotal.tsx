import alertCircleIcon from "@/assets/icons/alert-circle.svg";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cartStore";
import { useNavigate } from "react-router-dom";

const OrderTotal = () => {
  const cart = useCartStore((state) => state.cart);
  const totalPrice = useCartStore((state) => state.totalPrice);

  const navigate = useNavigate();

  return (
    <div className="rounded-[14px] border border-gray200 bg-white p-6 lg:w-[449px]">
      <h3 className="mb-[1.875rem] border-b border-b-gray-200 pb-[1.875rem] text-xl font-bold">
        Order total
      </h3>

      <Button
        label="Delivery fees not included yet."
        icon={alertCircleIcon}
        secondary
        className="mb-[1.875rem] w-full cursor-auto text-sm font-semibold text-gray500 hover:opacity-100 sm:text-base"
      />

      <div className="grid gap-[1.875rem]">
        <div className="flex items-center justify-between text-gray500">
          <span>Subtotal</span>
          <span>₵{totalPrice}</span>
        </div>

        <div className="flex items-center justify-between text-gray500">
          <span>Discount</span>
          <span>-₵0.00</span>
        </div>

        <div className="flex items-center justify-between text-lg font-bold">
          <span>Total</span>
          <span>₵{totalPrice.toFixed(2)}</span>
        </div>

        <Button
          disabled={cart.length === 0}
          label="Check out now"
          className="font-semibold disabled:opacity-100"
          onClick={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
};

export default OrderTotal;
