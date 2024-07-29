import minusIcon from "@/assets/icons/cart/minus.svg";
import plusIcon from "@/assets/icons/cart/plus.svg";
import { cn } from "@/lib";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface QuantityControlProps {
  id: string;
  amount: number;
  btn?: boolean;
}

const QuantityControl = ({ id, amount, btn }: QuantityControlProps) => {
  const [quantity, setQuantity] = useState(amount);
  const addToCart = useCartStore((state) => state.addItem);
  const removeFromCart = useCartStore((state) => state.removeItem);

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
    addToCart({ id });
  };

  const decreaseQuantityHandler = () => {
    setQuantity((prev) => prev - 1);
    removeFromCart(id);
  };

  return (
    <div
      className={cn(
        "mx-auto flex w-fit gap-3.5",
        btn &&
          "w-full justify-between gap-0 rounded-md border border-gray-200 px-4 py-2.5",
      )}
    >
      <img
        src={minusIcon}
        alt=""
        className="cursor-pointer hover:opacity-90"
        onClick={decreaseQuantityHandler}
      />
      <span className="font-bold">{quantity}</span>
      <img
        src={plusIcon}
        alt=""
        className="cursor-pointer hover:opacity-90"
        onClick={increaseQuantityHandler}
      />
    </div>
  );
};

export default QuantityControl;
