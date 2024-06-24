import coinIcon from "../../assets/icons/navbar/coin.svg";

const Balance = () => {
  return (
    <div className="flex items-center gap-4 rounded-lg md:p-2.5 lg:gap-2.5 md:bg-gray100">
      <img src={coinIcon} alt="" className="w-[20px]" />
      <span className="font-medium text-[#111111]">14,456 STC</span>
    </div>
  );
};

export default Balance;
