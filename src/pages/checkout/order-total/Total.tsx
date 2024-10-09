import { useCartStore } from "@/store/cartStore";
import { FC } from "react";
import { ICoin } from "./OrderTotal";

interface TotalProps {
  coins: ICoin[];
  isApplied: boolean;
  inputValue: string;
}

const Total: FC<TotalProps> = ({ coins, isApplied, inputValue }) => {
  const totalPrice = useCartStore((state) => state.totalPrice);

  const selectedCoin = coins.find((coin) => coin.isSelected === true);

  let discount = 0;

  if (isApplied) {
    discount = selectedCoin ? +selectedCoin.value * 10 : 0;
  }

  if (isApplied && selectedCoin?.value === "Other") {
    discount = !isNaN(+inputValue) ? +inputValue * 10 : 0;
  }

  return (
    <div className="grid gap-[1.875rem] text-gray500">
      <div className="flex justify-between">
        <p>Sub Total</p>
        <span>GHC {totalPrice.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <p>Delivery</p>
        <span>GHC 24.00</span>
      </div>

      <div className="flex justify-between">
        <p>Coin Discount</p>
        <span>GHC -{discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between">
        <p>Total</p>
        <span>GHC {(totalPrice - discount).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Total;
