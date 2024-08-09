import Button from "@/components/Button";
import { cn } from "@/lib";
import { Dispatch, FC, SetStateAction, useState } from "react";
import alertCircle from "../../../assets/icons/checkout/alert-circle.svg";
import ticket1 from "../../../assets/icons/checkout/ticket-01.svg";
import coin from "../../../assets/icons/navbar/coin.svg";
import { ICoin } from "./OrderTotal";

interface SelectCoinProps {
  coins: ICoin[];
  setCoins: Dispatch<SetStateAction<{ value: string; isSelected: boolean }[]>>;
  setIsApplied: Dispatch<SetStateAction<boolean>>;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const SelectCoin: FC<SelectCoinProps> = ({
  coins,
  setCoins,
  setIsApplied,
  setInputValue,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectCoinHandler = (value: string) => {
    const updatedCoins = coins.map((coin) => {
      if (coin.value !== value) coin.isSelected = false;

      if (coin.value === value) coin.isSelected = !coin.isSelected;
      setIsSelected(coins.some((coin) => coin.isSelected));
      return coin;
    });

    setCoins(updatedCoins);
  };

  const applyCoinHandler = () => {
    setIsApplied(true);

    // if (selectedCoin === "Other") setSelectedCoin(inputValue);
  };

  const isOtherSelected = coins.find(
    (coin) => coin.value === "Other",
  )?.isSelected;

  return (
    <div className="mb-[1.875rem]">
      <p className="mb-4 flex items-center gap-1.5 font-bold text-[#111111]">
        <span>Enjoy savings with ST coins!</span>
        <img src={alertCircle} alt="" />
      </p>

      <div className="mb-4 rounded-lg border border-[#E1D6BB] bg-[#FDF7E9] px-3 py-4 font-semibold text-[#967E40]">
        One ST coin{" "}
        <img
          src={coin}
          alt=""
          className="mx-[0.1875rem] inline-block h-[19px] w-[18px]"
        />{" "}
        holds the value of GHS 10.
      </div>

      <div className="mb-[1.875rem] flex flex-wrap gap-3">
        {coins.map(({ value, isSelected }, index) => (
          <div
            className={cn(
              "cursor-pointer rounded-lg px-6 py-[0.875rem] font-semibold hover:opacity-90",
              isSelected ? "bg-[#111111] text-white" : "bg-gray75 text-gray500",
            )}
            key={index}
            onClick={() => selectCoinHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 border-b border-b-gray200 pb-[1.875rem] sm:flex-row">
        <div className="relative w-full">
          <input
            disabled={!isOtherSelected}
            type="text"
            placeholder="Enter amount of coins"
            className="w-full rounded-lg border border-gray300 px-4 py-3 placeholder:text-gray400 focus:outline focus:outline-[#111111] disabled:cursor-not-allowed disabled:opacity-30"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <img
            src={ticket1}
            alt=""
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        </div>

        <Button
          disabled={!isSelected}
          label="Apply"
          ghost
          className="gap-0 rounded-lg border border-gray300 px-5 py-3 text-primaryLight hover:opacity-85"
          onClick={applyCoinHandler}
        />
      </div>
    </div>
  );
};

export default SelectCoin;
