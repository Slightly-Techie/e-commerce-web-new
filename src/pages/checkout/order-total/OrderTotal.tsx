import { useState } from "react";
import SelectCoin from "./SelectCoin";
import Total from "./Total";

export interface ICoin {
  value: string;
  isSelected: boolean;
}

const defaultCoins: ICoin[] = [
  { value: "10", isSelected: false },
  { value: "20", isSelected: false },
  { value: "50", isSelected: false },
  { value: "100", isSelected: false },
  { value: "Other", isSelected: false },
];

const OrderTotal = () => {
  const [coins, setCoins] = useState(defaultCoins);
  const [isApplied, setIsApplied] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="w-full max-w-[462px] rounded-[14px] border border-gray200 bg-white p-6">
      <h3 className="mb-[1.875rem] text-xl font-bold text-[#111111]">
        Order Total
      </h3>

      <SelectCoin
        coins={coins}
        setCoins={setCoins}
        setIsApplied={setIsApplied}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <Total coins={coins} isApplied={isApplied} inputValue={inputValue} />
    </div>
  );
};

export default OrderTotal;
