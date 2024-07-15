import minusIcon from "@/assets/icons/cart/minus.svg";
import plusIcon from "@/assets/icons/cart/plus.svg";
import { useState } from "react";

interface QuantityControlProps {
  amount: number;
}

const QuantityControl = ({ amount }: QuantityControlProps) => {
  const [quantity, setQuantity] = useState(amount);

  const increaseQuantityHandler = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity <= 1) return;

    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="mx-auto flex w-fit gap-3.5">
      <img
        src={minusIcon}
        alt=""
        className="cursor-pointer hover:opacity-90"
        onClick={decreaseQuantityHandler}
      />
      <span>{quantity}</span>
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
